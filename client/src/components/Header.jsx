import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Menu, X, Phone } from "lucide-react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Packages", path: "/packages" },
    { name: "Our Work", path: "/our-work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          transition: 0.35s ease;

          background-image:
            linear-gradient(
              90deg,
              rgba(8, 39, 18, 0.96) 0%,
              rgba(14, 58, 27, 0.92) 45%,
              rgba(32, 78, 22, 0.88) 100%
            ),
            url("/Images/n1.jpeg");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          border-bottom: 1px solid rgba(217, 255, 156, 0.14);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
          overflow: hidden;
        }

        .site-header::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.035),
              rgba(0, 0, 0, 0.04)
            );
          pointer-events: none;
        }

        .header-inner {
          position: relative;
          z-index: 3;

          height: 96px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ================= BRAND ================= */

        .brand-link {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          min-width: fit-content;
          flex-shrink: 0;
        }

        .brand-logo-box {
          width: 92px;
          height: 82px;
          min-width: 92px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0;
          margin: 0;

          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          overflow: visible;
        }

        .brand-logo-img {
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
            drop-shadow(0 4px 7px rgba(0, 0, 0, 0.45))
            drop-shadow(0 0 10px rgba(217, 255, 156, 0.18));

          transition: 0.35s ease;
        }

        .brand-link:hover .brand-logo-img {
          transform: scale(1.05);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 1;
        }

        .brand-title {
          font-size: 27px;
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.8px;
          white-space: nowrap;

          text-shadow:
            0 3px 12px rgba(0, 0, 0, 0.38),
            0 0 16px rgba(217, 255, 156, 0.12);
        }

        .brand-subtitle {
          margin-top: 7px;
          font-size: 11.5px;
          color: #e8ffd5;
          text-transform: uppercase;
          letter-spacing: 2.8px;
          font-weight: 900;
          white-space: nowrap;

          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        /* ================= NAV ================= */

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .nav-link-custom {
          position: relative;

          color: rgba(255, 255, 255, 0.88);
          text-decoration: none;

          font-size: 15px;
          font-weight: 700;

          transition: 0.3s ease;
          white-space: nowrap;
        }

        .nav-link-custom:hover,
        .nav-link-custom.active {
          color: #ffffff;
        }

        .nav-link-custom::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;

          width: 0%;
          height: 2px;

          border-radius: 50px;
          background: #d9ff9c;

          transition: 0.3s ease;
          box-shadow: 0 0 12px rgba(217, 255, 156, 0.65);
        }

        .nav-link-custom:hover::after,
        .nav-link-custom.active::after {
          width: 100%;
        }

        /* ================= RIGHT SIDE ================= */

        .header-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 290px;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        .phone-link {
          display: flex;
          align-items: center;
          gap: 10px;

          color: #ffffff;
          text-decoration: none;

          font-size: 15px;
          font-weight: 800;

          white-space: nowrap;

          padding: 12px 18px;
          border-radius: 50px;

          background: rgba(255, 255, 255, 0.13);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          border: 1px solid rgba(255, 255, 255, 0.18);

          transition: 0.35s ease;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
        }

        .phone-link:hover {
          background: rgba(255, 255, 255, 0.22);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .quote-btn {
          padding: 14px 24px;

          border-radius: 50px;

          background:
            linear-gradient(
              135deg,
              #ddff9f,
              #98d950
            );

          color: #17311f;

          text-decoration: none;

          font-size: 14px;
          font-weight: 900;

          transition: 0.35s ease;

          box-shadow:
            0 16px 35px rgba(143, 207, 79, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.45);

          white-space: nowrap;
        }

        .quote-btn:hover {
          transform: translateY(-3px);
          background:
            linear-gradient(
              135deg,
              #ebffc4,
              #a8e562
            );

          color: #17311f;
        }

        /* ================= MOBILE ================= */

        .mobile-toggle {
          display: none;

          width: 48px;
          height: 48px;

          border-radius: 16px;

          border: 1px solid rgba(255, 255, 255, 0.16);

          background: rgba(255, 255, 255, 0.1);

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          color: #ffffff;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;
        }

        .mobile-menu {
          display: none;

          position: relative;
          z-index: 5;

          padding: 20px;

          background:
            linear-gradient(
              180deg,
              rgba(10, 49, 23, 0.98),
              rgba(6, 29, 14, 0.99)
            );

          border-top: 1px solid rgba(217, 255, 156, 0.12);
          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.2);
        }

        .mobile-menu.show {
          display: block;
        }

        .mobile-nav-link {
          display: block;

          padding: 15px 18px;
          margin-bottom: 10px;

          border-radius: 18px;

          color: #ffffff;
          text-decoration: none;

          font-size: 16px;
          font-weight: 700;

          background: rgba(255, 255, 255, 0.055);

          border: 1px solid rgba(255, 255, 255, 0.08);

          transition: 0.3s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: rgba(217, 255, 156, 0.16);
          color: #d9ff9c;
        }

        .mobile-phone {
          margin-top: 18px;
          justify-content: center;
          width: 100%;
        }

        .mobile-quote {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 14px;
        }

        .mobile-quote a {
          width: 100%;
          text-align: center;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1199px) {
          .header-inner {
            gap: 18px;
          }

          .desktop-nav {
            gap: 17px;
          }

          .nav-link-custom {
            font-size: 14px;
          }

          .brand-logo-box {
            width: 82px;
            height: 72px;
            min-width: 82px;
          }

          .brand-title {
            font-size: 24px;
          }

          .brand-subtitle {
            font-size: 10.5px;
            letter-spacing: 2.2px;
          }

          .header-actions {
            min-width: auto;
          }
        }

        @media (max-width: 1080px) {
          .phone-link {
            display: none;
          }

          .desktop-nav {
            gap: 16px;
          }
        }

        @media (max-width: 991px) {
          .desktop-nav,
          .header-actions {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }

          .header-inner {
            height: 86px;
          }

          .brand-logo-box {
            width: 76px;
            height: 66px;
            min-width: 76px;
          }

          .brand-title {
            font-size: 22px;
          }

          .brand-subtitle {
            font-size: 10px;
            letter-spacing: 1.8px;
          }
        }

        @media (max-width: 576px) {
          .header-inner {
            padding: 0 14px;
            height: 80px;
          }

          .brand-link {
            gap: 9px;
            max-width: calc(100% - 58px);
          }

          .brand-logo-box {
            width: 66px;
            height: 58px;
            min-width: 66px;
          }

          .brand-title {
            font-size: 18px;
            letter-spacing: -0.45px;
          }

          .brand-subtitle {
            font-size: 8.5px;
            letter-spacing: 1.15px;
            margin-top: 5px;
          }

          .mobile-menu {
            padding: 16px;
          }

          .phone-link {
            display: flex;
            font-size: 14px;
            padding: 12px 16px;
          }
        }

        @media (max-width: 420px) {
          .brand-link {
            gap: 8px;
          }

          .brand-logo-box {
            width: 58px;
            height: 51px;
            min-width: 58px;
          }

          .brand-title {
            font-size: 16px;
          }

          .brand-subtitle {
            font-size: 7.5px;
            letter-spacing: 0.9px;
          }

          .mobile-toggle {
            width: 44px;
            height: 44px;
            border-radius: 14px;
          }
        }

        @media (max-width: 360px) {
          .brand-title {
            font-size: 15px;
          }

          .brand-subtitle {
            font-size: 7px;
            letter-spacing: 0.75px;
          }

          .brand-logo-box {
            width: 54px;
            height: 48px;
            min-width: 54px;
          }
        }
      `}</style>

      <header className="site-header">
        <Container fluid>
          <div className="header-inner">
            {/* LOGO */}
            <Link to="/" className="brand-link">
              <div className="brand-logo-box">
                <img
                  src="/Images/Logo.webp"
                  alt="Reliable Gardening & Landscaping"
                  className="brand-logo-img"
                />
              </div>

              <div className="brand-text">
                <div className="brand-title">Reliable Gardening</div>
                <div className="brand-subtitle">& Landscaping</div>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="desktop-nav">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link-custom ${isActive ? "active" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* RIGHT */}
            <div className="header-actions">
              <a href="tel:07900799126" className="phone-link">
                <Phone size={16} />
                <span>07900 799 126</span>
              </a>

              <Link to="/contact" className="quote-btn">
                Get Quote
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="mobile-toggle"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              type="button"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          <div className={`mobile-menu ${open ? "show" : ""}`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <a href="tel:07900799126" className="phone-link mobile-phone">
              <Phone size={16} />
              07900 799 126
            </a>

            <div className="mobile-quote">
              <Link
                to="/contact"
                className="quote-btn"
                onClick={() => setOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}