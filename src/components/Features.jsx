const icons = {
  groups: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  excel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="19" />
      <line x1="15" y1="13" x2="9" y2="19" />
    </svg>
  ),
  personalize: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  ),
  signature: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M3 17s3-6 9-6 9 6 9 6" />
      <path d="M3 21h18" />
      <path d="M12 3v8" />
    </svg>
  ),
  sim: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M9 10h6v6H9z" />
      <line x1="9" y1="13" x2="15" y2="13" />
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2c2.6 0 5 1 6.8 2.6" />
      <path d="M22 5v5h-5" />
    </svg>
  ),
  favorite: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  backup: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <polyline points="21 4 21 10 15 10" />
    </svg>
  ),
  watermark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l2.5 2.5L16 9" />
    </svg>
  ),
  longmsg: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="7" y1="9" x2="17" y2="9" />
      <line x1="7" y1="13" x2="14" y2="13" />
    </svg>
  ),
  history: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M1 4v6h6" />
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  ),
  nosave: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
    </svg>
  ),
};

const features = [
  {
    icon: icons.groups,
    title: 'Unlimited Groups',
    desc: 'Create multiple groups and send messages to all members in one shot. Manage, edit, and search group contacts any time.',
  },
  {
    icon: icons.excel,
    title: 'Excel Import',
    desc: 'Import group contacts from an Excel file or send messages directly by importing contacts from a sheet.',
  },
  {
    icon: icons.personalize,
    title: 'Personalized Messages',
    desc: 'Personalize every bulk message using the recipient’s first name and last name — bulk that still feels personal.',
  },
  {
    icon: icons.signature,
    title: 'Message Signatures',
    desc: 'Create and manage signatures that are automatically appended to the end of each message you send.',
  },
  {
    icon: icons.sim,
    title: 'Multiple Phone Numbers',
    desc: 'Fully supports contacts with multiple saved phone numbers directly from your phone-book.',
  },
  {
    icon: icons.google,
    title: 'System & Google Groups',
    desc: 'Send group messages using your Google account contacts or any other system groups on your device.',
  },
  {
    icon: icons.favorite,
    title: 'Favorites',
    desc: 'Mark phone-book contacts as favorites and message them all together in one shot.',
  },
  {
    icon: icons.backup,
    title: 'Backup & Restore',
    desc: 'Back up your groups to an Excel file and restore them on another phone when you switch devices.',
  },
  {
    icon: icons.watermark,
    title: 'No Watermark',
    desc: 'Your messages go out exactly as written — the app never adds any watermark or branding to your text.',
  },
  {
    icon: icons.nosave,
    title: 'Send Without Saving',
    desc: 'Message people without adding them to your phone-book — just create a group and hit send.',
  },
  {
    icon: icons.longmsg,
    title: 'Long Messages',
    desc: 'Send long text messages with more than 160 characters, automatically handled and stitched for you.',
  },
  {
    icon: icons.history,
    title: 'History & Resend',
    desc: 'See full sent history, long-press to copy, and tap any failed message to resend it instantly.',
  },
];

const Features = () => {
  return (
    <section className="section features" id="features">
      <div className="section-inner">
        <span className="section-eyebrow">App Features</span>
        <h2 className="section-title">Everything you need to message at scale</h2>
        <p className="section-subtitle">
          Multi SMS Sender is the default SMS handler on your device. Send one message
          to many recipients using your native messaging plan — with all the tools you
          need to stay organized, personal, and in control.
        </p>

        <div className="features-grid">
          {features.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="feature-card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
