import { Flame } from "lucide-react";

export default function ContactFooter() {
  return (
    <>
      {/* Contact Form Section */}
      <section
        style={{
          backgroundColor: "#f2f2f2",
          padding: "60px 0",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          {/* Icon */}
          <Flame
            size={36}
            color="#353535"
            style={{ display: "inline-block", marginBottom: "12px" }}
          />

          {/* Heading */}
          <h4
            style={{
              fontSize: "24.87px",
              fontWeight: 300,
              color: "#353535",
              fontFamily: '"Open Sans", sans-serif',
              margin: 0,
              marginBottom: "12px",
              lineHeight: 1.4,
            }}
          >
            Let&apos;s Get to Work.
          </h4>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "14px",
              color: "#646464",
              lineHeight: "22px",
              margin: 0,
              marginBottom: "8px",
            }}
          >
            Digital Marketing is one of the most powerful tools you have to
            grow your business (and/or drive your startup toward an exit).
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#646464",
              lineHeight: "22px",
              margin: 0,
              marginBottom: "30px",
            }}
          >
            Let&apos;s set up a conversation to discuss what I can do for you.
          </p>

          {/* Form */}
          <form
            action="https://formspree.io/f/xeojgkqb"
            method="POST"
            style={{ width: "100%" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Fill in your name"
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #d2d2d2",
                backgroundColor: "#ffffff",
                fontSize: "14px",
                fontFamily: '"Open Sans", sans-serif',
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #d2d2d2",
                backgroundColor: "#ffffff",
                fontSize: "14px",
                fontFamily: '"Open Sans", sans-serif',
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <textarea
              name="message"
              placeholder="Write a message"
              rows={5}
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #d2d2d2",
                backgroundColor: "#ffffff",
                fontSize: "14px",
                fontFamily: '"Open Sans", sans-serif',
                outline: "none",
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#353535",
                color: "#ffffff",
                padding: "12px 40px",
                fontSize: "14px",
                fontFamily: '"Open Sans", sans-serif',
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.2s ease",
              }}
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#242424",
          minHeight: "300px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background circle image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/r168-startup-marketing-consultant-17.jpg')",
            backgroundSize: "contain",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
            opacity: 0.3,
            pointerEvents: "none",
          }}
        />

        {/* Footer content — right side */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            minHeight: "300px",
            padding: "40px 60px",
            gap: "16px",
          }}
        >
          {/* Follow Me label */}
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#ffffff",
              margin: 0,
            }}
          >
            FOLLOW ME
          </p>

          {/* Social icons row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/in/lukerenner/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: "#ffffff", display: "flex" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/lukerenner/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ color: "#ffffff", display: "flex" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>

          {/* Schedule link */}
          <a
            href="https://calendly.com/lukerenner"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffff",
              fontSize: "14px",
              textDecoration: "underline",
            }}
          >
            Schedule a conversation ▸
          </a>
        </div>
      </footer>
    </>
  );
}
