import {
  TrendingUp,
  Award,
  Play,
  Monitor,
  BarChart2,
  Filter,
  ArrowRight,
  Briefcase,
} from "lucide-react";

interface Service {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string; style?: React.CSSProperties }>;
  description: string;
}

const services: Service[] = [
  {
    name: "Growth",
    icon: TrendingUp,
    description:
      "At Cyngn, I generated $7m worth of pipeline and achieved a 20x ROMS, using a process that I can repeat for your business. Let me help you identify, nurture, and convert highly qualified marketing leads by using the very best omni-channel and time-tested strategies.",
  },
  {
    name: "Brand",
    icon: Award,
    description:
      "I help early-stage companies establish their brand identities by not only choosing design elements like logos and colors but also by helping them discover their brand's unique voice and personality. A strong brand creates instant recognition and differentiation.",
  },
  {
    name: "Video",
    icon: Play,
    description:
      'My videos have won awards, appeared in Times Square and racked up millions of views. Cyngn CEO, Lior Tal, describes them as "nothing short of masterful." In an era of micro-attention spans, video is the most impactful medium.',
  },
  {
    name: "Web Design",
    icon: Monitor,
    description:
      "I build custom websites that can unify your design, messaging, branding, and growth strategies into a memorable online presence (like this one).",
  },
  {
    name: "Analytics",
    icon: BarChart2,
    description:
      "Every creative or strategic decision I make is informed by digging deep into the data. My three favorite tools (and certifications) are Google Analytics, Hotjar, and Hubspot.",
  },
  {
    name: "Paid Marketing",
    icon: Filter,
    description:
      "Companies cannot accelerate growth without a paid marketing component. I am certified across Google, Facebook, and Linkedin and build all of the ad assets myself.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
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
        <Briefcase
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
          CMO Strategy.
        </h4>
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
          Compelling Creative.
        </h4>
        <hr className="section-divider" />
      </div>

      {/* Service Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          maxWidth: "1100px",
          margin: "0 auto",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px 30px",
                textAlign: "center",
              }}
            >
              <Icon
                size={40}
                color="#999999"
                style={{ marginBottom: "15px", flexShrink: 0 }}
              />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "#353535",
                  marginBottom: "15px",
                  marginTop: 0,
                }}
              >
                {service.name}
              </p>
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
                {service.description}
              </p>
              <ArrowRight
                size={24}
                color="#999999"
                style={{ marginTop: "15px", flexShrink: 0 }}
              />
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div style={{ paddingBottom: "60px" }}>
        <a
          href="#case-studies"
          className="btn-dark"
          style={{
            display: "block",
            margin: "40px auto",
            width: "fit-content",
          }}
        >
          EXPLORE CLIENTS &amp; CASE STUDIES ▸
        </a>
      </div>
    </section>
  );
}
