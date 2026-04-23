const shots = [
  { src: '/images/1.png', caption: 'Categories for Messages' },
  { src: '/images/2.png', caption: 'Select or Enter number' },
  { src: '/images/3.png', caption: 'Excel Support' },
  { src: '/images/3-1.png', caption: 'Unlimited Groups' },
];

const Screenshots = () => {
  return (
    <section className="section screenshots" id="screenshots">
      <div className="section-inner">
        <div className="screenshots-head">
          <div>
            <span className="section-eyebrow">Screenshots</span>
            <h2 className="section-title">A look inside the app</h2>
            <p className="section-subtitle">
              Clean, simple, and built for speed. Swipe through the key screens
              below to see how Multi SMS Sender works on your phone.
            </p>
          </div>
          {/* <span className="screenshots-hint">← swipe to explore →</span> */}
        </div>

        <div className="screenshots-scroll">
          {shots.map((s) => (
            <figure className="screenshot-card" key={s.src}>
              <img src={s.src} alt={s.caption} loading="lazy" />
              <figcaption className="screenshot-card-caption">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
