"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assetPath } from "@/lib/asset-path";

const slides = [
  "/images/391-smartmockupsk9qfry83.png",
  "/images/391-smartmockupsk9qfqw3q.png",
  "/images/391-smartmockupsk9qfksu3.png",
  "/images/391-smartmockupsk9qfnfbj.png",
  "/images/391-smartmockupsk9qfjdb1.png",
  "/images/391-smartmockupsk9qfm3hh.png",
  "/images/391-smartmockupsk9qfkdal.png",
];

export default function WebDesignSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      style={{
        backgroundColor: "#242424",
        minHeight: "1041px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
      }}
    >
      {/* Header */}
      <h4
        style={{
          fontSize: "24.87px",
          fontWeight: 300,
          color: "#ffffff",
          textAlign: "center",
          fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
          marginBottom: "20px",
        }}
      >
        Stunning Web Design
      </h4>

      {/* Section divider */}
      <hr
        className="section-divider"
        style={{
          borderColor: "rgba(255,255,255,0.3)",
          marginBottom: "20px",
        }}
      />

      {/* Subtitle */}
      <p
        style={{
          fontSize: "16px",
          color: "rgba(255,255,255,0.75)",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 40px",
          fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
          lineHeight: "1.6",
        }}
      >
        The websites I create unify a breathtaking visual style with the best in
        digital marketing. Design, messaging, landing pages, tracking tags, and
        analytics all come together to deliver a memorable online presence that
        transforms businesses.
      </p>

      {/* Carousel */}
      <div
        style={{
          position: "relative",
          maxWidth: "750px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Prev arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          style={{
            position: "absolute",
            left: "-60px",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "40px",
            cursor: "pointer",
            padding: "20px",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronLeft size={48} />
        </button>

        {/* Slide image */}
        <Image
          src={assetPath(slides[currentIndex])}
          alt={`Web design slide ${currentIndex + 1}`}
          width={750}
          height={500}
          style={{
            maxWidth: "750px",
            width: "100%",
            height: "auto",
            display: "block",
          }}
          priority={currentIndex === 0}
        />

        {/* Next arrow */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          style={{
            position: "absolute",
            right: "-60px",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "40px",
            cursor: "pointer",
            padding: "20px",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronRight size={48} />
        </button>
      </div>

      {/* CTA Button */}
      <a
        href="/web-design"
        style={{
          display: "block",
          width: "fit-content",
          margin: "40px auto",
          background: "transparent",
          color: "white",
          border: "3px solid white",
          padding: "12px 35px",
          fontSize: "12px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          textDecoration: "none",
          fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
          fontWeight: 400,
          cursor: "pointer",
        }}
      >
        WEB DESIGN SERVICES ▸
      </a>
    </section>
  );
}
