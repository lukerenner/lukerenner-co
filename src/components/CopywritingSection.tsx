import {
  PenLine,
  Snowflake,
  Link2,
  Hexagon,
  Bot,
  Filter,
  Star,
} from "lucide-react";

interface Article {
  icon: React.ComponentType<{ size?: number; color?: string; style?: React.CSSProperties }>;
  title: string;
  excerpt: string;
}

const articles: Article[] = [
  {
    icon: Snowflake,
    title: "HOW AI IS REVOLUTIONIZING SANTA'S WORKSHOP THIS HOLIDAY SEASON",
    excerpt:
      "When North Pole Founder and CEO Santa Claus was looking to optimize his global manufacturing and package delivery organization, the founder turned to Artificial Intelligence to deliver a variety of wins across the supply chain.",
  },
  {
    icon: Link2,
    title: "BET YOU DIDN'T KNOW BLOCKCHAIN COULD DO THIS",
    excerpt:
      "Though early adopters had been investing in bitcoin for years, 2017 will be remembered as the year the technology finally went mainstream.",
  },
  {
    icon: Hexagon,
    title: "THE RISE OF CARBON FIBER",
    excerpt:
      "Regardless of when the industry hits that so-far-mythological five-dollars-per-pound price point, global demand for carbon fiber continues to rise. In the last decade, demand has risen from 33,000 metric tons in 2010 to 70,000 metric tons.",
  },
  {
    icon: Bot,
    title: "CAN AN ADVERSARIAL BOT MANIPULATE THE STOCK MARKET?",
    excerpt:
      "Today, 60% of all trades, globally, are conducted by AI-powered systems. We wondered whether these systems could be exploited to manipulate the stock market.",
  },
  {
    icon: Filter,
    title: "HOW TO BUILD A MARKETING FUNNEL",
    excerpt:
      "Marketing is the process by which you establish trust with a complete stranger and develop that trust until they hire you to solve their problems for them.",
  },
  {
    icon: Star,
    title: "40 STRATEGIES FOR FINDING, SCREENING, AND HIRING THE WORLD'S BEST TALENT",
    excerpt:
      "Have you felt the frustration? Logging into your Indeed candidate pool, only to be let down? Mediocre cover letters. Mediocre work experience. Mediocre candidates. If it sounds familiar, you aren't alone.",
  },
];

export default function CopywritingSection() {
  return (
    <section
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
        <PenLine
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
          Unforgettable Copywriting
        </h4>
        <hr className="section-divider" />
        <p
          style={{
            fontSize: "14px",
            color: "#646464",
            lineHeight: "22px",
            maxWidth: "600px",
            margin: "12px auto 0",
          }}
        >
          Sample articles from my portfolio — all carefully crafted to drive
          conversions and conversations.
        </p>
      </div>

      {/* Article Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          maxWidth: "1100px",
          margin: "0 auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          gap: "0",
        }}
      >
        {articles.map((article) => {
          const Icon = article.icon;
          return (
            <div
              key={article.title}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: "20px 30px",
                gap: "16px",
              }}
            >
              <div style={{ flexShrink: 0, paddingTop: "2px" }}>
                <Icon size={24} color="#000000" />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#353535",
                    margin: 0,
                    marginBottom: "8px",
                  }}
                >
                  {article.title}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#646464",
                    lineHeight: "22px",
                    margin: 0,
                  }}
                >
                  {article.excerpt}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div style={{ paddingBottom: "60px", textAlign: "center" }}>
        <a
          href="#"
          className="btn-dark"
          style={{
            display: "inline-block",
            margin: "40px auto 0",
          }}
        >
          FEATURED ARTICLES ▸
        </a>
      </div>
    </section>
  );
}
