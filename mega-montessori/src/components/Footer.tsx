// Footer.tsx — shared footer used on every page.

import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        Mega <span>Montessori</span> Children's House
      </div>
      <p className="footer__tagline">Nurturing Hearts, Guiding Minds</p>

      <p className="footer__address">431 Runnymede St., East Palo Alto, CA 94303</p>
      <p className="footer__email">
        <a href="mailto:megamontressori@gmail.com">megamontressori@gmail.com</a>
      </p>
      <p className="footer__copy">© 2026 Mega Montessori Children's House</p>
    </footer>
  )
}
