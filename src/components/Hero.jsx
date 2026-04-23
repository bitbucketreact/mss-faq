const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302c.6.348.6 1.032 0 1.38l-2.302 1.302-2.532-2.532 2.532-2.452zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-eyebrow">
            <span className="dot" />
            Trusted by 1M+ users
          </span>
          <h1>
            Send <span className="grad">Bulk SMS</span> Directly From Your Phone
          </h1>
          <p>
            Multi SMS Sender lets you message multiple contacts at once from your
            Android device. No gateways. No complexity. Full delivery tracking.
          </p>
          <div className="hero-cta-row">
            <a
              href="https://play.google.com/store/apps/details?id=crazy.pradeep.multismssender"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-download-btn"
            >
              <PlayStoreIcon />
              Download on Play Store
            </a>
            {/* <a href="#screenshots" className="hero-ghost-btn">
              See screenshots <ArrowIcon />
            </a> */}
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">1M+</span>
              <span className="hero-stat-label">Downloads</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">4.5 ★</span>
              <span className="hero-stat-label">Star Rating</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">300+</span>
              <span className="hero-stat-label">Reviews</span>
            </div>
          </div>
        </div>

        <div className="hero-phones" aria-hidden="true">
          <div className="hero-phone-card left">
            <img src="/images/1.png" alt="" />
          </div>
          <div className="hero-phone-card center">
            <img src="/images/2.png" alt="" />
          </div>
          <div className="hero-phone-card right">
            <img src="/images/3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
