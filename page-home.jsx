/* global React, MeasurementScale */

function HomePage({ go, line, showWhy }) {
  const showStatement = showWhy !== false;
  return (
    <main className="page">
      <section className="shell hero">
        <span className="eyebrow">Software · Hong Kong · Worldwide</span>
        <h1 className="display hero-wedge" style={{ marginTop: 24 }}>
          {line ? line : (
            <>
              Writing software<br/>has never been easier.
              <span className="hero-wedge-break"> </span>
              Running it well<br/>has never been harder.
            </>
          )}
        </h1>
        <p className="lede">
          A software studio for startups and scaleups. We build mobile applications,
          backend APIs, and the systems behind them — and we advise on the decisions
          that shape them.
        </p>
        <div className="ctas">
          <a href="#work" className="btn btn--primary">
            See what we do <span className="arrow">→</span>
          </a>
          <a href="#contact" className="btn">
            Get in touch <span className="arrow">→</span>
          </a>
        </div>

        <div className="hero-scale-wrap">
          <MeasurementScale />
          <div className="scale-caption">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span style={{ color: 'var(--amber)' }}>8</span>
            <span>9</span>
          </div>
        </div>
      </section>

      {showStatement && (<>
      <hr className="divider" />

      <section className="shell section">
        <span className="eyebrow">Why 8bar</span>
        <p className="statement" style={{ marginTop: 24 }}>
          Senior engineering, delivered as a studio. Built on a decade of shipped
          systems in <em>fintech, payments, and mobile.</em>
        </p>

        <div className="three-up">
          <div className="item">
            <div className="num">01</div>
            <h3>Engineering led.</h3>
            <p>
              Architecture, code review, production operations. A decade of
              shipped systems informs every recommendation we make.
            </p>
          </div>
          <div className="item">
            <div className="num">02</div>
            <h3>Specific, not vague.</h3>
            <p>
              We scope work in days, not weeks. We name the bottleneck and we
              name the fix.
            </p>
          </div>
          <div className="item">
            <div className="num">03</div>
            <h3>Built to last.</h3>
            <p>
              Tests, observability, runbooks, and CI on day one — not the day
              before you regret it.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="shell section">
        <span className="eyebrow">Capabilities</span>
        <p className="statement" style={{ marginTop: 24 }}>
          The tools we reach for, <em>chosen for the job</em>.
        </p>

        <div className="skills-grid" style={{ marginTop: 48 }}>
          <div className="skill-col">
            <div className="skill-label">Backend</div>
            <div className="skill-list mono">JVM (Kotlin / Java) · Go · Postgres · Kafka · Redis</div>
          </div>
          <div className="skill-col">
            <div className="skill-label">Platform</div>
            <div className="skill-list mono">Kubernetes · Terraform · Argo CD · AWS · Azure</div>
          </div>
          <div className="skill-col">
            <div className="skill-label">Mobile</div>
            <div className="skill-list mono">Swift (iOS) · Kotlin (Android) · cross-platform when it fits</div>
          </div>
          <div className="skill-col">
            <div className="skill-label">SRE &amp; observability</div>
            <div className="skill-list mono">Prometheus · Grafana · OpenTelemetry · runbooks · on-call</div>
          </div>
          <div className="skill-col">
            <div className="skill-label">Delivery</div>
            <div className="skill-list mono">GitHub Actions · trunk-based CI · IaC from day one</div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="shell section--tight">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 24 }}>
          <p className="statement">
            Have a system that&rsquo;s creaking, or one you haven&rsquo;t built yet?
          </p>
          <a href="#contact" className="btn btn--primary">
            Get in touch <span className="arrow">→</span>
          </a>
        </div>
      </section>
      </>)}
    </main>
  );
}

window.HomePage = HomePage;
