// types/index.ts — shared TypeScript types used across the whole app.
//
// In TypeScript, a "type" or "interface" describes the SHAPE of data.
// Think of it as a contract: "this object must have these fields."

// ─── Page names ───────────────────────────────────────────────────────────────
// A union type: PageId can ONLY be one of these string values.
export type PageId = 'home' | 'program' | 'montessori' | 'admission'

// ─── Nav ──────────────────────────────────────────────────────────────────────
// Describes a single navigation link.
export interface NavLink {
  label: string   // text shown in the nav
  page: PageId    // which page it navigates to
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  initials: string
  // A union of specific string literals — only these three values are valid
  color: 'plum' | 'teal' | 'coral'
}

// ─── Program pillars ──────────────────────────────────────────────────────────
export interface ProgramPillar {
  id: number
  icon: string
  title: string
  description: string
  bullets: string[]
  // Only these four color variants are allowed
  variant: 'coral' | 'teal' | 'yellow' | 'plum'
}

// ─── STEM items ───────────────────────────────────────────────────────────────
export interface StemItem {
  letter: string
  word: string
  description: string
}

// ─── Program daily summary (Our Program page) ───────────────────────────────
export interface ProgramDailyRow {
  time: string
  title: string
  description: string
}

// ─── FAQ entries ──────────────────────────────────────────────────────────────
export interface FaqEntry {
  id: number
  question: string
  answer: string
}

// ─── Session options ──────────────────────────────────────────────────────────
export interface Session {
  icon: string
  name: string
  time: string
  age: string
  variant: 'morning' | 'afternoon' | 'allday'
}

// ─── Montessori Method page ─────────────────────────────────────────────────
export interface CoreBelief {
  number: string
  title: string
  description: string
}

export interface LegacyStat {
  value: string
  label: string
}

// ─── Classroom Areas (Program page) ──────────────────────────────────────────
export interface ClassroomArea {
  id: number
  icon: string
  title: string
  activities: string
  materials: string
  benefits: string
  variant: 'coral' | 'teal' | 'yellow' | 'plum'
}
