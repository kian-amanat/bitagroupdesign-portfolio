export const site = {
  name: "گروه طراحی بیتا",
  nameEn: "Bita Group Design",
  url: "https://bitagroupdesign.com",
  description:
    "گروه طراحی بیتا؛ طراحی، بازسازی و اجرای کامل فضاهای مسکونی — از نجاری و پنجره تا برق، لوله‌کشی، سرامیک و نقاشی.",
  phones: [
    { label: "+۹۱۲۳۷۲۱۲۳۱", href: "tel:+9123721231" },
    { label: "+۹۱۲۴۸۳۱۹۳۶", href: "tel:+9124831936" },
  ],
  instagram: "https://www.instagram.com/bitaa.group?igsh=MWhjNmZ2NDE3MWNhNw==",
  developer: {
    name: "کیان امانت",
    github: "https://github.com/kian-amanat",
    linkedin: "https://www.linkedin.com/in/kian-amanat-55379627b/",
  },
};

export const nav = [
  { href: "/", label: "خانه", en: "Home" },
  { href: "/projects", label: "پروژه‌ها", en: "Projects" },
  { href: "/about", label: "درباره ما", en: "About" },
  { href: "/contact", label: "تماس", en: "Contact" },
];

const fa = "۰۱۲۳۴۵۶۷۸۹";
export const toFa = (n) => String(n).replace(/\d/g, (d) => fa[d]);
