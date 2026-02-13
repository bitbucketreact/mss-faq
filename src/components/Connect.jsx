const InstagramIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#E1306C" opacity="0.12" />
    <rect x="9" y="9" width="14" height="14" rx="4" stroke="#E1306C" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="16" r="3.5" stroke="#E1306C" strokeWidth="1.5" fill="none" />
    <circle cx="20.5" cy="11.5" r="1" fill="#E1306C" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#1877F2" opacity="0.12" />
    <path d="M17.5 25v-8h2.5l.5-3h-3v-1.5c0-.83.17-1.5 1.5-1.5h1.5V8h-2.5C15.5 8 14 9.57 14 12v2h-2v3h2v8h3.5z" fill="#1877F2" />
  </svg>
);

const Connect = () => {
  return (
    <section className="connect" id="connect">
      <h2>Connect Us</h2>
      <div className="connect-icons">
        <a href="https://www.instagram.com/officialpradeep" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/pardeep0008" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FacebookIcon />
        </a>
      </div>
    </section>
  );
};

export default Connect;
