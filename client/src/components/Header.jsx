import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

import {
  Leaf,
  Menu,
  X,
  Phone,
} from "lucide-react";

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

          background-image: url("/Images/n1.jpeg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          border-bottom: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
        }

        .site-header::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(15, 35, 20, 0.88) 0%,
              rgba(18, 48, 28, 0.78) 45%,
              rgba(18, 48, 28, 0.55) 100%
            );

          backdrop-filter: blur(4px);
        }

        .header-inner {
          position: relative;
          z-index: 3;

          height: 88px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ================= BRAND ================= */

        .brand-link {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          min-width: fit-content;
        }

        .brand-icon {
          width: 52px;
          height: 52px;
          min-width: 52px;

          border-radius: 18px;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.22),
              rgba(255,255,255,0.08)
            );

          backdrop-filter: blur(14px);

          display: flex;
          align-items: center;
          justify-content: center;

          color: #d9ff9c;

          border: 1px solid rgba(255,255,255,0.12);

          box-shadow:
            0 12px 30px rgba(0,0,0,0.22);

          transition: 0.35s ease;
        }

        .brand-link:hover .brand-icon {
          transform: rotate(-8deg) scale(1.05);
        }

        .brand-title {
          font-size: 25px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.7px;
        }

        .brand-subtitle {
          margin-top: 4px;
          font-size: 11px;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
        }

        /* ================= NAV ================= */

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 26px;
        }

        .nav-link-custom {
          position: relative;

          color: rgba(255,255,255,0.88);
          text-decoration: none;

          font-size: 15px;
          font-weight: 600;

          transition: 0.3s ease;
        }

        .nav-link-custom:hover,
        .nav-link-custom.active {
          color: #ffffff;
        }

        .nav-link-custom::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;

          width: 0%;
          height: 2px;

          border-radius: 50px;

          background: #d9ff9c;

          transition: 0.3s ease;
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
        }

        .phone-link {
          display: flex;
          align-items: center;
          gap: 10px;

          color: #ffffff;
          text-decoration: none;

          font-size: 15px;
          font-weight: 700;

          white-space: nowrap;

          padding: 12px 18px;

          border-radius: 50px;

          background:
            rgba(255,255,255,0.12);

          backdrop-filter: blur(12px);

          border: 1px solid rgba(255,255,255,0.12);

          transition: 0.35s ease;

          box-shadow:
            0 10px 24px rgba(0,0,0,0.16);
        }

        .phone-link:hover {
          background: rgba(255,255,255,0.2);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .quote-btn {
          padding: 13px 22px;

          border-radius: 50px;

          background:
            linear-gradient(
              135deg,
              #d9ff9c,
              #8fcf4f
            );

          color: #17311f;

          text-decoration: none;

          font-size: 14px;
          font-weight: 800;

          transition: 0.35s ease;

          box-shadow:
            0 16px 35px rgba(143,207,79,0.25);
        }

        .quote-btn:hover {
          transform: translateY(-3px);
          background:
            linear-gradient(
              135deg,
              #e6ffbd,
              #9fdd5d
            );

          color: #17311f;
        }

        /* ================= MOBILE ================= */

        .mobile-toggle {
          display: none;

          width: 48px;
          height: 48px;

          border-radius: 16px;

          border: 1px solid rgba(255,255,255,0.12);

          background:
            rgba(255,255,255,0.08);

          backdrop-filter: blur(12px);

          color: #ffffff;

          align-items: center;
          justify-content: center;
        }

        .mobile-menu {
          display: none;

          position: relative;
          z-index: 5;

          padding: 20px;

          background:
            linear-gradient(
              180deg,
              rgba(18,48,28,0.98),
              rgba(11,30,17,0.98)
            );

          border-top: 1px solid rgba(255,255,255,0.08);
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
          font-weight: 600;

          background:
            rgba(255,255,255,0.04);

          border: 1px solid rgba(255,255,255,0.06);

          transition: 0.3s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background:
            rgba(217,255,156,0.14);

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
          .desktop-nav {
            gap: 18px;
          }

          .nav-link-custom {
            font-size: 14px;
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
            height: 78px;
          }

          .brand-title {
            font-size: 22px;
          }

          .brand-subtitle {
            font-size: 10px;
          }
        }

        @media (max-width: 576px) {
          .header-inner {
            padding: 0 14px;
          }

          .brand-icon {
            width: 46px;
            height: 46px;
            min-width: 46px;
          }

          .brand-title {
            font-size: 20px;
          }

          .mobile-menu {
            padding: 16px;
          }

          .phone-link {
            font-size: 14px;
            padding: 12px 16px;
          }
        }
      `}</style>

      <header className="site-header">
        <Container fluid>
          <div className="header-inner">

            {/* LOGO */}
            <Link to="/" className="brand-link">
              <div className="brand-icon">
                <Leaf size={22} />
              </div>

              <div>
                <div className="brand-title">
                  Reliable Gardening
                </div>

                <div className="brand-subtitle">
                  & Landscaping
                </div>
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

              <a
                href="tel:07900799126"
                className="phone-link"
              >
                <Phone size={16} />
                <span>07900 799 126</span>
              </a>

              <Link
                to="/contact"
                className="quote-btn"
              >
                Get Quote
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="mobile-toggle"
              onClick={() => setOpen(!open)}
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

            <a
              href="tel:07900799126"
              className="phone-link mobile-phone"
            >
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