"use client";

import Image from "next/image";
import FadeUpText from "./fadeUpText";
import "./main.css";
import Navbar from "./navbar";
import VideoComponent from "./videoComponenet";
import Carousel from "./slider";
import Projects from "./project";
import Footer from "./footer";

export default function Home() {
  const images = [
    { src: "/bg11.jpg", alt: "Image 1 description" },
    { src: "/bg.jpg", alt: "Image 2 description" },
    { src: "/bg88.jpg", alt: "Image 3 description" },
    { src: "/bg9.jpg", alt: "Image 4 description" },
  ];
  return (
    <div className="page">
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel images={images} />
        <h1 className="title-page">Bita Group</h1>
        <section className="main-container">
          <div className="projects">
            <FadeUpText>
              <h2 className="project-title">
                بیایید نگاهی دقیق‌تر به حوزه پروژه‌های ما بیندازیم.
              </h2>
            </FadeUpText>
            <Projects />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
