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
