"use client";

import { useMemo, useState } from "react";
import { LuSearch, LuSearchX } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

export function ProductCatalogue() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const isFiltering = query.trim().length > 0 || activeCategory !== "all";

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.categorySlug === activeCategory;
      const matchesQuery =
        q.length === 0 ||
        product.name.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div id="products" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 text-center sm:text-left">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Our Products
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Search or filter by category to find exactly what you need.
        </p>
      </div>

      <div className="relative mx-auto mb-6 max-w-xl sm:mx-0">
        <LuSearch className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products…"
          className="h-13 rounded-full pl-12 text-base"
        />
      </div>

      <div className="flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={cn(
            "rounded-full border px-5 py-2.5 text-base font-semibold transition-colors",
            activeCategory === "all"
              ? "border-emerald-600 bg-emerald-600 text-white"
              : "border-border bg-card text-foreground hover:border-emerald-300 hover:bg-emerald-50"
          )}
        >
          All Products
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setActiveCategory(category.slug)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-base font-semibold transition-colors",
              activeCategory === category.slug
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-border bg-card text-foreground hover:border-emerald-300 hover:bg-emerald-50"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {!isFiltering ? (
        <div className="mt-4">
          {CATEGORIES.map((category) => {
            const products = PRODUCTS.filter(
              (p) => p.categorySlug === category.slug
            );
            if (products.length === 0) return null;
            return (
              <section
                key={category.slug}
                id={`category-${category.slug}`}
                className="scroll-mt-24 py-8"
              >
                <div className="mb-6 flex items-center gap-3 border-l-4 border-emerald-600 pl-4">
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {category.name}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="mt-8">
          <p className="mb-6 text-base text-muted-foreground">
            Showing {filteredProducts.length} product
            {filteredProducts.length === 1 ? "" : "s"}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
            <LuSearchX className="size-7" />
          </span>
          <p className="font-heading text-lg font-semibold text-foreground">
            No products found
          </p>
          <p className="text-base text-muted-foreground">
            Try a different search term or category.
          </p>
        </div>
      )}
    </div>
  );
}
