// pages/Admission.tsx
//
// KEY CONCEPTS:
//  • useState for local UI state (which FAQ is open)
//  • Controlled components — form inputs managed by React state
//  • Event handlers with TypeScript types

import { useState } from "react";
import { SESSIONS, FAQS } from "../data";
import Footer from "../components/Footer";
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
        {/* Left column */}
        <div className="adm-main">
          <SessionsSection />
          <hr className="adm-divider" />
          <InfoSection />
          <hr className="adm-divider" />
          <FaqSection />
        </div>

        {/* Right sticky sidebar */}
        <div className="adm-sidebar">
          <EnrollForm />
        </div>
      </div>

      <Footer />
    </>
  );
}

// ─── Sessions ────────────────────────────────────────────────────────────────

function SessionsSection() {
  return (
    <div className="reveal">
      <div className="adm-label">Program Options</div>
      <h2 className="adm-title">
        Choose Your <span>Schedule</span>
      </h2>
      <div className="sessions-grid">
        {SESSIONS.map((s) => (
          <div
            key={s.variant}
            className={`session-card session-card--${s.variant}`}
          >
            <div className="session-card__icon">{s.icon}</div>
            <div className="session-card__name">{s.name}</div>
            <div className="session-card__time">{s.time}</div>
            <div className="session-card__age">{s.age}</div>
          </div>
        ))}
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

// ─── Enroll Form ──────────────────────────────────────────────────────────────
// A "controlled form" — React owns all input values via state.

// TypeScript interface describing the shape of form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  age: string;
  session: string;
  message: string;
}

function EnrollForm() {
  // useState with an object — the whole form is one piece of state
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    age: "",
    session: "",
    message: "",
  });

  // A single generic handler for all inputs — uses the field name to update
  // the right property. The type annotation tells TS what events are valid.
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    // Spread operator copies existing state, then overrides the changed field
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // prevent page reload (default form behavior)
    console.log("Form submitted:", form);
    alert("Thank you! We'll be in touch within one school day.");
  }

  return (
    <div className="enroll-form reveal">
      <h3 className="enroll-form__title">
        Request a <span>Tour</span>
      </h3>
      <p className="enroll-form__sub">
        Fill out the form and our admissions team will be in touch within one
        school day.
      </p>

      {/* onSubmit is React's version of the form submit event */}
      <form onSubmit={handleSubmit}>
        {[
          {
            label: "Parent / Guardian Name",
            name: "name",
            type: "text",
            placeholder: "Jane Smith",
          },
          {
            label: "Email Address",
            name: "email",
            type: "email",
            placeholder: "jane@email.com",
          },
          {
            label: "Phone Number",
            name: "phone",
            type: "tel",
            placeholder: "(555) 000-0000",
          },
        ].map((field) => (
          <div key={field.name} className="enroll-form__group">
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              // value comes from state; onChange updates state — this makes it "controlled"
              value={form[field.name as keyof FormData]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div className="enroll-form__group">
          <label>Child's Age</label>
          <select name="age" value={form.age} onChange={handleChange}>
            <option value="">Select age…</option>
            {[
              "18 months",
              "2 years",
              "3 years",
              "4 years",
              "5 years",
              "6 years",
            ].map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div className="enroll-form__group">
          <label>Preferred Session</label>
          <select name="session" value={form.session} onChange={handleChange}>
            <option value="">Select session…</option>
            <option value="morning">Morning (8:30–11:30 AM)</option>
            <option value="afternoon">Afternoon (12:30–3:30 PM)</option>
            <option value="allday">All Day (8:30 AM–3:30 PM)</option>
          </select>
        </div>

        <div className="enroll-form__group">
          <label>Anything you'd like us to know?</label>
          <textarea
            name="message"
            rows={3}
            placeholder="Questions, special considerations…"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="enroll-form__submit">
          Request a Tour
        </button>
      </form>

      <div className="enroll-form__contact">
        <p>📍 431 Runnymede St., East Palo Alto, CA 94303</p>
        <p>
          ✉️{" "}
          <a href="mailto:megamontressori@gmail.com">
            megamontressori@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
