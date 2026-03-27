import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section-dark" style={{ minHeight: "910px" }}>
      <div
        className="flex flex-col md:flex-row h-full"
        style={{ minHeight: "910px" }}
      >
        {/* Left column: hero image */}
        <div className="w-full md:w-1/2 relative overflow-hidden h-64 md:h-auto">
          <Image
            src="/images/1175-startup-marketing-consultant-17.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="Luke Renner"
            priority
          />
        </div>

        {/* Right column: text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-16 py-16">
          <h1
            style={{
              fontSize: "58.9px",
              fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
              fontWeight: 300,
              color: "#ffffff",
              lineHeight: "70px",
              marginBottom: "30px",
            }}
          >
            Predictable Growth. Iconic Creative.
          </h1>

          <p
            style={{
              fontSize: "18.66px",
              fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: "28px",
              marginBottom: "20px",
            }}
          >
            Hello, my name is Luke Renner and I&apos;m a collaborative and
            entrepreneurial Marketing Executive with extensive experience turning
            unknown startups into revenue machines. I have more than 15 years of
            experience building brands, training high-performance teams, and
            producing vivid creative.
          </p>

          <p
            style={{
              fontSize: "18.66px",
              fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: "28px",
              marginBottom: "20px",
            }}
          >
            On the revenue side, I bring a deep understanding of the sales
            pipeline, key drivers, differentiators, and personas. On the
            creative side, I&apos;ve done extensive work building campaigns,
            content, and comms for multiple audiences including investors,
            journalists, prospects, customers, and corporate boards.
          </p>

          <p
            style={{
              fontSize: "18.66px",
              fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: "28px",
              marginBottom: "20px",
            }}
          >
            Throughout my career I&apos;ve notched multiple exits, had my
            commercials appear in Times Square, and even rang the bell on
            NASDAQ.
          </p>

          <div className="flex gap-5 mt-8">
            <a href="/coaching" className="btn-primary">
              WORK WITH ME
            </a>
            <a href="/#services" className="btn-secondary">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
