export type Category = {
  slug: string;
  name: string;
  icon: "spray" | "chemical" | "broom" | "mop";
};

export const CATEGORIES: Category[] = [
  { slug: "daily-floor-cleaning", name: "Daily Floor Cleaning", icon: "spray" },
  { slug: "heavy-cleaning-chemicals", name: "Heavy Cleaning Chemicals", icon: "chemical" },
  { slug: "broom", name: "Broom (Jhadu)", icon: "broom" },
  { slug: "mop", name: "Mop", icon: "mop" },
];

export type Product = {
  id: string;
  categorySlug: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  mrp: number;
  hero: string;
  gallery: string[];
};

const IMG = "/images";

export const PRODUCTS: Product[] = [
  // Broom (Jhadu)
  {
    id: "vibhava-bond-broom",
    categorySlug: "broom",
    name: "Vibhava Bond Grass Broom",
    brand: "Vibhava",
    description:
      "Soft grass broom with a durable blue handle and comfortable red grip — ideal for everyday sweeping. Sold 60 pcs/bag.",
    price: 1499,
    mrp: 1699,
    hero: `${IMG}/Broom/Sweep – Vibhava Bond Broom 60 PCS BAG/e93b8dab-d024-4036-89dd-837b129de402.png`,
    gallery: [
      `${IMG}/Broom/Sweep – Vibhava Bond Broom 60 PCS BAG/e93b8dab-d024-4036-89dd-837b129de402.png`,
      `${IMG}/Broom/Sweep – Vibhava Bond Broom 60 PCS BAG/cbffcc18-df38-4b12-9916-33fd21d1b36c.png`,
      `${IMG}/Broom/Sweep – Vibhava Bond Broom 60 PCS BAG/db17f371-fc91-4c18-b478-ec4d498c8cfe.png`,
      `${IMG}/Broom/Sweep – Vibhava Bond Broom 60 PCS BAG/647dff04-c0fc-4890-878d-2b8a569619bf.png`,
    ],
  },
  {
    id: "vibhava-plus-broom",
    categorySlug: "broom",
    name: "Vibhava Plus Grass Broom",
    brand: "Vibhava",
    description:
      "Grass broom with a sturdy orange handle for comfortable everyday sweeping. Sold 60 pcs/bag.",
    price: 1599,
    mrp: 1799,
    hero: `${IMG}/Broom/Sweep – Vibhava Plus Broom 60 PCS BAG/b3a40914-17a8-4036-b5e0-b3c85cdddf1b.png`,
    gallery: [
      `${IMG}/Broom/Sweep – Vibhava Plus Broom 60 PCS BAG/b3a40914-17a8-4036-b5e0-b3c85cdddf1b.png`,
      `${IMG}/Broom/Sweep – Vibhava Plus Broom 60 PCS BAG/d8c0e6d3-2839-4f2b-b873-4b4528176da2.png`,
      `${IMG}/Broom/Sweep – Vibhava Plus Broom 60 PCS BAG/e38a7fa9-11da-4ba7-85f9-a6ee388a8c90.png`,
      `${IMG}/Broom/Sweep – Vibhava Plus Broom 60 PCS BAG/75052f2a-5066-4092-91e8-d05c51d77d56.png`,
    ],
  },
  {
    id: "vibhava-ultra-broom",
    categorySlug: "broom",
    name: "Vibhava Ultra Grass Broom",
    brand: "Vibhava",
    description:
      "The premium tier in the Vibhava range, with a bright yellow handle built for daily heavy-duty sweeping.",
    price: 1699,
    mrp: 1899,
    hero: `${IMG}/Broom/Sweep – Vibhava Ultra Broom/6844d8e5-fd55-4833-86b9-d68c7ab3416e.png`,
    gallery: [
      `${IMG}/Broom/Sweep – Vibhava Ultra Broom/6844d8e5-fd55-4833-86b9-d68c7ab3416e.png`,
      `${IMG}/Broom/Sweep – Vibhava Ultra Broom/73ffc265-eb3f-4d0a-95cb-343182f7f707.png`,
      `${IMG}/Broom/Sweep – Vibhava Ultra Broom/7d102ad8-c5ff-4997-8ef4-bad1cb2ce226.png`,
      `${IMG}/Broom/Sweep – Vibhava Ultra Broom/dacdf8fb-fe5a-447a-9bf7-426283deea81.png`,
    ],
  },

  // Daily Floor Cleaning
  {
    id: "ozone-tango",
    categorySlug: "daily-floor-cleaning",
    name: "Ozone Fresh Floor Cleaner — Tango",
    brand: "Ozone",
    description:
      "Herbal, pine-oil based floor cleaner in Tango fragrance — non-toxic, non-hypochlorite and pet-friendly. Removes tough stains from any floor type. 1 Ltr.",
    price: 109,
    mrp: 129,
    hero: `${IMG}/Daily Floor Cleaning/Ozone Floor Cleaner 1 Ltr (Tango) – 24 PcsCTN/b3db1722-a98f-47d9-b50d-0685c0dcbe8c.png`,
    gallery: [
      `${IMG}/Daily Floor Cleaning/Ozone Floor Cleaner 1 Ltr (Tango) – 24 PcsCTN/b3db1722-a98f-47d9-b50d-0685c0dcbe8c.png`,
      `${IMG}/Daily Floor Cleaning/Ozone Floor Cleaner 1 Ltr (Tango) – 24 PcsCTN/32a81417-2c8f-4182-97ee-3d8985190244.png`,
      `${IMG}/Daily Floor Cleaning/Ozone Floor Cleaner 1 Ltr (Tango) – 24 PcsCTN/3730f449-96da-40a8-bd3f-1ebd18a31df6.png`,
    ],
  },
  {
    id: "ozone-royal-rose",
    categorySlug: "daily-floor-cleaning",
    name: "Ozone Fresh Floor Cleaner — Royal Rose",
    brand: "Ozone",
    description:
      "Herbal pine-oil formula in Royal Rose fragrance — non-toxic and pet-friendly, removes tough stains on any floor. 1 Ltr.",
    price: 109,
    mrp: 129,
    hero: `${IMG}/Daily Floor Cleaning/Ozone Floor Cleaner 1 Ltr (Tango) – 24 PcsCTN (2)/d28e6cdb-8904-4ba4-8afd-b27530c0dc4c.png`,
    gallery: [
      `${IMG}/Daily Floor Cleaning/Ozone Floor Cleaner 1 Ltr (Tango) – 24 PcsCTN (2)/d28e6cdb-8904-4ba4-8afd-b27530c0dc4c.png`,
      `${IMG}/Daily Floor Cleaning/Ozone Floor Cleaner 1 Ltr (Tango) – 24 PcsCTN (2)/23d85ba8-94af-471b-8219-4818cb491e8d.png`,
      `${IMG}/Daily Floor Cleaning/Ozone Floor Cleaner 1 Ltr (Tango) – 24 PcsCTN (2)/618e50a8-25f6-4515-9e43-ea4139c22871.png`,
    ],
  },

  // Heavy Cleaning Chemicals
  {
    id: "black-belt-disinfectant",
    categorySlug: "heavy-cleaning-chemicals",
    name: "Black Belt Strong Phenyle Disinfectant",
    brand: "Black Belt",
    description:
      "Phenolic-type black disinfectant fluid for a germ-free home, with a convenient measuring cap. 450 ml, 24 pcs/carton.",
    price: 75,
    mrp: 90,
    hero: `${IMG}/Heavy Cleaning Chemicals/Black Belt Disinfectant Fluid 450 Ml - 24 PCSCTN/13b55061-d684-4520-a771-9a00a7ba1089.png`,
    gallery: [
      `${IMG}/Heavy Cleaning Chemicals/Black Belt Disinfectant Fluid 450 Ml - 24 PCSCTN/13b55061-d684-4520-a771-9a00a7ba1089.png`,
      `${IMG}/Heavy Cleaning Chemicals/Black Belt Disinfectant Fluid 450 Ml - 24 PCSCTN/32dec86f-d79e-4c06-b12c-21c0925e3721.png`,
    ],
  },
  {
    id: "black-belt-bleaching-powder",
    categorySlug: "heavy-cleaning-chemicals",
    name: "Black Belt Extra Strong Bleaching Powder",
    brand: "Black Belt",
    description:
      "Kills germs and fungus, removes tough stains and whitens surfaces. Ideal for water sumps and overhead tank cleaning. 500 g.",
    price: 47,
    mrp: 60,
    hero: `${IMG}/Heavy Cleaning Chemicals/Black Belt Strong Bleaching Powder - 500g/e69ee8c6-2262-4097-9023-668775a91464.png`,
    gallery: [
      `${IMG}/Heavy Cleaning Chemicals/Black Belt Strong Bleaching Powder - 500g/e69ee8c6-2262-4097-9023-668775a91464.png`,
      `${IMG}/Heavy Cleaning Chemicals/Black Belt Strong Bleaching Powder - 500g/594843df-b59a-4d49-b916-0e57b0b62a0b.png`,
    ],
  },
  {
    id: "black-belt-cleaning-acid",
    categorySlug: "heavy-cleaning-chemicals",
    name: "Black Belt Original Cleaning Acid",
    brand: "Black Belt",
    description:
      "A strong acid-based cleaner for tiles and toilets, cutting through tough stains and limescale. 500 ml.",
    price: 50,
    mrp: 65,
    hero: `${IMG}/Heavy Cleaning Chemicals/Black Belt Tiles Cleaner 500 ML/44a0aba8-9170-412a-8589-373f0790ee98.png`,
    gallery: [
      `${IMG}/Heavy Cleaning Chemicals/Black Belt Tiles Cleaner 500 ML/44a0aba8-9170-412a-8589-373f0790ee98.png`,
      `${IMG}/Heavy Cleaning Chemicals/Black Belt Tiles Cleaner 500 ML/257151b3-85ac-4b5d-8c70-4e17fe984ecc.png`,
    ],
  },
  {
    id: "black-belt-surface-cleaner",
    categorySlug: "heavy-cleaning-chemicals",
    name: "Black Belt Surface Cleaner",
    brand: "Black Belt",
    description:
      "Exotic herbal fragrance surface cleaner — scientifically formulated to fight germs on kitchen, bathroom and hard-floor surfaces. Convenient flip-cap bottle.",
    price: 85,
    mrp: 100,
    hero: `${IMG}/Daily Floor Cleaning/Ozone Floor Cleaner 1 Ltr (Tango) – 24 PcsCTN (3)/d61de3f0-01df-4714-953e-a79e39afe9ea.png`,
    gallery: [
      `${IMG}/Daily Floor Cleaning/Ozone Floor Cleaner 1 Ltr (Tango) – 24 PcsCTN (3)/d61de3f0-01df-4714-953e-a79e39afe9ea.png`,
      `${IMG}/Daily Floor Cleaning/Ozone Floor Cleaner 1 Ltr (Tango) – 24 PcsCTN (3)/107921d7-fe6e-4dad-9cb0-aaa34d673270.png`,
      `${IMG}/Daily Floor Cleaning/Ozone Floor Cleaner 1 Ltr (Tango) – 24 PcsCTN (3)/bad4b9fc-5d4b-4aa1-a551-3c6143fad3d5.png`,
    ],
  },

  // Mop
  {
    id: "monkey-555-dc100",
    categorySlug: "mop",
    name: "Monkey 555 DC-100 Mop",
    brand: "Monkey 555",
    description:
      "An unbreakable round mop rod paired with a super-absorbent cotton mop head. Comfortable to use, with easy refill changing.",
    price: 133,
    mrp: 200,
    hero: `${IMG}/Mop/Monkey 555 DC - 100 Mop/7c0674c2-68bd-4af9-8c66-4d19e14c46af.png`,
    gallery: [
      `${IMG}/Mop/Monkey 555 DC - 100 Mop/7c0674c2-68bd-4af9-8c66-4d19e14c46af.png`,
      `${IMG}/Mop/Monkey 555 DC - 100 Mop/75b35f71-bb2b-4264-9000-5d88aa7b0501.png`,
    ],
  },
  {
    id: "monkey-555-mexican-cup-mop",
    categorySlug: "mop",
    name: "Monkey 555 Mexican Cup Mop",
    brand: "Monkey 555",
    description:
      "A wet-mop set with multi-coloured poly-blended yarn, a sturdy wooden-grip handle, and an easily replaceable mop head.",
    price: 139,
    mrp: 200,
    hero: `${IMG}/Mop/Monkey 555 Mexican Cup Mop (1N X 40)/07eb4795-50e6-4d2c-b7ec-2adf48b2ff27.png`,
    gallery: [
      `${IMG}/Mop/Monkey 555 Mexican Cup Mop (1N X 40)/07eb4795-50e6-4d2c-b7ec-2adf48b2ff27.png`,
      `${IMG}/Mop/Monkey 555 Mexican Cup Mop (1N X 40)/71034d01-7aa9-4e1f-8bcb-0de2a8ed1419.png`,
      `${IMG}/Mop/Monkey 555 Mexican Cup Mop (1N X 40)/7824777c-f801-48bc-8176-9a375daeeb21.png`,
    ],
  },
  {
    id: "monkey-555-spin-mop",
    categorySlug: "mop",
    name: "Monkey 555 Spin Mop",
    brand: "Monkey 555",
    description:
      "A 360° spin mop-and-bucket set with a machine-washable microfibre head, ultra-portable design, 1 free refill, and a 1-year warranty.",
    price: 999,
    mrp: 1299,
    hero: `${IMG}/Mop/Monkey 555 Spin Mop/b15b2d37-1983-45e2-b5d7-52d49041fea5.png`,
    gallery: [
      `${IMG}/Mop/Monkey 555 Spin Mop/b15b2d37-1983-45e2-b5d7-52d49041fea5.png`,
      `${IMG}/Mop/Monkey 555 Spin Mop/3de46d86-aeab-4b2b-8a08-99daaa104eb6.png`,
      `${IMG}/Mop/Monkey 555 Spin Mop/2651e308-57b0-4a21-994c-13380ca3b73d.png`,
      `${IMG}/Mop/Monkey 555 Spin Mop/7792da13-0ad6-49f6-a94e-e1a92762c405.png`,
    ],
  },
];

export function getProductsByCategory(slug: string) {
  return PRODUCTS.filter((p) => p.categorySlug === slug);
}
