"use client";

import Image from "next/image";
import FadeUpText from "./fadeUpText";
import "./main.css";
import Navbar from "./navbar";
import VideoComponent from "./videoComponenet";
import Carousel from "./slider";
import Projects from "./project";
import Footer from "./footer";
import Head from "next/head";

export default function Home() {
  const images = [
    { src: "/bg11.jpg", alt: "Image 1 description", width: 1920, height: 1080 },
    { src: "/bg2.jpg", alt: "Image 2 description", width: 1920, height: 1080 },
    { src: "/bg18.jpg", alt: "Image 3 description", width: 1920, height: 1080 },
    { src: "/bg19.jpg", alt: "Image 4 description", width: 1920, height: 1080 },
  ];
  return (
    <div className="page">
      <Head>
        {{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Home Design Portfolio",
          description:
            "A portfolio showcasing high-end home designs and architecture projects.",
        }}
      </Head>
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
