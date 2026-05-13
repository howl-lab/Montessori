// components/ContactForm.tsx — shared "Request a Tour" form used on Home and Admission.

import { useState } from "react";
import "./ContactForm.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  age: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    age: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thank you! We'll be in touch soon!");
  }

  return (
    <div className="enroll-form reveal">
      <form onSubmit={handleSubmit}>
        <div className="enroll-form__row">
          <div className="enroll-form__group">
            <label>Parent / Guardian Name</label>
            <input type="text" name="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} />
          </div>
          <div className="enroll-form__group">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="jane@email.com" value={form.email} onChange={handleChange} />
          </div>
        </div>
        <div className="enroll-form__row">
          <div className="enroll-form__group">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="(555) 000-0000" value={form.phone} onChange={handleChange} />
          </div>
          <div className="enroll-form__group">
            <label>Child&apos;s Age</label>
            <select name="age" value={form.age} onChange={handleChange}>
              <option value="">Select age…</option>
              {["18 months – 2 years", "2 – 4 years", "4 – 6 years"].map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="enroll-form__group">
          <label>Anything you&apos;d like us to know?</label>
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
    </div>
  );
}
