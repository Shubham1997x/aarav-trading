import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductGallery } from "@/components/product-gallery";
import { ProductDetailActions } from "@/components/product-detail-actions";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.slug === product.categorySlug);
  const discountPct = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );
  const images = Array.from(new Set([product.hero, ...product.gallery]));

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-600"
          >
            <LuArrowLeft className="size-4" />
            Back to catalogue
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ProductGallery images={images} alt={product.name} />

            <div className="flex flex-col">
              {category && (
                <a
                  href={`/#category-${category.slug}`}
                  className="text-sm font-semibold tracking-wide text-emerald-600 uppercase hover:underline"
                >
                  {category.name}
                </a>
              )}
              <h1 className="mt-2 font-heading text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-1 text-base text-muted-foreground">
                by {product.brand}
              </p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.mrp > product.price && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{product.mrp.toLocaleString("en-IN")}
                    </span>
                    <Badge className="bg-emerald-600 text-white">
                      {discountPct}% OFF
                    </Badge>
                  </>
                )}
              </div>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <div className="mt-8">
                <ProductDetailActions product={product} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
