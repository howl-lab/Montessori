// Nav.tsx — the top navigation bar.
//
// KEY CONCEPTS:
//  • Interface for props — defines exactly what data this component accepts
//  • Callback props     — passing a function as a prop so child can call parent
//  • className          — React's version of HTML "class" attribute

import type { PageId, NavLink } from '../types'
import './Nav.css'

// This interface defines the "contract" for Nav's props.
// TypeScript will error if you use <Nav> without these.
interface NavProps {
  currentPage: PageId
  onNavigate: (page: PageId) => void  // a function that takes a PageId, returns nothing
}

// The nav link data lives here as a constant — easy to update without touching JSX.
// Typed as NavLink[] (an array of NavLink objects defined in types/index.ts)
const NAV_LINKS: NavLink[] = [
  { label: 'Our Program', page: 'program' },
  { label: 'Montessori Method', page: 'montessori' },
  { label: 'Admission', page: 'admission' },
]

// Destructuring props: { currentPage, onNavigate } pulls them out of the props object.
// This is equivalent to: function Nav(props: NavProps) { const currentPage = props.currentPage ... }
export default function Nav({ currentPage, onNavigate }: NavProps) {
  return (
    <nav className="nav">
      <div className="nav__left">
        <button className="nav__logo" onClick={() => onNavigate('home')}>
          Mega<br /><span>Montessori</span>
        </button>
      </div>

      <ul className="nav__links">
        {/* .map() loops over the array and returns JSX for each item.
            The "key" prop helps React efficiently update lists. */}
        {NAV_LINKS.map((link) => (
          <li key={link.page}>
            <button
              // Template literal to conditionally add the active class
              className={`nav__link ${currentPage === link.page ? 'nav__link--active' : ''}`}
              onClick={() => onNavigate(link.page)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <button className="nav__cta" onClick={() => onNavigate('admission')}>
        Enroll Now
      </button>
    </nav>
  )
}
