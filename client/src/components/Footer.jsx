import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Garden Packages", path: "/packages" },
    { name: "Our Work", path: "/our-work" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        .footer-section {
          background:
            linear-gradient(
              135deg,
              #112b18 0%,
              #1a3a20 45%,
              #0f2414 100%
            );
          color: #fff;
          border-top: 3px solid #4a7c59;
          position: relative;
          overflow: hidden;
        }

        .footer-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 10% 15%,
              rgba(217, 255, 156, 0.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(74, 124, 89, 0.16),
              transparent 35%
            );
          pointer-events: none;
        }

        .footer-main {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 88px 24px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .footer-logo-box {
          width: 96px;
          height: 86px;
          min-width: 96px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          padding: 0;
          margin: 0;
          overflow: visible;
        }

        .footer-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;

          background: transparent !important;
          border: none !important;
          box-shadow: none !important;

          filter:
            brightness(1.35)
            contrast(1.45)
            saturate(1.25)
            drop-shadow(0 5px 8px rgba(0, 0, 0, 0.5))
            drop-shadow(0 0 12px rgba(217, 255, 156, 0.18));

          transition: 0.35s ease;
        }

        .footer-logo:hover .footer-logo-img {
          transform: scale(1.05);
        }

        .footer-title {
          display: block;
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 800;
          line-height: 1.05;
          color: #fff;
          letter-spacing: -0.4px;
          text-shadow: 0 3px 12px rgba(0, 0, 0, 0.35);
        }

        .footer-subtitle {
          display: block;
          margin-top: 6px;
          font-size: 12px;
          color: #e8ffd5;
          text-transform: uppercase;
          letter-spacing: 2.3px;
          font-weight: 800;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
        }

        .footer-quote {
          font-family: Georgia, serif;
          font-style: italic;
          color: #e6ebe7;
          font-size: 18px;
          margin-bottom: 8px;
        }

        .footer-desc {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          max-width: 310px;
          margin: 0;
        }

        .footer-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          min-height: 34px;
          padding: 0 14px;
          border-radius: 50px;
          background: rgba(74, 124, 89, 0.95);
          border: 1px solid rgba(217, 255, 156, 0.16);
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
        }

        .footer-heading {
          color: #a7df86;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.82);
          font-size: 14px;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .footer-link:hover {
          color: #d9ff9c;
          padding-left: 4px;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact a,
        .footer-contact p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          text-decoration: none;
          margin: 0;
          transition: 0.25s ease;
          line-height: 1.5;
        }

        .footer-contact a:hover {
          color: #d9ff9c;
          padding-left: 4px;
        }

        .footer-hours {
          margin-top: 8px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-hours p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.62);
          margin: 0;
        }

        .footer-bottom {
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(217, 255, 156, 0.12);
          padding: 32px 24px;
          background: rgba(0, 0, 0, 0.08);
        }

        .footer-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .footer-copy,
        .footer-reg {
          color: rgba(255, 255, 255, 0.62);
          font-size: 13px;
          margin: 0;
        }

        .footer-reg {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.42);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .footer-policy-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .footer-policy-links a {
          color: rgba(255, 255, 255, 0.62);
          font-size: 13px;
          text-decoration: none;
          transition: 0.25s ease;
          white-space: nowrap;
        }

        .footer-policy-links a:hover {
          color: #d9ff9c;
        }

        @media (max-width: 991px) {
          .footer-logo-box {
            width: 84px;
            height: 74px;
            min-width: 84px;
          }

          .footer-title {
            font-size: 23px;
          }

          .footer-subtitle {
            font-size: 11px;
            letter-spacing: 1.9px;
          }
        }

        @media (max-width: 767px) {
          .footer-main {
            padding: 60px 24px;
          }

          .footer-logo {
            align-items: center;
          }

          .footer-logo-box {
            width: 76px;
            height: 66px;
            min-width: 76px;
          }

          .footer-title {
            font-size: 22px;
          }

          .footer-subtitle {
            font-size: 10px;
            letter-spacing: 1.6px;
          }

          .footer-desc {
            max-width: 100%;
          }

          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
          }

          .footer-policy-links {
            gap: 18px;
          }
        }

        @media (max-width: 420px) {
          .footer-main {
            padding: 50px 18px;
          }

          .footer-logo {
            gap: 10px;
          }

          .footer-logo-box {
            width: 66px;
            height: 58px;
            min-width: 66px;
          }

          .footer-title {
            font-size: 19px;
          }

          .footer-subtitle {
            font-size: 8.5px;
            letter-spacing: 1.1px;
          }

          .footer-quote {
            font-size: 16px;
          }

          .footer-bottom {
            padding: 28px 18px;
          }
        }
      `}</style>

      <footer className="footer-section">
        <Container fluid className="px-0">
          <div className="footer-main">
            <Row className="g-5">
              <Col md={4}>
                <div className="footer-brand">
                  <div className="footer-logo">
                    <div className="footer-logo-box">
                      <img
                        src="/Images/Logo.webp"
                        alt="Reliable Gardening & Landscaping"
                        className="footer-logo-img"
                      />
                    </div>

                    <div>
                      <span className="footer-title">Reliable Gardening</span>
                      <span className="footer-subtitle">& Landscaping</span>
                    </div>
                  </div>

                  <div>
                    <p className="footer-quote">
                      "Gardens That Grow With You"
                    </p>

                    <p className="footer-desc">
                      Serving Surrey and South West London since 2011.
                      Professional, reliable garden care.
                    </p>
                  </div>

                  <div className="footer-badge">
                    🌿 RHS Qualified Horticulturists
                  </div>
                </div>
              </Col>

              <Col md={4}>
                <h4 className="footer-heading">Quick Links</h4>

                <ul className="footer-links">
                  {quickLinks.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col md={4}>
                <h4 className="footer-heading">Get In Touch</h4>

                <div className="footer-contact">
                  <a href="tel:07900799126">📞 07900 799 126</a>

                  <a
                    href="https://wa.me/447900799126"
                    target="_blank"
                    rel="noreferrer"
                  >
                    💬 07900 799 126
                  </a>

                  <a href="mailto:hello@allen.co.uk">
                    ✉️ hello@allen.co.uk
                  </a>

                  <p>📍 Bramhall, Manchester, United Kingdom</p>

                  <div className="footer-hours">
                    <p>Mon-Fri: 7:30am – 5:30pm</p>
                    <p>Sat: 8:00am – 3:00pm</p>
                    <p>Sun: Enquiries answered</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-inner">
              <p className="footer-copy">
                © 2025 Allen Gardening & Landscaping Services. All rights reserved.
              </p>

              <div className="footer-policy-links">
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms</Link>
              </div>

              <p className="footer-reg">
                Reg No: VGS2011GU | £5M Public Liability Insured
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;