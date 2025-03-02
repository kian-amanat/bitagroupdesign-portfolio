"use client";

import Image from "next/image";
import "./main.css";
import data from "./data.js";
import FadeUpText from "./fadeUpText";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function Projects() {
  const router = useRouter();

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>پروژه‌ها | بیتا گروپ دیزاین</title>
        <meta
          name="description"
          content="مشاهده پروژه‌های طراحی و توسعه وب توسط بیتا گروپ دیزاین."
        />
        <meta
          name="keywords"
          content="پروژه های وب, طراحی سایت, بیتا گروپ دیزاین, توسعه وب"
        />
        <meta name="author" content="Bita Group Design" />
        <meta property="og:title" content="پروژه‌ها | بیتا گروپ دیزاین" />
        <meta
          property="og:description"
          content="مشاهده پروژه‌های طراحی و توسعه وب توسط بیتا گروپ دیزاین."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <meta
          property="og:url"
          content="https://bitagroupdesign.com/projects"
        />
        <meta name="twitter:title" content="پروژه‌ها | بیتا گروپ دیزاین" />
        <meta
          name="twitter:description"
          content="مشاهده پروژه‌های طراحی و توسعه وب توسط بیتا گروپ دیزاین."
        />
        <meta name="twitter:image" content="/preview-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="fa" dir="rtl" />
      </Head>

      {/* Projects Section */}
      <div className="projects">
        {data.map((project) => (
          <div key={project.id} className="project">
            <FadeUpText>
              <Image
                src={project.image}
                alt={project.alt || "تصویری از پروژه"}
                width={1280}
                height={960}
                className="project-image"
                priority={false}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 1280px"
              />
              <h3 className="project-text">{project.title}</h3>
              {/* <p>{project.description}</p> */}
              <button
                className="more-btn"
                onClick={() => router.push(`/projects/${project.id}`)}
              >
                اطلاعات بیشتر{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="arrow-btn"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </FadeUpText>
          </div>
        ))}
      </div>
    </>
  );
}
