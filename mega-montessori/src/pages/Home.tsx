// pages/Home.tsx
//
// KEY CONCEPTS:
//  • Composing components — a page is just a collection of smaller components
//  • Passing props down  — parent passes onNavigate to children that need it

import { useState } from "react";
import type { PageId } from "../types";
import { TESTIMONIALS } from "../data";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "./Home.css";

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />

      <svg
        className="wave-divider"
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill="var(--plum)"
        />
      </svg>

      <AboutSection />

      <svg
        className="wave-divider"
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ background: "var(--plum)" }}
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill="var(--cream)"
        />
      </svg>

      <QuoteBanner />

      <svg
        className="wave-divider"
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ background: "var(--cream)" }}
      >
        <path
          d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,0 L0,0 Z"
          fill="#FFF9F0"
        />
      </svg>

      <MeetAndTestimonialsSection />

      <ContactSection />

      <Footer />
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────
// These are small components private to this file.
// You could also move each into its own file as the app grows.

function HeroSection({ onNavigate }: HomeProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      {/* Decorative floating shapes */}
      <div className="shape s1">
        <svg width="52" height="52" viewBox="0 0 52 52">
          <polygon
            points="26,4 48,48 4,48"
            fill="none"
            stroke="#F4623A"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="shape s2">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="#2ABFBF"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="shape s3">
        <svg width="44" height="44" viewBox="0 0 44 44">
          <rect
            x="6"
            y="6"
            width="32"
            height="32"
            rx="8"
            fill="none"
            stroke="#7B3FA0"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="shape s4">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <polygon points="20,2 38,38 2,38" fill="#F9C834" opacity=".6" />
        </svg>
      </div>
      <div className="shape s5">
        <svg width="36" height="36" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="14" fill="#6BBF88" opacity=".6" />
        </svg>
      </div>

      <div className="hero__inner">
        <div className="hero__badge">🌱 Nurturing Hearts, Guiding Minds</div>
        <h1 className="hero__title">
          <span className="hero__title--coral">Mega</span>
          <br />
          <span className="hero__title--plum">Montessori</span>
          <br />
          <span className="hero__title--teal">Children's House</span>
        </h1>
        <p className="hero__sub">
          A bilingual + Montessori preschool with STEM-inspired enrichment,
          where children grow with independence, curiosity, and quiet
          confidence.
        </p>
        <div className="hero__btns">
          <button
            className="btn-primary"
            onClick={() => onNavigate("admission")}
          >
            Schedule a Tour
          </button>
          <button className="btn-outline" onClick={() => onNavigate("program")}>
            About Our Program
          </button>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num hero__stat-num--coral">18mo–6</span>
            <span className="hero__stat-label">Ages We Serve</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num hero__stat-num--teal">
              EN & 中文
            </span>
            <span className="hero__stat-label">Bilingual Immersion</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num hero__stat-num--plum">
              Montessori
            </span>
            <span className="hero__stat-label">Enriched</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about__grid reveal">
        <div className="about__visual">
          <div className="about__ring">
            <div className="about__circle">
              <div className="about__circle-emoji">🌱</div>
              <div className="about__circle-text">Montessori + Bilingual</div>
            </div>
          </div>
        </div>
        <div className="about__content">
          <h2 className="about__heading">
            A Place Where <span>Children Lead</span> Their Own Learning
          </h2>
          <p>
            Inspired by Maria Montessori&apos;s vision of education as a natural
            unfolding of human potential, Mega Montessori Children&apos;s House
            aims to nurture the whole child through a caring and authentic
            Montessori environment.
          </p>

          <div className="about__pillars">
            {[
              {
                icon: "💪",
                title: "Independence",
                desc: "We honor each child's natural drive toward autonomy and self-mastery.",
              },
              {
                icon: "💛",
                title: "Respect",
                desc: "For self, others, culture, language, and the environment.",
              },
              {
                icon: "🧠",
                title: "Whole-Child Development",
                desc: "Intellectual, emotional, social, physical, and spiritual growth.",
              },
              {
                icon: "🌍",
                title: "Bilingual Identity",
                desc: "Language as a bridge between cultures, communities, and understanding.",
              },
            ].map((p) => (
              <div key={p.title} className="about__pillar">
                <div className="about__pillar-icon">{p.icon}</div>
                <div className="about__pillar-title">{p.title}</div>
                <div className="about__pillar-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MeetAndTestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const t = TESTIMONIALS[activeIdx];

  function prev() {
    setActiveIdx((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  }
  function next() {
    setActiveIdx((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));
  }

  return (
    <section className="meet-testi">
      {/* Floating shapes */}
      <div className="shape s1">
        <svg width="44" height="44" viewBox="0 0 44 44">
          <polygon
            points="22,3 41,41 3,41"
            fill="none"
            stroke="#2ABFBF"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="shape s2">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="#F9C834"
            strokeWidth="2.5"
          />
        </svg>
      </div>
      <div className="shape s3">
        <svg width="38" height="38" viewBox="0 0 38 38">
          <rect
            x="5"
            y="5"
            width="28"
            height="28"
            rx="8"
            fill="none"
            stroke="#F4623A"
            strokeWidth="2.5"
          />
        </svg>
      </div>
      <div className="shape s5">
        <svg width="30" height="30" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="13" fill="#6BBF88" opacity=".65" />
        </svg>
      </div>

      {/* Centered heading */}
      <h2 className="section-title meet-testi__heading reveal">
        Meet the <span>Heart</span> Behind Mega
      </h2>

      <div className="meet-testi__grid reveal">
        {/* Left: Meet Meg */}
        <div className="meet-testi__col">
          <div className="meet-meg__card">
            <div className="meet-meg__name">Meg Ma</div>
            <div className="meet-meg__role">Director · AMS-Credentialed</div>
            <p className="meet-meg__bio">
              With extensive experience leading Primary classrooms across the
              Bay Area and as the founder of a Chinese language program, Meg
              creates beautifully prepared environments where every child
              progresses at their own pace with confidence and grace.
            </p>
          </div>
        </div>

        {/* Right: Testimonials carousel */}
        <div className="meet-testi__col">
          <div className="testi-carousel">
            <div className={`testi-card testi-card--${t.color}`}>
              <div className="testi-card__stars">★★★★★</div>
              <p className="testi-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testi-card__author">
                <div
                  className={`testi-card__avatar testi-card__avatar--${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__role">{t.role}</div>
                </div>
              </div>
              <div className="testi-carousel__nav">
                <button
                  className="testi-carousel__btn"
                  onClick={prev}
                  aria-label="Previous"
                >
                  &#8249;
                </button>
                <div className="testi-carousel__dots">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      className={`testi-carousel__dot${i === activeIdx ? " testi-carousel__dot--active" : ""}`}
                      onClick={() => setActiveIdx(i)}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  className="testi-carousel__btn"
                  onClick={next}
                  aria-label="Next"
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteBanner() {
  return (
    <section className="home-quote" aria-label="Maria Montessori quote">
      <blockquote>
        &ldquo;The greatest sign of success for a teacher is to be able to say,
        &lsquo;The children are now working as if I did not exist.&rsquo;&rdquo;
      </blockquote>
      <cite>— Maria Montessori, 1870–1952</cite>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="shape s1">
        <svg width="52" height="52" viewBox="0 0 52 52">
          <polygon
            points="26,4 48,48 4,48"
            fill="none"
            stroke="#F4623A"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="shape s2">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="#2ABFBF"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="shape s3">
        <svg width="44" height="44" viewBox="0 0 44 44">
          <rect
            x="6"
            y="6"
            width="32"
            height="32"
            rx="8"
            fill="none"
            stroke="#7B3FA0"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="shape s4">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <polygon points="20,2 38,38 2,38" fill="#F9C834" opacity=".6" />
        </svg>
      </div>
      <div className="contact__inner reveal">
        <div className="section-label">Interested to learn more?</div>
        <h2 className="section-title">Schedule Tour 🌱</h2>
        <ContactForm />
      </div>
    </section>
  );
}
