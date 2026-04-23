const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <span className="section-eyebrow">About</span>
        <h2 className="section-title">Built for people who send at scale</h2>
        <p className="section-subtitle">
          Multi SMS Sender is for individuals and businesses who need a simple,
          reliable way to send bulk SMS directly from their mobile SIM. We focus
          on privacy, transparency, and full user control — messages are sent
          only after your action and follow Android &amp; Play Store guidelines.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-icon"><BoltIcon /></div>
            <h3>Fast & Direct</h3>
            <p>Send from your own SIM — no gateways, no API keys, no middleman.</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon"><UsersIcon /></div>
            <h3>Groups & Import</h3>
            <p>Unlimited groups. Import contacts from phonebook or Excel in seconds.</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon"><ShieldIcon /></div>
            <h3>Private & Transparent</h3>
            <p>Your data stays on your device. Every send is fully under your control.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
