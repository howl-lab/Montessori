// pages/Montessori.tsx — Maria Montessori & the method (content from shared data).

import { CORE_BELIEFS, LEGACY_STATS } from "../data";
import Footer from "../components/Footer";
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
        <div className="mm-bio__header reveal">
          <div className="mm-bio__medallion" aria-hidden="true">
            <span className="mm-bio__initials">M</span>
          </div>
          <div>
            <h2 className="mm-bio__heading">
              A Life in <span>Service</span> to Children
            </h2>
            <p className="mm-bio__lede">
              Born in Chiaravalle, Italy in 1870, Maria Montessori was among the
              first women in Italy to study medicine. What began as scientific
              observation of children in Rome&apos;s asylums became a worldwide
              pedagogical movement grounded in deep respect for childhood.
            </p>
          </div>
        </div>
        <div className="mm-bio__body reveal">
          <aside className="mm-bio__portrait" aria-hidden="true">
            <div className="mm-bio__frame">
              <div className="mm-bio__silhouette" />
            </div>
          </aside>
          <div className="mm-bio__copy">
            <p>
              In 1907 she opened the first <em>Casa dei Bambini</em>{" "}
              (&ldquo;Children&apos;s House&rdquo;) in San Lorenzo, Rome — a
              prepared environment where mixed-age children could choose
              purposeful work, concentrate without interruption, and learn
              through the senses.
            </p>
            <p>
              Montessori&apos;s materials, teacher preparation, and philosophy
              crossed continents. Today, thousands of schools carry forward her
              conviction that education should follow the child — never the
              reverse.
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
