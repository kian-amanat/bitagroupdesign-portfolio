"use client";

import Head from "next/head";
import "./main.css";

const VideoComponent = () => {
  return (
    <>
      <Head>
        {/* SEO Metadata */}
        <title>Home Design Portfolio Video</title>
        <meta
          name="description"
          content="Explore our home design portfolio with this immersive video showcase."
        />
        <meta property="og:type" content="video.other" />
        <meta property="og:title" content="Home Design Portfolio Video" />
        <meta
          property="og:description"
          content="Explore our home design portfolio with this immersive video showcase."
        />
        <meta property="og:url" content="https://yourwebsite.com/video" />
        <meta property="og:image" content="/video-thumbnail.jpg" />
        <meta property="og:video" content="/bg.mp4" />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />

        {/* Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Home Design Portfolio",
            description:
              "Explore our home design portfolio with this immersive video showcase.",
            thumbnailUrl: "https://yourwebsite.com/video-thumbnail.jpg",
            uploadDate: "2025-02-14T12:00:00+00:00",
            contentUrl: "https://yourwebsite.com/bg.mp4",
            embedUrl: "https://yourwebsite.com/video",
          })}
        </script>
      </Head>

      {/* Video Player */}
      <div className="video-container">
        <video
          autoPlay
          //   loop
          muted
          playsInline
          poster="/video-thumbnail.jpg"
          className="video-bg"
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default VideoComponent;
