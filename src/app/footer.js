import {
  FaTelegram,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "./main.css";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "گروه طراحی بیتا",
            url: "https://bitagroupdesign.com",
            logo: "https://yourwebsite.com/logo.png",
            sameAs: [
              "https://facebook.com/yourpage",
              "https://twitter.com/yourpage",
              "https://www.instagram.com/bitaa.group?igsh=MWhjNmZ2NDE3MWNhNw==",
              "https://t.me/yourchannel",
              "https://wa.me/yourphonenumber",
            ],
          }),
        }}
      />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div id="about-us" className="col-span-1">
          <h2 className="text-2xl font-semibold mb-4">درباره ما</h2>
          <p className="text-sm leading-6">
            ما در زمینه ساخت و ساز با کیفیت بالا، بازسازی و طراحی داخلی تخصص
            داریم. تیم کارشناسان ما دقت، دوام و زیبایی را در هر پروژه تضمین
            می‌کند. چه بازسازی خانه باشد، چه ساخت محصولات چوبی یا کارهای برقی،
            ما بر کیفیت ساخت و رضایت مشتری اولویت داریم.
          </p>
        </div>

        {/* Left Section: Contact & Careers */}
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold mb-4">برای اطلاعات بیشتر</h2>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:text-[#ffecc4] transition flex"
                href="tel:+9123721231"
                aria-label="Phone"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-7 phoneicon"
                >
                  <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
                  <path
                    fillRule="evenodd"
                    d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z"
                    clipRule="evenodd"
                  />
                </svg>
                +۹۱۲۳۷۲۱۲۳۱
              </a>
              <a
                className="hover:text-[#ffecc4] transition flex mt-5"
                href="tel:+9123721231"
                aria-label="Phone"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-7 phoneicon"
                >
                  <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
                  <path
                    fillRule="evenodd"
                    d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z"
                    clipRule="evenodd"
                  />
                </svg>
                +۹۱۲۴۸۳۱۹۳۶
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm">
            Copyright © 2025 وب‌سایت شما |
            <a href="/privacy" className="hover:text-[#ffecc4] transition">
              {" "}
              سیاست حفظ حریم خصوصی
            </a>
          </p>
        </div>

        {/* Right Section: Social Media */}
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold mb-4">دنبال کنید</h2>
          <div className="flex space-x-4">
            <div className="flex space-x-4">
              <a
                href="https://t.me/yourchannel"
                className="hover:text-[#ffecc4] transition flex items-center ml-5"
                aria-label="Telegram"
              >
                <FaTelegram size={30} />
              </a>
              <a
                href="https://www.instagram.com/bitaa.group?igsh=MWhjNmZ2NDE3MWNhNw=="
                className="hover:text-[#ffecc4] transition flex items-center"
                aria-label="Instagram"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://wa.me/yourphonenumber"
                className="hover:text-[#ffecc4] transition flex items-center"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Section */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6">
        <h2 className="font-semibold text-lg mb-2">
          توسعه وب‌سایت توسط{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="black"
            className="w-8 h-8 E-icon"
          >
            <path
              fillRule="evenodd"
              d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/kian-amanat"
            className="hover:text-[#ffecc4] transition ml-5"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/kian-amanat-55379627b/"
            className="hover:text-[#ffecc4] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="tel:+1234567890"
            className="hover:text-[#ffecc4] transition"
            aria-label="Phone"
          >
            +۹۳۸۰۵۶۳۱۵۸
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
