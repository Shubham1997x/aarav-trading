export const siteConfig = {
  companyName: "Aarav Trading",
  shortName: "Aarav",
  tagline: "Clean Home Solutions",
  description:
    "Premium cleaning products for homes and businesses — trusted quality, wholesale pricing.",
  whatsappNumber: "917978925403",
  phoneDisplay: "+91 79789 25403",
  enquiryEmail: "Shubhamagrawal6295@gmail.com",
  address: "Aarav Trading, India",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/917978925403",
  },
} as const;

export function buildWhatsappUrl(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function buildMailtoUrl(opts: {
  subject: string;
  body: string;
}) {
  const { subject, body } = opts;
  return `mailto:${siteConfig.enquiryEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
