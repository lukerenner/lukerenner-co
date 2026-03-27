import Image from "next/image";
import { assetPath } from "@/lib/asset-path";

export default function TestimonialGary() {
  return (
    <section
      className="section-dark"
      style={{ minHeight: "669px" }}
    >
      <div
        className="flex flex-col md:flex-row"
        style={{ minHeight: "669px" }}
      >
        {/* Left column: quote text */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center"
          style={{ padding: "60px 60px 60px 60px", textAlign: "center" }}
        >
          <blockquote
            style={{
              fontStyle: "italic",
              fontSize: "22px",
              fontWeight: 300,
              color: "#ffffff",
              lineHeight: "32px",
              margin: 0,
              marginBottom: "30px",
            }}
          >
            &ldquo;Luke helped my company get its demand-generation house in
            order. Not only did he completely revamp our brand and relaunch our
            website, he also helped us deploy several marketing campaigns. The
            SEO work he did literally transformed my business. I tripled my
            business this year.
            <br />
            <br />I recommend him wholeheartedly. His work is excellent.&rdquo;
          </blockquote>

          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontSize: "14px",
                color: "#ffffff",
                margin: 0,
                lineHeight: "22px",
              }}
            >
              — Gary Germer
            </p>
            <p
              style={{
                fontSize: "12px",
                fontStyle: "italic",
                color: "#b4b4b4",
                margin: 0,
                lineHeight: "22px",
              }}
            >
              Gary Germer and Associates
            </p>
          </div>
        </div>

        {/* Right column: image */}
        <div className="w-full md:w-1/2 relative overflow-hidden" style={{ minHeight: "400px" }}>
          <Image
            src={assetPath("/images/206326401138-startup-marketing-consultant-4.jpg")}
            fill
            style={{ objectFit: "cover" }}
            alt="Gary Germer"
          />
        </div>
      </div>
    </section>
  );
}
