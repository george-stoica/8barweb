/* global React */

function WorkPage() {
  return (
    <main className="page">
      <section className="shell" style={{ paddingTop: 96, paddingBottom: 32 }}>
        <span className="eyebrow">What we do</span>
        <h1 className="display" style={{ marginTop: 20, maxWidth: '18ch' }}>
          Two modes.<br/>One standard.
        </h1>
        <p className="lede" style={{ color: 'var(--steel)', fontSize: 19, marginTop: 24, maxWidth: '60ch' }}>
          8bar operates in two modes that share the same standards: building new
          software, and advising the teams who already have software to run.
        </p>
      </section>

      <section className="shell section">
        <div className="modes">
          {/* BUILD */}
          <article className="mode-card">
            <span className="eyebrow">01 · Build</span>
            <h2>We design and ship software end-to-end.</h2>
            <p style={{ color: 'var(--steel)' }}>
              From an idea on a whiteboard to software in users&rsquo; hands. Native
              mobile (iOS and Android), web frontends, backend APIs, databases,
              and the deployment infrastructure that holds it all together.
            </p>
            <p className="meta">A typical engagement runs 3 to 12 weeks.</p>

            <ul className="deliverables" aria-label="Build deliverables">
              <li>
                <span className="idx mono">B.01</span>
                <span>
                  <div className="label">MVP product build</div>
                  <div className="desc">Mobile or web. Architecture, code, infra, deploy.</div>
                </span>
              </li>
              <li>
                <span className="idx mono">B.02</span>
                <span>
                  <div className="label">Event-driven backend services</div>
                  <div className="desc">Kafka, Postgres, Redis. JVM stack or Go.</div>
                </span>
              </li>
              <li>
                <span className="idx mono">B.03</span>
                <span>
                  <div className="label">Platform &amp; CI/CD foundations</div>
                  <div className="desc">Kubernetes, Terraform, Argo CD, observability from day one.</div>
                </span>
              </li>
              <li>
                <span className="idx mono">B.04</span>
                <span>
                  <div className="label">Mobile applications</div>
                  <div className="desc">Native iOS, Android, or cross-platform — pragmatic per project.</div>
                </span>
              </li>
            </ul>
          </article>

          {/* ADVISE */}
          <article className="mode-card">
            <span className="eyebrow">02 · Advise</span>
            <h2>We work alongside engineering teams that already exist.</h2>
            <p style={{ color: 'var(--steel)' }}>
              We review architectures before they become legacy, audit codebases
              before they become unmaintainable, and help technical leaders make
              better decisions on what to build, what to buy, and what to retire.
            </p>
            <p className="meta">From one-day deep-dives to fractional CTO arrangements.</p>

            <ul className="deliverables" aria-label="Advise deliverables">
              <li>
                <span className="idx mono">A.01</span>
                <span>
                  <div className="label">Architecture &amp; codebase review</div>
                  <div className="desc">Written report. Findings, risks, prioritised remediations.</div>
                </span>
              </li>
              <li>
                <span className="idx mono">A.02</span>
                <span>
                  <div className="label">Cloud &amp; platform audit</div>
                  <div className="desc">AWS or Azure. Cost, reliability, security posture.</div>
                </span>
              </li>
              <li>
                <span className="idx mono">A.03</span>
                <span>
                  <div className="label">Incident response &amp; SRE setup</div>
                  <div className="desc">On-call rotation, runbooks, observability stack.</div>
                </span>
              </li>
              <li>
                <span className="idx mono">A.04</span>
                <span>
                  <div className="label">Fractional CTO</div>
                  <div className="desc">Ongoing technical leadership for early-stage teams.</div>
                </span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <hr className="divider" />

      <section className="shell section--tight">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 24 }}>
          <p className="statement">
            Plain language. Real scope. Software that <em>ships</em>.
          </p>
          <a href="#contact" className="btn btn--primary">
            Start a conversation <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

window.WorkPage = WorkPage;
