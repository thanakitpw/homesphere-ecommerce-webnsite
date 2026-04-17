// Tiptap JSON for paragraph-only bodies. Rich content can be added post-seed.
const para = (text: string) => ({
  type: "doc",
  content: [
    { type: "paragraph", content: [{ type: "text", text }] },
  ],
});

export const pagesSeed = () => {
  const now = new Date().toISOString();
  return [
    {
      slug: "about",
      title: { th: "เกี่ยวกับเรา", en: "About Us" },
      excerpt: { th: "เรื่องราว Homesphere", en: "The Homesphere story" },
      content: para(
        "Homesphere เป็นแพลตฟอร์มเครื่องใช้ภายในบ้านแบบครบวงจร",
      ),
      status: "published" as const,
      published_at: now,
    },
    {
      slug: "contact",
      title: { th: "ติดต่อเรา", en: "Contact Us" },
      content: para("โทร 02-000-0000 หรืออีเมล hello@homesphere.demo"),
      status: "published" as const,
      published_at: now,
    },
    {
      slug: "policy",
      title: { th: "นโยบายความเป็นส่วนตัว", en: "Privacy Policy" },
      content: para("เราเคารพความเป็นส่วนตัวของคุณ"),
      status: "published" as const,
      published_at: now,
    },
    {
      slug: "terms",
      title: { th: "ข้อกำหนดการใช้งาน", en: "Terms of Service" },
      content: para("โปรดอ่านข้อกำหนดก่อนใช้บริการ"),
      status: "published" as const,
      published_at: now,
    },
    {
      slug: "shipping-returns",
      title: { th: "การจัดส่งและการคืนสินค้า", en: "Shipping & Returns" },
      content: para("ส่งฟรีทั่วประเทศสำหรับออเดอร์ 500 บาทขึ้นไป คืนได้ภายใน 14 วัน"),
      status: "published" as const,
      published_at: now,
    },
  ];
};
