"use client";

import React, { use } from "react";
import Navbar from "../../navbar";
import data from "../../data";
import Image from "next/image";
import "../../main.css";
import FadeUpText from "../../fadeUpText";
import Footer from "../../footer";

export default function ProjectPage({ params }) {
  const resolvedParams = use(params); // Unwrap params

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Image
        src={data[resolvedParams.id - 1]?.image || "/fallback-image.jpg"} // Prevent errors
        alt={data[resolvedParams.id - 1]?.alt || "Project Image"}
        width={1280}
        height={400}
        className="project-image1"
      />
      <h3 className="title-pro-page">
        {data[resolvedParams.id - 1]?.title || "/fallback-image.jpg"}
      </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-5 arrow-icon"
      >
        <path
          fillRule="evenodd"
          d="M9.47 15.28a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 1 0-1.06-1.06L10 13.69 6.28 9.97a.75.75 0 0 0-1.06 1.06l4.25 4.25ZM5.22 6.03l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L10 8.69 6.28 4.97a.75.75 0 0 0-1.06 1.06Z"
          clipRule="evenodd"
        />
      </svg>
      <FadeUpText>
        <p className="des-page">
          {data[resolvedParams.id - 1]?.description || "/fallback-image.jpg"}
        </p>
      </FadeUpText>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
