import { LuTruck } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { buildWhatsappUrl, siteConfig } from "@/lib/site-config";

export function DeliveryBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-emerald-600 px-6 py-8 text-center sm:flex-row sm:px-10 sm:text-left">
        <div className="flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
            <LuTruck className="size-7" />
          </span>
          <div>
            <p className="font-heading text-xl font-bold text-white">
              Fast &amp; Reliable Delivery
            </p>
            <p className="text-base text-emerald-50">
              We deliver across India with speed and care.
            </p>
          </div>
        </div>
        <Button
          nativeButton={false}
          render={
            <a
              href={buildWhatsappUrl(
                `Hi ${siteConfig.companyName}, I'd like to know more about delivery.`
              )}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          className="h-11 rounded-full bg-white px-6 text-base font-semibold text-emerald-700 hover:bg-emerald-50"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
}
