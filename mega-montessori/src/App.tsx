// App.tsx — the root component of the app.
//
// KEY CONCEPTS:
//  • useState  — React hook that stores and updates data ("state")
//  • useEffect — React hook that runs side-effects (like scroll reveal)
//  • Props     — data you pass INTO a component, like HTML attributes
//  • JSX       — the HTML-looking syntax inside TypeScript files

import { useState, useEffect } from 'react'
import type { PageId } from './types'
import Nav from './components/Nav'
import Home from './pages/Home'
import Program from './pages/Program'
import Montessori from './pages/Montessori'
import Admission from './pages/Admission'

export default function App() {
  // useState<PageId> declares state whose value must be a PageId.
  // [currentPage, setCurrentPage] = [the value, the function to update it]
  const [currentPage, setCurrentPage] = useState<PageId>('home')

  // useEffect runs AFTER the component renders.
  // The second argument [] means "only run once on first mount."
  useEffect(() => {
    // Re-run scroll-reveal whenever the page changes
    runReveal()
  }, [currentPage]) // ← dependency array: re-run when currentPage changes

  // Called by Nav and page buttons to switch pages
  function navigate(page: PageId) {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    // Every component must return a single root element.
    // <> ... </> is a React Fragment — invisible wrapper, no extra DOM node.
    <>
      {/* Nav is a COMPONENT. We pass data to it as "props". */}
      <Nav currentPage={currentPage} onNavigate={navigate} />

      {/* Conditionally render pages based on state.
          This is the React equivalent of show/hide with CSS. */}
      {currentPage === 'home'        && <Home       onNavigate={navigate} />}
      {currentPage === 'program'     && <Program />}
      {currentPage === 'montessori'  && <Montessori />}
      {currentPage === 'admission'   && <Admission />}
    </>
  )
}

// Finds all .reveal elements on the current page and observes them.
// IntersectionObserver fires when an element scrolls into the viewport.
function runReveal() {
  setTimeout(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => {
      el.classList.remove('visible')
      observer.observe(el)
    })
  }, 100)
}
