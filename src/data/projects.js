import rebuild from "@/assets/images/rebuild.jpg";
import wood from "@/assets/images/wood.jpg";
import door from "@/assets/images/door.jpg";
import plumbing from "@/assets/images/plumbin.jpg";
import ceramic from "@/assets/images/ceramic2.jpg";
import electric from "@/assets/images/electric.jpg";
import paint from "@/assets/images/paint.jpg";
import windows from "@/assets/images/windows.jpg";

const projects = [
  {
    slug: "rebuild",
    title: "بازسازی خانه شما",
    en: "Renovation",
    description:
      "ما در بازسازی خانه‌ها مطابق با دیدگاه شما تخصص داریم.\nچه یک نوسازی کامل باشد یا یک تغییر جزئی، تیم ما دقت و کیفیت را تضمین می‌کند.\nبا مهارت بالا، خانه رؤیایی شما را به واقعیت تبدیل می‌کنیم.",
    image: rebuild,
    alt: "پروژه بازسازی خانه",
  },
  {
    slug: "wood",
    title: "محصولات چوبی",
    en: "Woodwork",
    description:
      "صنعتگران ماهر ما محصولات چوبی سفارشی متناسب با نیازهای شما می‌سازند.\nاز مبلمان گرفته تا عناصر دکوراتیو، ما از مواد باکیفیت برای دوام بیشتر استفاده می‌کنیم.\nزیبایی طراحی‌های چوبی دست‌ساز را تجربه کنید.",
    image: wood,
    alt: "مبلمان و دکور چوبی دست‌ساز",
  },
  {
    slug: "door",
    title: "طراحی درب",
    en: "Doors",
    description:
      "ما درب‌های شیک و باکیفیتی طراحی و تولید می‌کنیم که متناسب با فضای شما باشد.\nچه سبک مدرن را بپسندید یا کلاسیک، ما یک تناسب بی‌نقص را تضمین می‌کنیم.\nفضای داخلی خود را با درب‌های سفارشی ما ارتقا دهید.",
    image: door,
    alt: "طراحی درب‌های سفارشی",
  },
  {
    slug: "plumbing",
    title: "لوله‌کشی",
    en: "Plumbing",
    description:
      "خدمات حرفه‌ای لوله‌کشی ما از تعمیر نشتی گرفته تا نصب کامل را شامل می‌شود.\nما سیستم‌های آبی مطمئن و کارآمد را برای خانه شما تضمین می‌کنیم.\nروی ما برای ارائه راه‌حل‌های برتر لوله‌کشی حساب کنید.",
    image: plumbing,
    alt: "خدمات و نصب لوله‌کشی",
  },
  {
    slug: "ceramic",
    title: "سرامیک",
    en: "Ceramic",
    description:
      "ما نصب سرامیک باکیفیت برای کف، دیوارها و سطوح را ارائه می‌دهیم.\nتیم متخصص ما با استفاده از مواد بادوام، تکمیل بدون نقص را تضمین می‌کند.\nخانه خود را با طراحی‌های سرامیکی شیک و زیبا تغییر دهید.",
    image: ceramic,
    alt: "نصب کاشی‌های سرامیکی",
  },
  {
    slug: "electric",
    title: "برق‌کاری",
    en: "Electrical",
    description:
      "برق‌کاران مجرب ما نصب، تعمیر و نگهداری را با در نظر گرفتن ایمنی انجام می‌دهند.\nاز سیستم روشنایی تا سیم‌کشی کامل، ما خدماتی مطمئن ارائه می‌دهیم.\nخانه خود را با خدمات برق‌کاری حرفه‌ای ما روشن نگه دارید.",
    image: electric,
    alt: "نصب و سیم‌کشی برق",
  },
  {
    slug: "paint",
    title: "نقاشی",
    en: "Painting",
    description:
      "خدمات نقاشی ما شامل پروژه‌های داخلی و خارجی با دقت و توجه ویژه است.\nما از رنگ‌ها و پوشش‌های باکیفیت برای یک ظاهر بی‌نقص استفاده می‌کنیم.\nخانه خود را با راه‌حل‌های نقاشی حرفه‌ای ما تغییر دهید.",
    image: paint,
    alt: "خدمات نقاشی و رنگ‌آمیزی",
  },
  {
    slug: "windows",
    title: "پنجره",
    en: "Windows",
    description:
      "ما راه‌حل‌های سفارشی پنجره را برای بهبود زیبایی و کارایی خانه شما ارائه می‌دهیم.\nاز طراحی تا نصب، ما یک تناسب بی‌نقص را تضمین می‌کنیم.\nپنجره‌های خود را با مهارت و تخصص ما ارتقا دهید.",
    image: windows,
    alt: "طراحی و نصب پنجره‌های سفارشی",
  },
];

export default projects;
export const getProject = (slug) => projects.find((p) => p.slug === slug);
