import Link from "next/link";

export const metadata = { title: "صفحه پیدا نشد" };

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-cream">
      <p className="text-[clamp(7rem,28vw,22rem)] font-extrabold leading-none text-brass/90" dir="ltr">404</p>
      <h1 className="mt-4 text-3xl font-bold">این صفحه پیدا نشد.</h1>
      <Link href="/" className="mt-10 inline-flex h-14 items-center rounded-full bg-cream px-8 text-sm font-bold text-ink transition-colors hover:bg-brass">
        بازگشت به خانه
      </Link>
    </section>
  );
}
