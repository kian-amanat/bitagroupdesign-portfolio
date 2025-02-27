import Image from "next/image";

const data = [
  {
    id: 1,
    title: "بازسازی خانه شما",
    description:
      "ما در بازسازی خانه‌ها مطابق با دیدگاه شما تخصص داریم.\n" +
      "چه یک نوسازی کامل باشد یا یک تغییر جزئی، تیم ما دقت و کیفیت را تضمین می‌کند.\n" +
      "با مهارت بالا، خانه رؤیایی شما را به واقعیت تبدیل می‌کنیم.",
    image: "/rebuild.jpg",
    alt: "پروژه بازسازی خانه",
  },
  {
    id: 2,
    title: "محصولات چوبی",
    description:
      "صنعتگران ماهر ما محصولات چوبی سفارشی متناسب با نیازهای شما می‌سازند.\n" +
      "از مبلمان گرفته تا عناصر دکوراتیو، ما از مواد باکیفیت برای دوام بیشتر استفاده می‌کنیم.\n" +
      "زیبایی طراحی‌های چوبی دست‌ساز را تجربه کنید.",
    image: "/wood.jpg",
    alt: "مبلمان و دکور چوبی دست‌ساز",
  },
  {
    id: 3,
    title: "طراحی درب",
    description:
      "ما درب‌های شیک و باکیفیتی طراحی و تولید می‌کنیم که متناسب با فضای شما باشد.\n" +
      "چه سبک مدرن را بپسندید یا کلاسیک، ما یک تناسب بی‌نقص را تضمین می‌کنیم.\n" +
      "فضای داخلی خود را با درب‌های سفارشی ما ارتقا دهید.",
    image: "/door.jpg",
    alt: "طراحی درب‌های سفارشی",
  },
  {
    id: 4,
    title: "لوله‌کشی",
    description:
      "خدمات حرفه‌ای لوله‌کشی ما از تعمیر نشتی گرفته تا نصب کامل را شامل می‌شود.\n" +
      "ما سیستم‌های آبی مطمئن و کارآمد را برای خانه شما تضمین می‌کنیم.\n" +
      "روی ما برای ارائه راه‌حل‌های برتر لوله‌کشی حساب کنید.",
    image: "/plumbin.jpg",
    alt: "خدمات و نصب لوله‌کشی",
  },
  {
    id: 5,
    title: "سرامیک",
    description:
      "ما نصب سرامیک باکیفیت برای کف، دیوارها و سطوح را ارائه می‌دهیم.\n" +
      "تیم متخصص ما با استفاده از مواد بادوام، تکمیل بدون نقص را تضمین می‌کند.\n" +
      "خانه خود را با طراحی‌های سرامیکی شیک و زیبا تغییر دهید.",
    image: "/ceramic2.jpg",
    alt: "نصب کاشی‌های سرامیکی",
  },
  {
    id: 6,
    title: "برق‌کاری",
    description:
      "برق‌کاران مجرب ما نصب، تعمیر و نگهداری را با در نظر گرفتن ایمنی انجام می‌دهند.\n" +
      "از سیستم روشنایی تا سیم‌کشی کامل، ما خدماتی مطمئن ارائه می‌دهیم.\n" +
      "خانه خود را با خدمات برق‌کاری حرفه‌ای ما روشن نگه دارید.",
    image: "/electric.jpg",
    alt: "نصب و سیم‌کشی برق",
  },
  {
    id: 7,
    title: "نقاشی",
    description:
      "خدمات نقاشی ما شامل پروژه‌های داخلی و خارجی با دقت و توجه ویژه است.\n" +
      "ما از رنگ‌ها و پوشش‌های باکیفیت برای یک ظاهر بی‌نقص استفاده می‌کنیم.\n" +
      "خانه خود را با راه‌حل‌های نقاشی حرفه‌ای ما تغییر دهید.",
    image: "/paint.jpg",
    alt: "خدمات نقاشی و رنگ‌آمیزی",
  },
  {
    id: 8,
    title: "پنجره",
    description:
      "ما راه‌حل‌های سفارشی پنجره را برای بهبود زیبایی و کارایی خانه شما ارائه می‌دهیم.\n" +
      "از طراحی تا نصب، ما یک تناسب بی‌نقص را تضمین می‌کنیم.\n" +
      "پنجره‌های خود را با مهارت و تخصص ما ارتقا دهید.",
    image: "/windows.jpg",
    alt: "طراحی و نصب پنجره‌های سفارشی",
  },
];

export default data;
