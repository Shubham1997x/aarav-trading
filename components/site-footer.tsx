import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

import { CATEGORIES } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-auto bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <Image src="/logo.png" alt="Logo" width={300} height={300} className="rounded-lg" />
            </span>
            <span className="font-heading text-lg font-bold text-white">
              {siteConfig.companyName}
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            Your trusted partner for high quality cleaning products. Making
            every space cleaner, safer and healthier.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-colors hover:bg-emerald-600 hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebook className="size-4" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-colors hover:bg-emerald-600 hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram className="size-4" />
            </a>
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-colors hover:bg-emerald-600 hover:text-white"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 font-heading text-base font-semibold text-white">
            Quick Links
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-heading text-base font-semibold text-white">
            Categories
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <a
                  href={`#category-${category.slug}`}
                  className="hover:text-white"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-heading text-base font-semibold text-white">
            Customer Support
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2.5">
              <FaPhone className="size-3.5 shrink-0 text-emerald-500" />
              <a href={`tel:+${siteConfig.whatsappNumber}`} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <FaEnvelope className="size-3.5 shrink-0 text-emerald-500" />
              <a
                href={`mailto:${siteConfig.enquiryEmail}`}
                className="hover:text-white"
              >
                {siteConfig.enquiryEmail}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <FaLocationDot className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <span>
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights
            reserved.
          </span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
