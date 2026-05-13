// pages/Admission.tsx
//
// KEY CONCEPTS:
//  • useState for local UI state (which FAQ is open)
//  • Controlled components — form inputs managed by React state
//  • Event handlers with TypeScript types

import { useState } from "react";
import { PROGRAM_DAILY_SCHEDULE, FAQS } from "../data";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "./Admission.css";

export default function Admission() {
  return (
    <>
      <div className="adm-hero">
        <div className="adm-hero__inner">
          <div className="page-tag adm-hero__tag">Admission</div>
          <h1 className="adm-hero__title">
            Begin Your Child's
            <br />
            <span>Journey With Us</span>
          </h1>
          <p className="adm-hero__sub">
            We welcome your children into a warm, joyful, and prepared
            Montessori environment.
          </p>
        </div>
      </div>

      <div className="adm-content">
        <div className="adm-main">
          <ScheduleSection />
          <hr className="adm-divider" />
          <InfoSection />
          <hr className="adm-divider" />
          <ContactForm />
          <hr className="adm-divider" />
          <FaqSection />
        </div>
      </div>

      <Footer />
    </>
  );
}

// ─── Schedule ────────────────────────────────────────────────────────────────

function ScheduleSection() {
  return (
    <div className="reveal">
      <div className="adm-label">A Day at Mega</div>
      <h2 className="adm-title">
        Daily <span>Schedule</span>
      </h2>
      <div className="schedule__grid" style={{ marginTop: '1.5rem' }}>
        {PROGRAM_DAILY_SCHEDULE.map((row) => (
          <div key={row.time} className="schedule__row">
            <div className="schedule__time">{row.time}</div>
            <div className="schedule__activity">
              <strong className="schedule__activity-title">{row.title}</strong>
              <span className="schedule__activity-sep"> — </span>
              <span className="schedule__activity-desc">{row.description}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="schedule__note" style={{ marginTop: '1.75rem' }}>
        This schedule may shift slightly based on children&apos;s needs, weather,
        and special classroom events. Our priority is always a calm, consistent
        rhythm that supports each child&apos;s development.
      </div>
    </div>
  );
}

// ─── Info ─────────────────────────────────────────────────────────────────────

function InfoSection() {
  // Each info block as data — keeps JSX clean
  const blocks = [
    {
      icon: "👶",
      title: "Age Eligibility",
      content:
        "Our program is designed for children ages 18 months through 6 years in a mixed-age Montessori classroom. Mixed-age groupings are intentional — younger children learn from older peers, and older children reinforce their knowledge through mentorship.",
    },
    {
      icon: "📅",
      title: "School Calendar",
      content:
        "A full school-year calendar with holidays and closures will be provided annually upon enrollment. Please contact us for the current year's calendar.",
    },
    {
      icon: "📋",
      title: "Attendance",
      content:
        "Consistent attendance supports your child's routine, social development, and work cycle. Please notify us in advance of any absences.",
    },
  ];
  const listItems = [
    "Parents must sign children in and out daily.",
    "Only authorized adults may pick up. ID required when necessary.",
    "Please be punctual to help maintain the classroom rhythm.",
  ];

  return (
    <div className="reveal">
      <div className="adm-label">What to Know</div>
      <h2 className="adm-title">
        Admission <span>Information</span>
      </h2>
      {blocks.map((b) => (
        <div key={b.title} className="adm-info-block">
          <h3 className="adm-info-block__title">
            {b.icon} {b.title}
          </h3>
          <p>{b.content}</p>
        </div>
      ))}
      <div className="adm-info-block">
        <h3 className="adm-info-block__title">🚗 Arrival & Dismissal</h3>
        <ul>
          {listItems.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
      <div className="adm-info-block">
        <h3 className="adm-info-block__title">💰 Tuition & Fees</h3>
        <p>
          Tuition includes all Montessori classroom materials and curriculum. A
          STEM material fee of <strong>$150/month</strong> applies. Full tuition
          details are provided upon inquiry.
        </p>
      </div>
    </div>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
// This component manages its own "open question" state.

function FaqSection() {
  // null means no question is open; a number means that question's id is open.
  const [openId, setOpenId] = useState<number | null>(null);

  function toggle(id: number) {
    // If clicked item is already open, close it; otherwise open it
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="reveal">
      <div className="adm-label">Common Questions</div>
      <h2 className="adm-title" style={{ marginBottom: "1.5rem" }}>
        Frequently <span>Asked</span>
      </h2>
      {FAQS.map((faq) => {
        const isOpen = openId === faq.id; // boolean: is this one open?
        return (
          <div
            key={faq.id}
            className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
          >
            <button
              className="faq-item__question"
              onClick={() => toggle(faq.id)}
            >
              {faq.question}
              {/* Inline conditional rendering — show + or × */}
              <span className="faq-item__icon">{isOpen ? "×" : "+"}</span>
            </button>
            {/* Only render the answer DOM node when open (alternative to max-height trick) */}
            {isOpen && <div className="faq-item__answer">{faq.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}

