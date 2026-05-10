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
            <p>
              8bar exists for a specific kind of work: the senior technical decision
              that has to be right the first time. The platform that needs to scale
              past the prototype. The codebase that has to be inherited and
              improved, not torn down. The mobile or backend product that has to
              ship — properly — on a deadline that matters.
            </p>
            <p style={{ marginTop: 18, color: 'var(--steel)' }}>
              We take on a small number of engagements at a time and treat
              each one like our own product.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="shell section">
        <div className="about-grid">
          <div className="label">02 · Team</div>
          <div>
            <p>
              The studio draws on a decade of shipping distributed, event-driven
              systems in fintech and financial services — commodity trading
              platforms, multi-currency payments and FX, digital wealth
              management, and large-scale mobile platforms.
            </p>
            <p style={{ marginTop: 18 }}>
              Every engagement is led end-to-end by a principal engineer who
              works equally as a software engineer and as a platform / SRE
              engineer — designing services, observability stacks, and on-call
              rotations for systems handling hundreds of thousands of requests
              per minute.
            </p>

            <div className="skills-grid">
              <div className="skill-col">
                <span className="skill-label">Languages</span>
                <span className="skill-list">Java · Kotlin · Go · Python · C# / .NET</span>
              </div>
              <div className="skill-col">
                <span className="skill-label">Frameworks</span>
                <span className="skill-list">Spring Boot · Micronaut · Akka · Kafka Streams</span>
              </div>
              <div className="skill-col">
                <span className="skill-label">Cloud</span>
                <span className="skill-list">AWS (EKS, RDS, S3, IAM) · Azure (AKS, Cosmos DB)</span>
              </div>
              <div className="skill-col">
                <span className="skill-label">Platform</span>
                <span className="skill-list">Kubernetes · Helm · Argo CD · Istio · Linkerd · Kong</span>
              </div>
              <div className="skill-col">
                <span className="skill-label">IaC / CI · CD</span>
                <span className="skill-list">Terraform · Ansible · GitHub Actions · GitLab CI</span>
              </div>
              <div className="skill-col">
                <span className="skill-label">Data · Messaging</span>
                <span className="skill-list">Kafka · PostgreSQL · Redis · MongoDB · OpenSearch</span>
              </div>
              <div className="skill-col">
                <span className="skill-label">Observability</span>
                <span className="skill-list">Prometheus · Grafana · Thanos · Loki · ELK · PagerDuty</span>
              </div>
              <div className="skill-col">
                <span className="skill-label">Sectors</span>
                <span className="skill-list">Fintech · Payments · Trading · Wealth · Mobile platforms</span>
              </div>
            </div>

            <p className="meta" style={{ marginTop: 28 }}>
              MSc Information Security · BSc Computer Science.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="shell section">
        <div className="about-grid">
          <div className="label">03 · Where</div>
          <div>
            <p>
              8bar Systems Limited is registered in Hong Kong S.A.R. We work with
              clients globally — remote-first, with travel for engagements that
              need it.
            </p>
            <p className="mono" style={{ marginTop: 24, color: 'var(--steel)', fontSize: 14, lineHeight: 1.7 }}>
              Unit 2904–05, 29/F<br/>
              Universal Trade Centre<br/>
              3 Arbuthnot Road, Central<br/>
              Hong Kong S.A.R.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

window.AboutPage = AboutPage;
