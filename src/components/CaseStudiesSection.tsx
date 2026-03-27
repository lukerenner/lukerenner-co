import Image from "next/image";
import { TrendingUp, ArrowRight } from "lucide-react";
import { assetPath } from "@/lib/asset-path";

interface Client {
  name: string;
  logo: string;
  description: string;
}

const clients: Client[] = [
  {
    name: "MANCEPS",
    logo: "/images/432-manceps.png",
    description:
      "Sole marketing hire, responsible for everything, including owning the go-to-market strategy, establishing the brand identity, and building a content-focused demand generation engine from scratch.",
  },
  {
    name: "JCC BOWERS",
    logo: "/images/431-jcc-bowers.png",
    description:
      "First marketing hire that built the marketing team, owned the go-to-market blueprint, established the brand identity, and built the demand generation engine.",
  },
  {
    name: "STEELHOUSE",
    logo: "/images/430-steelhouse.png",
    description:
      "Content creator who helped launch Steelhouse University, a brand initiative to teach entry-level marketers how to settle into their roles and hit the ground running.",
  },
  {
    name: "PROPEL(X)",
    logo: "/images/433-propelx.png",
    description:
      "Developed and executed their inbound content strategy by writing on a variety of science-related topics.",
  },
  {
    name: "DHERBS",
    logo: "/images/434-deherbs-15884826158034.png",
    description:
      "Build out a lot of unique content, including a user-generated content initiative and a documentary youtube series called The 180.",
  },
  {
    name: "GARY GERMER & ASSOCIATES",
    logo: "/images/435-gary-germer.png",
    description:
      "Help the organization relaunch their website and deploy several marketing campaigns.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="section-light"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Section Header */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "60px",
          paddingBottom: "40px",
        }}
      >
        <TrendingUp
          size={40}
          color="#999999"
          style={{ display: "inline-block", marginBottom: "12px" }}
        />
        <h4
          style={{
            fontSize: "24.87px",
            fontWeight: 300,
            color: "#353535",
            textAlign: "center",
            fontFamily: '"Open Sans", sans-serif',
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          Clients and Case Studies
        </h4>
        <hr className="section-divider" />
      </div>

      {/* Client Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          maxWidth: "1100px",
          margin: "0 auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "60px",
        }}
      >
        {clients.map((client) => (
          <div
            key={client.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px 30px",
              textAlign: "center",
            }}
          >
            {/* Logo */}
            <div
              style={{
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "15px",
              }}
            >
              <Image
                src={assetPath(client.logo)}
                width={120}
                height={60}
                alt={client.name}
                style={{
                  maxHeight: "60px",
                  width: "auto",
                  filter: "grayscale(100%)",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Name */}
            <p
              style={{
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#353535",
                margin: 0,
                marginBottom: "12px",
              }}
            >
              {client.name}
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: "14px",
                color: "#646464",
                lineHeight: "22px",
                textAlign: "center",
                margin: 0,
                flexGrow: 1,
              }}
            >
              {client.description}
            </p>

            {/* Arrow */}
            <ArrowRight
              size={24}
              color="#999999"
              style={{ marginTop: "15px", flexShrink: 0 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
