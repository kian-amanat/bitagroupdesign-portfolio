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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore high-end home design projects and architecture work by Bita Group Design. A portfolio showcasing expertise in interior design, architectural projects, and more."
        />
        <meta
          name="keywords"
          content="home design, architecture, interior design, Bita Group Design, high-end projects, architecture portfolio"
        />
        <meta name="author" content="Kian Amanat" />
        <meta
          property="og:title"
          content="Home Design Portfolio | Bita Group Design"
        />
        <meta
          property="og:description"
          content="Explore high-end home design projects and architecture work by Bita Group Design. Discover the excellence of Bita Group Design's creative solutions."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <meta property="og:url" content="https://bitagroupdesign.com" />
        <meta
          name="twitter:title"
          content="Home Design Portfolio | Bita Group Design"
        />
        <meta
          name="twitter:description"
          content="Explore high-end home design projects and architecture work by Bita Group Design."
        />
        <meta name="twitter:image" content="/preview-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
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
