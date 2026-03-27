import Image from "next/image";
import { assetPath } from "@/lib/asset-path";

export default function TestimonialJohn() {
  return (
    <section
      className="section-dark"
      style={{ minHeight: "847px" }}
    >
      <div
        className="flex flex-col md:flex-row"
        style={{ minHeight: "847px" }}
      >
        {/* Left column: image */}
        <div className="w-full md:w-1/2 relative overflow-hidden" style={{ minHeight: "400px" }}>
          <Image
            src={assetPath("/images/250589640612-startup-marketing-consultant-14-15886373848755.jpg")}
            fill
            style={{ objectFit: "cover" }}
            alt="John Bowers"
          />
        </div>

        {/* Right column: quote text */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center"
          style={{ padding: "60px" }}
        >
          <blockquote
            style={{
              fontSize: "22px",
              fontWeight: 300,
              color: "#ffffff",
              lineHeight: "34px",
              margin: 0,
              marginBottom: "30px",
            }}
          >
            &ldquo;Luke is one of the most creative, forward-thinking people I
            have ever worked with. Not only does he demonstrate a deep talent
            for writing, design, and film production, he also has a finely tuned
            business acumen.
            <br />
            <br />
            We&apos;re very glad to have found such a talented and thoughtful
            director to lead our marketing department.&rdquo;
          </blockquote>

          <p
            style={{
              fontSize: "14px",
              color: "#ffffff",
              margin: 0,
              marginBottom: "30px",
            }}
          >
            — John Bowers
          </p>

          <div>
            <a
              href="#case-studies"
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "3px solid #ffffff",
                padding: "12px 30px",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                cursor: "pointer",
                transition: "opacity 0.2s ease",
              }}
            >
              READ THE CASE STUDY ▸
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
