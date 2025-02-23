import { useEffect, useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setScrolled(true); // وقتی کاربر اسکرول کند، مقدار اسکرول به true تغییر می‌کند
      } else {
        setScrolled(false); // زمانی که کاربر به بالا برگردد مقدار به false تغییر می‌کند
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill={scrolled ? "white" : "black"}
        className="NavIcon"
      >
        <path
          fillRule="evenodd"
          d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
          clipRule="evenodd"
        />
      </svg>

      <div className="right-side">
        <a
          href="#about-us"
          className={`nav-links ${scrolled ? "text-white" : "text-black"}`}
        >
          درباره ما
        </a>
        <a
          href="#contact"
          className={`nav-links ${scrolled ? "text-white" : "text-black"}`}
        >
          تماس با ما
        </a>
      </div>
    </nav>
  );
}
