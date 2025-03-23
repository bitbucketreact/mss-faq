import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
    image: "https://placehold.co/400", // Replace with actual image URL
  },
  {
    question: "How do I install React?",
    answer: "You can install React using create-react-app or via npm.",
    image: "https://placehold.co/400", // Replace with actual image URL
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript used with React.",
    image: "https://placehold.co/400", // Replace with actual image URL
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            <img src={item.image} alt="FAQ" className="faq-image" />
            <span>{item.question}</span>
          </button>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
