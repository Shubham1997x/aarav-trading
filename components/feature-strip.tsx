import { LuStar, LuShieldCheck, LuWallet, LuUsers } from "react-icons/lu";

const FEATURES = [
  {
    icon: LuStar,
    title: "Premium Quality",
    description: "High performance products",
  },
  {
    icon: LuShieldCheck,
    title: "Safe & Effective",
    description: "Tough on dirt, safe for home",
  },
  {
    icon: LuWallet,
    title: "Value For Money",
    description: "Best quality at best prices",
  },
  {
    icon: LuUsers,
    title: "Trusted by Thousands",
    description: "Reliable cleaning solutions",
  },
];

export function FeatureStrip() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-lg sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center gap-4 bg-card px-6 py-6"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <feature.icon className="size-6" />
            </span>
            <div className="flex flex-col">
              <span className="font-heading text-base font-semibold text-foreground">
                {feature.title}
              </span>
              <span className="text-sm text-muted-foreground">
                {feature.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
