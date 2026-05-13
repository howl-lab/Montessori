// pages/Montessori.tsx — Maria Montessori & the method (content from shared data).

import { CORE_BELIEFS, LEGACY_STATS } from "../data";
import Footer from "../components/Footer";
import mariaImg from "../images/maria.jpg";
import maria2Img from "../images/maria2.jpg";
import mariaRomeImg from "../images/maria-rome-1913.jpg";
import "./Montessori.css";

export default function Montessori() {
  return (
    <>
      <div className="mm-hero">
        <div className="mm-hero__inner">
          <div className="page-tag mm-hero__tag">Montessori Method</div>
          <h1 className="mm-hero__title">
            Who is
            <br />
            <span>Maria Montessori</span>
          </h1>
          <p className="mm-hero__sub">
            The story of Maria Montessori — the pioneering educator whose
            radical belief in children&apos;s capacity to learn continues to
            shape classrooms around the world.
          </p>
        </div>
      </div>

      <div className="mm-quote-dark">
        <blockquote>&ldquo;Education must begin at birth.&rdquo;</blockquote>
        <cite>— Maria Montessori</cite>
      </div>

      <div className="mm-bio">
        <div className="mm-bio__inner">
          <div className="mm-bio__profile reveal">
            <img
              src={mariaImg}
              alt="Maria Montessori"
              className="mm-bio__portrait-img"
            />
            <div>
              <h2 className="mm-bio__name">Maria Montessori</h2>
              <p className="mm-bio__meta">1870–1952</p>
              <p className="mm-bio__meta">
                Pioneer of Child-Centered Education
              </p>
            </div>
          </div>

          <h3 className="mm-bio__heading reveal">
            A Life in <span>Service</span> to Children
          </h3>

          <div className="mm-bio__lede reveal">
            <p>
              Maria Montessori was born in Chiaravalle, Italy in 1870—a time
              when women were expected to become teachers, if anything at all.
              She had other ideas and became one of the first women to attend
              medical school in Italy, graduating with honors from the
              University of Rome in 1896. That willingness to move against the
              grain would define her life's work and pave her path to education.
            </p>
            <p>
              From 1896 to 1901, she worked with children experiencing cognitive
              delays and disabilities, Wikipedia observing them closely and
              noticing something profound: given the right materials and
              environment, these children could learn far more than anyone
              expected. It was a revelation that shifted her focus entirely.
            </p>
          </div>

          <div className="mm-bio__photos reveal">
            <img
              src={maria2Img}
              alt="Maria Montessori with children"
              className="mm-bio__photo"
            />
            <img
              src={mariaRomeImg}
              alt="Montessori classroom, Rome 1913"
              className="mm-bio__photo"
            />
          </div>

          <div className="mm-bio__copy reveal">
            <p>
              In 1907 she opened the first <em>Casa dei Bambini</em>{" "}
              (&ldquo;Children&apos;s House&rdquo;) in San Lorenzo, Rome. What
              she witnessed there became the foundation of the Montessori
              method. Children, when given freedom within a carefully prepared
              environment, didn't need to be pushed or rewarded. They were
              naturally drawn to purposeful work. They concentrated deeply. They
              helped one another. They were, in her view, showing the world what
              children were truly capable of when adults got out of the way.
            </p>
            <p>
              Her philosophy rested on a few core beliefs: that children pass
              through distinct "sensitive periods" in which they are uniquely
              ready to absorb certain skills; that the role of the teacher is to
              observe and guide rather than instruct and control; and that
              independence—not compliance—is the true goal of education. The
              classroom itself became a tool, with child-sized furniture,
              hands-on materials, and multi-age groupings designed to foster
              autonomy and deep engagement. Montessori spent the rest of her
              life traveling the world, training teachers, and refining her
              ideas. She was nominated for the Nobel Peace Prize three times.
              She lived through two world wars, was exiled from Italy under
              Mussolini, and continued her work until her death in the
              Netherlands in 1952 at age 81. Today, her method is practiced in
              thousands of schools across the globe—and growing research
              continues to validate what she observed over a century ago: that
              children learn best when they are trusted.
            </p>
          </div>
        </div>
      </div>

      <div className="mm-beliefs">
        <div className="mm-beliefs__inner">
          <div className="section-label reveal">Core ideas</div>
          <h2 className="section-title reveal">
            Beliefs That <span>Shaped</span> a Method
          </h2>
          <div className="mm-beliefs__grid reveal">
            {CORE_BELIEFS.map((b) => (
              <article key={b.number} className="mm-belief">
                <div className="mm-belief__number">{b.number}</div>
                <h3 className="mm-belief__title">{b.title}</h3>
                <p className="mm-belief__desc">{b.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mm-legacy">
        <div className="mm-legacy__inner reveal">
          <h2 className="mm-legacy__heading">
            A Legacy in <span>Numbers</span>
          </h2>
          <div className="mm-legacy__grid">
            {LEGACY_STATS.map((s, i) => (
              <div
                key={s.label}
                className={`mm-legacy__stat mm-legacy__stat--${i % 4}`}
              >
                <span className="mm-legacy__stat-num">{s.value}</span>
                <span className="mm-legacy__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
