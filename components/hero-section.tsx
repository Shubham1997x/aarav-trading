import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { LuArrowRight } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { siteConfig, buildWhatsappUrl } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.png"
          alt="Premium cleaning products — sprays, mop and bucket set arranged in a bright modern home"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
            Trusted Cleaning Partner
          </span>
          <h1 className="mt-5 font-heading text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Premium cleaning products,{" "}
            <span className="text-emerald-400">delivered right.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            {siteConfig.companyName} supplies high-performance floor
            cleaners, disinfectants, mops and brooms to homes and
            businesses across India — tough on dirt, safe for every space.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href="#products" />}
              className="h-13 gap-2 rounded-full bg-emerald-600 px-7 text-base font-semibold text-white hover:bg-emerald-700"
            >
              Browse Products
              <LuArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href={buildWhatsappUrl(
                    `Hi ${siteConfig.companyName}, I'd like to know more about your products.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-13 gap-2 rounded-full border-white/30 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              <FaWhatsapp className="size-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
