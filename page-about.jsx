/* global React */

function AboutPage() {
  return (
    <main className="page">
      <section className="shell" style={{ paddingTop: 96, paddingBottom: 32 }}>
        <span className="eyebrow">About</span>
        <h1 className="display" style={{ marginTop: 20, maxWidth: '18ch' }}>
          A small studio<br/>built around judgement.
        </h1>
      </section>

      <section className="shell section">
        <div className="about-grid">
          <div className="label">01 · Why</div>
          <div>
            <p style={{ fontSize: 22, lineHeight: 1.4, letterSpacing: '-0.005em' }}>
              Writing software has never been easier. Running it well has never
              been harder.
            </p>
            <p style={{ marginTop: 24 }}>
              8bar exists for the work that doesn&rsquo;t get cheaper just because
              code does — the architecture decision that has to be right the first
              time, the platform that has to survive its own success, the codebase
              that has to be inherited and improved instead of torn down, the
              product that has to ship under a real deadline with real users on
              the other side.
            </p>
            <p style={{ marginTop: 18, color: 'var(--steel)' }}>
              We take on a small number of engagements at a time and treat each
              one like our own product.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="shell section">
        <div className="about-grid">
          <div className="label">02 · How we work</div>
          <div>
            <p>
              Every engagement is scoped before it starts. We agree on the shape
              of the problem, the artifacts you&rsquo;ll get, and the timeline —
              in writing — before any code is written.
            </p>

            <ul className="how-list" aria-label="What you can expect">
              <li>
                <div className="how-label">Decisions you can refer back to.</div>
                <div className="how-desc">
                  Architecture documents, audit reports, runbooks. Written so the
                  next engineer — yours or ours — picks up where we left off.
                </div>
              </li>
              <li>
                <div className="how-label">Production-grade defaults.</div>
                <div className="how-desc">
                  Tests, observability, and CI from day one. The dividing line
                  between code that ships and code that <em>runs</em>.
                </div>
              </li>
              <li>
                <div className="how-label">Direct access to the engineer making the decisions.</div>
                <div className="how-desc">
                  No account layer, no offshore handoff, no chatbot in the loop
                  where judgement should be.
                </div>
              </li>
            </ul>

            <p className="meta" style={{ marginTop: 28 }}>
              We don&rsquo;t do open-ended staff augmentation, body-shop
              placements, or prototypes dressed up as production systems.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="shell section">
        <div className="about-grid">
          <div className="label">03 · Selected work</div>
          <div>
            <p style={{ color: 'var(--steel)' }}>
              A sample of the engagements behind 8bar — anonymised.
            </p>

            <ul className="timeline" style={{ marginTop: 28 }}>
              <li>
                <span className="when">Ongoing</span>
                <span className="what">
                  <strong>Hybrid mobile platform.</strong>{' '}
                  <span className="role">
                    20 Azure AKS clusters across 2 regions · 340k req/min · led
                    API gateway migration cutting infrastructure cost 40% ·
                    designed and operates the on-call SRE rotation.
                  </span>
                </span>
              </li>
              <li>
                <span className="when">Payments &amp; FX</span>
                <span className="what">
                  <strong>Multi-currency payments platform.</strong>{' '}
                  <span className="role">
                    Event-driven microservices backing bank-account management
                    and third-party payment processors for a Hong Kong
                    challenger bank.
                  </span>
                </span>
              </li>
              <li>
                <span className="when">Trading</span>
                <span className="what">
                  <strong>Commodity trading marketplace.</strong>{' '}
                  <span className="role">
                    Java / Micronaut / Kafka backend for an oil-trading
                    platform · trade-negotiation and settlement engine on Kafka
                    streams · full AWS infrastructure in Terraform.
                  </span>
                </span>
              </li>
              <li>
                <span className="when">Wealth</span>
                <span className="what">
                  <strong>Digital wealth management platform.</strong>{' '}
                  <span className="role">
                    On-demand AWS environment provisioning (EKS + supporting
                    infra) cutting new-client onboarding time significantly ·
                    self-service DB credential portal via HashiCorp Vault.
                  </span>
                </span>
              </li>
              <li>
                <span className="when">Trading</span>
                <span className="what">
                  <strong>Financial instruments trading.</strong>{' '}
                  <span className="role">
                    Kotlin / Akka microservices for indication-of-interest,
                    peer-to-peer RFQ negotiation, and real-time position
                    liquidation triggered by risk thresholds.
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="shell section">
        <div className="about-grid">
          <div className="label">04 · Capabilities</div>
          <div>
            <p>
              Built on a decade of work in payments, trading platforms, digital
              wealth, and high-throughput mobile.
            </p>

            <div className="skills-grid">
              <div className="skill-col">
                <span className="skill-label">Platform &amp; SRE</span>
                <span className="skill-list">Kubernetes · Helm · Argo CD · Istio · Linkerd · Kong · workload identity</span>
              </div>
              <div className="skill-col">
                <span className="skill-label">Observability</span>
                <span className="skill-list">Prometheus · Grafana · Thanos · Loki · ELK · Alertmanager · PagerDuty</span>
              </div>
              <div className="skill-col">
                <span className="skill-label">Backend</span>
                <span className="skill-list">Java · Kotlin · Go · Spring Boot · Micronaut · Akka · Kafka Streams</span>
              </div>
              <div className="skill-col">
                <span className="skill-label">Cloud</span>
                <span className="skill-list">AWS (EKS, RDS, IAM, IRSA, CloudFront) · Azure (AKS, Cosmos DB, Front Door)</span>
              </div>
              <div className="skill-col">
                <span className="skill-label">Data &amp; messaging</span>
                <span className="skill-list">Kafka · PostgreSQL · Redis · MongoDB · OpenSearch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="shell section">
        <div className="about-grid">
          <div className="label">05 · Founder</div>
          <div>
            <p style={{ fontSize: 19 }}>
              <strong>George Stoica.</strong>{' '}
              Backend and platform engineer; a decade running distributed
              systems in payments, trading, and high-throughput mobile platforms
              across Hong Kong&rsquo;s fintech sector — the kind of work where
              &ldquo;compiles and runs locally&rdquo; is the start of the job,
              not the end.
            </p>
            <p className="meta" style={{ marginTop: 16 }}>
              MSc Information Security · BSc Computer Science.
            </p>
            <p style={{ marginTop: 20 }}>
              <a className="underline" href="https://www.linkedin.com/in/georgestoica/" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="shell section">
        <div className="about-grid">
          <div className="label">06 · Where</div>
          <div>
            <p>
              8bar Systems Limited is registered in Hong Kong S.A.R. We work
              remote-first with clients globally, and travel for engagements
              that need it.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

window.AboutPage = AboutPage;
