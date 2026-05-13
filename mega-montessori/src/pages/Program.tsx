// pages/Program.tsx

import {
  PROGRAM_PILLARS,
  STEM_ITEMS,
  CLASSROOM_AREAS,
} from "../data";
import Footer from "../components/Footer";
import "./Program.css";

export default function Program() {
  return (
    <>
      <div className="prog-hero">
        <div className="prog-hero__inner">
          <div className="page-tag prog-hero__tag">Our Program</div>
          <h1 className="prog-hero__title">
            Bilingual Montessori
            <br />
            <span>+ STEM</span>
          </h1>
          <p className="prog-hero__sub">
            Where curiosity blossoms, independence grows, and global minds are
            nurtured.
          </p>
        </div>
      </div>

      {/* Program Pillars */}
      <div className="prog-section reveal">
        <div className="section-label">What We Offer</div>
        <h2 className="section-title">
          Pillars of <span>Learning</span>
        </h2>
        <p className="prog-section__intro">
          Our program thoughtfully integrates language, culture, science, and
          hands-on discovery to support the whole child — academically,
          socially, and emotionally.
        </p>
        <div className="prog-grid">
          {/* Map over typed data — TypeScript knows each item's shape */}
          {PROGRAM_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className={`prog-card prog-card--${pillar.variant}`}
            >
              <div className="prog-card__icon">{pillar.icon}</div>
              <h3 className="prog-card__title">{pillar.title}</h3>
              <p className="prog-card__desc">{pillar.description}</p>
              <ul className="prog-card__list">
                {pillar.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* STEM Strip */}
      <div className="stem-strip reveal">
        {STEM_ITEMS.map((item) => (
          <div key={item.letter} className="stem-strip__item">
            <div
              className={`stem-strip__letter stem-strip__letter--${item.letter.toLowerCase()}`}
            >
              {item.letter}
            </div>
            <div className="stem-strip__word">{item.word}</div>
            <div className="stem-strip__desc">{item.description}</div>
          </div>
        ))}
      </div>

      {/* Classroom Areas */}
      <div className="areas-wrap reveal">
        <div className="areas-inner">
          <div className="section-label">Classroom Areas</div>
          <h2 className="section-title">
            Core Areas of <span>Learning</span>
          </h2>
          <p className="areas-intro">
            Every Montessori classroom is organized into four core areas of
            learning. Each area is carefully designed with hands-on materials
            that invite exploration, build skills, and foster independence.
          </p>
          <div className="areas-grid">
            {CLASSROOM_AREAS.map((area) => (
              <div
                key={area.id}
                className={`area-card area-card--${area.variant}`}
              >
                <div className="area-card__icon">{area.icon}</div>
                <h3 className="area-card__title">{area.title}</h3>
                <div className="area-card__rows">
                  <div className="area-card__row">
                    <span className="area-card__label">Activities</span>
                    <span className="area-card__text">{area.activities}</span>
                  </div>
                  <div className="area-card__row">
                    <span className="area-card__label">Materials</span>
                    <span className="area-card__text">{area.materials}</span>
                  </div>
                  <div className="area-card__row">
                    <span className="area-card__label">Benefits</span>
                    <span className="area-card__text">{area.benefits}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="prog-quote reveal">
        <blockquote>
          &ldquo;Educating the whole child — mind, character, and voice.&rdquo;
        </blockquote>
        <cite>— Maria Montessori</cite>
      </div>

      <Footer />
    </>
  );
}
