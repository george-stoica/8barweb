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
          <div className="label">03 · Areas of expertise</div>
          <div>
            <p>
              The domains we&rsquo;ve spent the last decade in — and the ones
              we&rsquo;re fluent enough in to make good calls quickly.
            </p>

            <ul className="how-list" aria-label="Areas of expertise">
              <li>
                <div className="how-label">Payments &amp; FX.</div>
                <div className="how-desc">
                  Multi-currency accounts, payment-processor integrations,
                  settlement, and reconciliation flows.
                </div>
              </li>
              <li>
                <div className="how-label">Trading &amp; market infrastructure.</div>
                <div className="how-desc">
                  Order flow, RFQ negotiation, settlement engines, real-time
                  risk and position management.
                </div>
              </li>
              <li>
                <div className="how-label">High-throughput mobile platforms.</div>
                <div className="how-desc">
                  Backend infrastructure for consumer apps operating at
                  hundreds of thousands of requests per minute.
                </div>
              </li>
              <li>
                <div className="how-label">Event-driven architectures.</div>
                <div className="how-desc">
                  Kafka-based systems for real-time data flow between services
                  and across organisations.
                </div>
              </li>
              <li>
                <div className="how-label">Cloud platforms &amp; migrations.</div>
                <div className="how-desc">
                  Kubernetes estates on AWS and Azure; gateway, ingress, and
                  identity migrations on live production systems.
                </div>
              </li>
              <li>
                <div className="how-label">Observability &amp; SRE.</div>
                <div className="how-desc">
                  Prometheus / Grafana stacks, alerting, on-call rotation
                  design, incident response and post-mortem practice.
                </div>
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

    </main>
  );
}

window.AboutPage = AboutPage;
