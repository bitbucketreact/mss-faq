const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302c.6.348.6 1.032 0 1.38l-2.302 1.302-2.532-2.532 2.532-2.452zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
  </svg>
);

const GetApp = () => {
  return (
    <section className="getapp" id="getapp">
      <h2>Get App</h2>
      <p>Ready to send bulk SMS the <strong>easy way</strong>?</p>
      <a
        href="https://play.google.com/store/apps/details?id=crazy.pradeep.multismssender"
        target="_blank"
        rel="noopener noreferrer"
        className="getapp-btn"
      >
        <PlayStoreIcon />
        <div className="getapp-btn-text">
          <span>Download Multi SMS Sender</span>
          <strong>on Google Play</strong>
        </div>
      </a>
    </section>
  );
};

export default GetApp;
