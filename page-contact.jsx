/* global React, MeasurementScale */

function ContactPage() {
  return (
    <main className="page">
      <section className="shell" style={{ paddingTop: 96, paddingBottom: 32 }}>
        <span className="eyebrow">Contact</span>
        <h1 className="display" style={{ marginTop: 20, maxWidth: '20ch' }}>
          Write us an email.
        </h1>
        <p className="lede" style={{ marginTop: 24, maxWidth: '54ch' }}>
          Tell us what you&rsquo;re building, what&rsquo;s in the way, and when
          you need it. We reply within one business day, in Hong Kong hours.
        </p>
      </section>

      <section className="shell section">
        <div className="contact-grid">
          <div>
            <div className="contact-block">
              <span className="label">Email</span>
              <span className="value">
                <a href="mailto:contact@8barsystems.tech">contact@8barsystems.tech</a>
              </span>
            </div>
            <div className="contact-block">
              <span className="label">Web</span>
              <span className="value">
                <a href="https://8barsystems.tech" target="_blank" rel="noreferrer">8barsystems.tech</a>
              </span>
            </div>
            <div className="contact-block">
              <span className="label">LinkedIn</span>
              <span className="value">
                <a href="https://www.linkedin.com/company/8bar-systems" target="_blank" rel="noreferrer">linkedin.com/company/8bar-systems</a>
              </span>
            </div>
            <div className="contact-block">
              <span className="label">Hours</span>
              <span className="value">Mon — Fri · 09:00 — 18:00 HKT</span>
            </div>
          </div>

          <div>
            <div className="contact-block">
              <span className="label">Address</span>
              <span className="value" style={{ fontSize: 15, lineHeight: 1.7 }}>
                Unit 2904–05, 29/F<br/>
                Universal Trade Centre<br/>
                3 Arbuthnot Road, Central<br/>
                Hong Kong S.A.R.
              </span>
            </div>
            <div className="contact-block">
              <span className="label">Engagement scope</span>
              <span className="value" style={{ fontSize: 15, lineHeight: 1.7, fontFamily: 'var(--sans)' }}>
                Build engagements from 3 weeks.<br/>
                Advisory from a single day.
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="shell section--tight" style={{ paddingBottom: 24 }}>
        <MeasurementScale />
      </section>
    </main>
  );
}

window.ContactPage = ContactPage;
