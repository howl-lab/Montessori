// data/index.ts — all site content lives here as typed constants.
//
// BENEFIT: Separating data from UI means you can update copy without
// touching any component files. This is a common real-world pattern.

import type {
  Testimonial, ProgramPillar, StemItem,
  ProgramDailyRow, FaqEntry, Session, CoreBelief, LegacyStat, ClassroomArea,
} from '../types'

// ─── Home ────────────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Meg has a rare gift — she sees each child not for where they are, but for all they can become. Our daughter walked in shy, and left each day absolutely glowing.",
    name: 'Jennifer L.',
    role: 'Parent of Lily, age 4',
    initials: 'JL',
    color: 'plum',
  },
  {
    id: 2,
    quote:
      "From our very first tour, Meg's warmth and deep knowledge of Montessori were clear. She communicates beautifully with families and notices every child's unique needs.",
    name: 'David & Amy C.',
    role: 'Parents of Mia, age 3',
    initials: 'DC',
    color: 'teal',
  },
  {
    id: 3,
    quote:
      'Watching Meg guide the children with such patience and joy changed how I see early education entirely. She is a truly gifted educator.',
    name: 'Priya S.',
    role: 'Parent of Rohan, age 5',
    initials: 'PS',
    color: 'coral',
  },
]

// ─── Program ──────────────────────────────────────────────────────────────────

export const PROGRAM_PILLARS: ProgramPillar[] = [
  {
    id: 1,
    icon: '🌱',
    variant: 'coral',
    title: 'Montessori at the Core',
    description: 'Our classrooms follow time-tested Montessori principles that honor each child\'s individual pace and potential. Hands-on materials move from concrete to abstract thinking — building confidence, concentration, and intrinsic motivation.',
    bullets: [
      'Child-led, self-directed learning',
      'Mixed-age classrooms (18 months–6 years)',
      'Individualized lessons and pacing',
      'Grace & courtesy woven into daily life',
    ],
  },
  {
    id: 2,
    icon: '🌍',
    variant: 'teal',
    title: 'Bilingual Language Immersion',
    description: 'Children are naturally immersed in both Mandarin and English throughout their day. Language is lived through interaction, stories, songs, and daily communication — at least 50% of daily time is dedicated to practicing both languages.',
    bullets: [
      'Daily Mandarin & English communication',
      'Songs, stories, and circle time in both languages',
      'Rich vocabulary through real-world experiences',
      'Cultural appreciation woven into daily life',
    ],
  },
  {
    id: 3,
    icon: '🔬',
    variant: 'yellow',
    title: 'STEM with Purpose & Wonder',
    description: 'Our STEM approach is experiential, inquiry-driven, and developmentally appropriate — not worksheet-based or rushed. STEM is integrated seamlessly into Montessori work, sparking curiosity, critical thinking, and creativity.',
    bullets: [
      'Guided observation, experimentation & nature study',
      'Technology as a tool for problem-solving',
      'Building, designing, and testing ideas',
      'Mathematics grounded in real-life application',
    ],
  },
  {
    id: 4,
    icon: '💛',
    variant: 'plum',
    title: 'Whole-Child Development',
    description: 'At Mega, education is more than academics. We foster social-emotional learning, grace and courtesy, respect, responsibility, and positive communication every day.',
    bullets: [
      'Social-emotional learning environment',
      'Emotional regulation & conflict resolution',
      'Collaboration and community building',
      'Calm, joyful, and safe classroom atmosphere',
    ],
  },
]

export const STEM_ITEMS: StemItem[] = [
  { letter: 'S', word: 'Science',     description: 'Observation, experimentation, and nature studies guided by monthly curriculum.' },
  { letter: 'T', word: 'Technology',  description: 'Used as a purposeful tool for problem-solving, not passive consumption.' },
  { letter: 'E', word: 'Engineering', description: 'Building, designing, and testing ideas that guide children with curiosity.' },
  { letter: 'M', word: 'Mathematics', description: 'Grounded in logic, patterns, and real-life application through hands-on materials.' },
]

export const CLASSROOM_AREAS: ClassroomArea[] = [
  {
    id: 1,
    icon: '🫖',
    variant: 'coral',
    title: 'Practical Life',
    activities: 'Water pouring, sweeping, dressing frames, food preparation.',
    materials: 'Child-sized brooms, pitchers, utensils, dressing frames.',
    benefits: 'Develops fine motor skills, independence, concentration, and a sense of responsibility.',
  },
  {
    id: 2,
    icon: '📖',
    variant: 'teal',
    title: 'Language',
    activities: 'Sandpaper letters, movable alphabet, word building, storytelling.',
    materials: 'Sandpaper letters, language cards, storybooks, moveable alphabets.',
    benefits: 'Enhances vocabulary, communication skills, reading and writing readiness, and cognitive development.',
  },
  {
    id: 3,
    icon: '🔢',
    variant: 'yellow',
    title: 'Mathematics',
    activities: 'Number rods, spindle boxes, bead chains, golden beads.',
    materials: 'Bead frames, number rods, sandpaper numbers, math games.',
    benefits: 'Builds a strong foundation in counting, addition, subtraction, and logical thinking.',
  },
  {
    id: 4,
    icon: '🎨',
    variant: 'plum',
    title: 'Sensorial',
    activities: 'Pink tower, color tablets, sound cylinders, fabric boxes.',
    materials: 'Geometric solids, smelling bottles, tasting jars, baric tablets.',
    benefits: 'Enhances sensory perception, cognitive development, language skills, and critical thinking.',
  },
]

export const PROGRAM_DAILY_SCHEDULE: ProgramDailyRow[] = [
  {
    time: '8:30–4:00',
    title: 'Regular Classroom Hour',
    description:
      'Individual lessons in language, math, sensorial, practical life & cultural work',
  },
  {
    time: '7:30–5:00',
    title: 'Extended Classroom Hour',
    description: 'For busy parents or children who need more time in the classroom',
  },
]

// ─── Admission ────────────────────────────────────────────────────────────────

export const SESSIONS: Session[] = [
  { icon: '🌤', name: 'Morning',   time: '8:30 AM – 11:30 AM', age: 'Ages 18 mo – 6 yrs', variant: 'morning'   },
  { icon: '☀️', name: 'Afternoon', time: '12:30 PM – 3:30 PM', age: 'Ages 18 mo – 6 yrs', variant: 'afternoon' },
  { icon: '🌈', name: 'All Day',   time: '8:30 AM – 3:30 PM',  age: 'Ages 18 mo – 6 yrs', variant: 'allday'    },
]

export const FAQS: FaqEntry[] = [
  {
    id: 1,
    question: 'What ages does Mega Montessori serve?',
    answer: 'We serve children ages 18 months to 6 years in a mixed-age Montessori classroom. This mixed-age structure is a core part of the Montessori philosophy.',
  },
  {
    id: 2,
    question: 'What is Montessori education?',
    answer: 'Montessori is a child-centered approach that emphasizes independence, hands-on learning, concentration, and respect for each child\'s developmental pace within a carefully prepared environment.',
  },
  {
    id: 3,
    question: 'How does bilingual learning work in the classroom?',
    answer: 'Language is integrated naturally into daily classroom life through conversation, routines, materials, stories, music, and cultural experiences. Children absorb both English and Mandarin organically and joyfully.',
  },
  {
    id: 4,
    question: 'Is my child too young to learn two languages?',
    answer: 'Young children are developmentally equipped to learn multiple languages. Bilingual exposure supports cognitive flexibility, communication skills, and cultural awareness.',
  },
  {
    id: 5,
    question: 'How does Montessori prepare children for kindergarten?',
    answer: 'Montessori builds strong foundations in focus, problem-solving, independence, and intrinsic motivation. Academic skills develop through hands-on materials matched to each child\'s readiness.',
  },
  {
    id: 6,
    question: 'How is social behavior handled in the classroom?',
    answer: 'Grace, courtesy, empathy, and respect are part of daily classroom life. Children learn to communicate their needs, resolve conflicts peacefully, and care for their community.',
  },
]

// ─── Montessori Method ────────────────────────────────────────────────────────

export const CORE_BELIEFS: CoreBelief[] = [
  {
    number: '01',
    title: 'Sensitive Periods',
    description:
      'Children pass through distinct windows of time in which they are uniquely ready to absorb certain skills — language, order, movement, and social refinement. These periods are fleeting and powerful.',
  },
  {
    number: '02',
    title: 'Observe & Guide',
    description:
      'The role of the teacher is to observe and guide rather than instruct and control. The prepared adult steps back, trusting the child\'s inner drive to learn and self-correct.',
  },
  {
    number: '03',
    title: 'Independence as the Goal',
    description:
      'Independence — not compliance — is the true aim of education. The classroom is a tool: child-sized, hands-on, multi-age, designed to foster autonomy and deep, joyful engagement.',
  },
]

export const LEGACY_STATS: LegacyStat[] = [
  { value: '1907', label: 'First Casa dei Bambini opened in Rome' },
  { value: '3×', label: 'Nobel Peace Prize nominated' },
  { value: '1,000s', label: 'Montessori schools worldwide today' },
  { value: '81', label: 'Years of a life devoted to children' },
]
