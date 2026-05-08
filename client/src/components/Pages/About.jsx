import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Stars,
  ClockFill,
  GeoAltFill,
  LeafFill,
} from "react-bootstrap-icons";

import "bootstrap/dist/css/bootstrap.min.css";

const features = [
  {
    icon: ShieldCheck,
    title: "Fully Insured",
  },
  {
    icon: LeafFill,
    title: "Eco-Friendly",
  },
];

const whyChoose = [
  {
    icon: ClockFill,
    title: "Reliable Service",
    desc: "We value your time. Our team arrives on schedule and completes every garden job with care.",
  },
  {
    icon: Stars,
    title: "Expert Results",
    desc: "From lawn care to landscaping, we deliver clean, fresh, and professional outdoor results.",
  },
  {
    icon: GeoAltFill,
    title: "Local Experts",
    desc: "Serving UK homes and businesses with dependable local garden maintenance services.",
  },
];

export default function AboutPage() {
  return (
    <>
      <style>
        {`
          .about-garden-page {
            padding: 140px 0 100px;
            background:
              radial-gradient(circle at top left, rgba(190,242,100,0.22), transparent 32%),
              radial-gradient(circle at bottom right, rgba(34,197,94,0.15), transparent 30%),
              linear-gradient(180deg,#f8fff2 0%,#ffffff 100%);
            overflow: hidden;
          }

          .about-title {
            font-size: clamp(42px,6vw,72px);
            font-weight: 950;
            line-height: 1.05;
            color: #173b18;
            letter-spacing: -2px;
            margin-bottom: 30px;
          }

          .about-title span {
            background: linear-gradient(135deg,#65a30d,#16a34a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .about-lead {
            font-size: 21px;
            color: #3f4f3b;
            line-height: 1.8;
            font-weight: 600;
            margin-bottom: 22px;
          }

          .about-text {
            color: #64745f;
            line-height: 1.9;
            font-size: 16px;
            margin-bottom: 34px;
          }

          .feature-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 22px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 16px;
            background: rgba(255,255,255,0.86);
            border: 1px solid rgba(101,163,13,0.14);
            border-radius: 24px;
            padding: 18px;
            box-shadow: 0 16px 40px rgba(22,101,52,0.07);
          }

          .feature-icon {
            width: 54px;
            height: 54px;
            min-width: 54px;
            border-radius: 18px;
            background: rgba(101,163,13,0.12);
            color: #65a30d;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .feature-item span {
            font-weight: 900;
            color: #173b18;
          }

          .about-image-wrap {
            position: relative;
          }

          .about-image {
            width: 100%;
            border-radius: 48px;
            box-shadow: 0 35px 90px rgba(22,101,52,0.18);
            border: 8px solid #ffffff;
            object-fit: cover;
          }

          .satisfaction-card {
            position: absolute;
            left: -24px;
            bottom: -28px;
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(18px);
            border: 1px solid rgba(101,163,13,0.16);
            border-radius: 30px;
            padding: 26px 32px;
            box-shadow: 0 24px 60px rgba(22,101,52,0.17);
          }

          .satisfaction-card h3 {
            font-size: 44px;
            font-weight: 950;
            color: #65a30d;
            margin: 0;
          }

          .satisfaction-card p {
            color: #64745f;
            font-weight: 800;
            margin: 2px 0 0;
          }

          .why-card-section {
            margin-top: 110px;
            background:
              radial-gradient(circle at top left, rgba(190,242,100,0.22), transparent 32%),
              linear-gradient(135deg,#173b18,#16a34a);
            border-radius: 48px;
            padding: 70px 55px;
            color: #ffffff;
            position: relative;
            overflow: hidden;
            box-shadow: 0 34px 90px rgba(22,101,52,0.22);
          }

          .why-card-section::after {
            content: "";
            position: absolute;
            width: 360px;
            height: 360px;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            right: -130px;
            top: -130px;
          }

          .why-inner {
            position: relative;
            z-index: 2;
            max-width: 980px;
            margin: 0 auto;
            text-align: center;
          }

          .why-title {
            font-size: clamp(34px,5vw,54px);
            font-weight: 950;
            margin-bottom: 55px;
            color: #ffffff;
          }

          .why-item {
            text-align: center;
          }

          .why-icon {
            width: 76px;
            height: 76px;
            border-radius: 24px;
            background: rgba(255,255,255,0.14);
            color: #bef264;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 22px;
            border: 1px solid rgba(255,255,255,0.16);
          }

          .why-item h3 {
            font-size: 22px;
            font-weight: 900;
            margin-bottom: 14px;
          }

          .why-item p {
            color: rgba(255,255,255,0.76);
            line-height: 1.75;
            margin: 0;
          }

          @media (max-width: 991px) {
            .about-garden-page {
              padding: 120px 0 80px;
            }

            .satisfaction-card {
              left: 20px;
              bottom: 20px;
            }

            .why-card-section {
              padding: 55px 28px;
              border-radius: 36px;
            }
          }

          @media (max-width: 576px) {
            .about-title {
              font-size: 42px;
            }

            .feature-grid {
              grid-template-columns: 1fr;
            }

            .about-image {
              border-radius: 32px;
            }

            .satisfaction-card {
              position: relative;
              left: auto;
              bottom: auto;
              margin-top: 20px;
            }
          }
        `}
      </style>

      <main className="about-garden-page">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="about-title">
                  Restoring Pride in Every <span>Garden</span>
                </h1>

                <p className="about-lead">
                  PureJet Garden Care is a family-run business dedicated to
                  providing high-quality gardening, lawn care, and outdoor
                  maintenance services across the UK.
                </p>

                <p className="about-text">
                  We started with a passion for transforming outdoor spaces.
                  Today, we use professional gardening equipment, reliable care
                  methods, and eco-conscious solutions to keep gardens fresh,
                  healthy, and beautifully maintained.
                </p>

                <div className="feature-grid">
                  {features.map((item, index) => (
                    <motion.div
                      className="feature-item"
                      key={index}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 }}
                    >
                      <div className="feature-icon">
                        <item.icon size={24} />
                      </div>
                      <span>{item.title}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                className="about-image-wrap"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75 }}
              >
                <img
                  src="/about/aboutus.png"
                  alt="Gardening in progress"
                  className="about-image"
                  loading="lazy"
                />

                <motion.div
                  className="satisfaction-card"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <h3>100%</h3>
                  <p>Satisfaction Rate</p>
                </motion.div>
              </motion.div>
            </Col>
          </Row>

          <motion.div
            className="why-card-section"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <div className="why-inner">
              <h2 className="why-title">Why Choose PureJet?</h2>

              <Row className="g-5">
                {whyChoose.map((item, index) => (
                  <Col md={4} key={index}>
                    <motion.div
                      className="why-item"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.14 }}
                    >
                      <div className="why-icon">
                        <item.icon size={32} />
                      </div>

                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </div>
          </motion.div>
        </Container>
      </main>
    </>
  );
}