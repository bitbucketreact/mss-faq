import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: 'What is Multi SMS Sender?',
    answer:
      'Multi SMS Sender is an Android app that allows you to send bulk SMS messages to multiple contacts at once directly from your phone, making it ideal for small businesses, schools, and event organizers.',
  },
  {
    question: 'How do I import contacts into the app?',
    answer:
      'You can import contacts directly from your phone\'s contact list, or manually add numbers. The app also supports importing contacts from CSV files for bulk additions.',
  },
  {
    question: 'Is an SMS gateway required to use Multi SMS Sender?',
    answer:
      'No, Multi SMS Sender sends messages directly from your device using your SIM card. No external SMS gateway or internet connection is required to send messages.',
  },
  {
    question: 'Does Multi SMS Sender support dual SIM phones?',
    answer:
      'Yes, Multi SMS Sender fully supports dual SIM phones. You can choose which SIM card to use for sending messages, giving you flexibility and control over your messaging costs.',
  },
  {
    question: 'Can I personalize the messages I send?',
    answer:
      'Yes, you can personalize each message using variables like the recipient\'s name. This allows you to send bulk messages that still feel personal and tailored to each contact.',
  },
  {
    question: 'How does delivery tracking work?',
    answer:
      'Multi SMS Sender tracks the delivery status of each message in real-time. You can see which messages were sent, delivered, or failed, helping you ensure your communications reach their intended recipients.',
  },
  {
    question: 'How many contacts can I select at once?',
    answer:
      'There is no hard limit on the number of contacts you can select. However, sending speed depends on your device and carrier. The app handles large contact lists efficiently with batch processing.',
  },
  {
    question: 'Is Multi SMS Sender free to use?',
    answer:
      'Multi SMS Sender offers a free version with core features. Premium features are available through in-app purchases. Note that standard SMS charges from your carrier still apply.',
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="faq-question">
        <div className="faq-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="#3b7dd8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span>{question}</span>
        <div className={`faq-chevron ${isOpen ? 'open' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="#999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <div className="faq-hero-content">
          <div className="faq-hero-text">
            <h1>Frequently Asked<br />Questions</h1>
            <p>Find answers to common questions about Multi SMS Sender</p>
          </div>
          <div className="faq-hero-illustration">
            <svg width="320" height="280" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Phone */}
              <rect x="120" y="30" width="100" height="180" rx="16" fill="#2b5ea7" />
              <rect x="126" y="42" width="88" height="156" rx="8" fill="#e8eef7" />
              <rect x="155" y="34" width="30" height="4" rx="2" fill="#1a3f7a" />
              {/* Screen content lines */}
              <rect x="136" y="56" width="50" height="4" rx="2" fill="#b8cce8" />
              <rect x="136" y="66" width="68" height="4" rx="2" fill="#b8cce8" />
              <rect x="136" y="76" width="40" height="4" rx="2" fill="#b8cce8" />
              <rect x="136" y="90" width="60" height="4" rx="2" fill="#d4e1f3" />
              <rect x="136" y="100" width="68" height="4" rx="2" fill="#d4e1f3" />
              {/* Question mark */}
              <circle cx="190" cy="130" r="40" fill="#f0c230" opacity="0.9" />
              <text x="190" y="148" textAnchor="middle" fontSize="48" fontWeight="700" fill="#1a3f7a">?</text>
              {/* Chat bubbles */}
              <rect x="40" y="60" width="60" height="30" rx="8" fill="#fff" stroke="#d4e1f3" strokeWidth="1.5" />
              <rect x="48" y="70" width="30" height="3" rx="1.5" fill="#b8cce8" />
              <rect x="48" y="77" width="42" height="3" rx="1.5" fill="#b8cce8" />
              <rect x="240" y="40" width="55" height="30" rx="8" fill="#fff" stroke="#d4e1f3" strokeWidth="1.5" />
              <rect x="248" y="50" width="35" height="3" rx="1.5" fill="#b8cce8" />
              <rect x="248" y="57" width="28" height="3" rx="1.5" fill="#b8cce8" />
              {/* Magnifying glass */}
              <circle cx="270" cy="110" r="16" stroke="#3b7dd8" strokeWidth="3" fill="none" />
              <line x1="282" y1="122" x2="294" y2="134" stroke="#3b7dd8" strokeWidth="3" strokeLinecap="round" />
              {/* Checkmark bubble */}
              <circle cx="60" cy="140" r="14" fill="#3b7dd8" />
              <path d="M52 140l5 5 10-10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {/* Person */}
              <circle cx="170" cy="235" r="14" fill="#f5c77e" />
              <path d="M150 270 Q170 250 190 270" fill="#2b5ea7" />
              <rect x="160" y="248" width="20" height="22" rx="4" fill="#2b5ea7" />
              {/* Small decorative dots */}
              <circle cx="100" cy="30" r="3" fill="#3b7dd8" opacity="0.3" />
              <circle cx="260" cy="170" r="4" fill="#e8622c" opacity="0.3" />
              <circle cx="40" cy="180" r="3" fill="#f0c230" opacity="0.4" />
            </svg>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>FAQs</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        <div className="faq-contact">
          <div className="faq-contact-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 1a3 3 0 00-3 3v4a3 3 0 006 0V4a3 3 0 00-3-3z"
                fill="#3b7dd8"
              />
              <path
                d="M19 10v1a7 7 0 01-14 0v-1M12 18.5V23M8 23h8"
                stroke="#3b7dd8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="faq-contact-text">
            <h3>Still have questions?</h3>
            <p>
              Contact us at{' '}
              <a href="mailto:mss.comments@gmail.com">mss.comments@gmail.com</a>{' '}
              for further assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
