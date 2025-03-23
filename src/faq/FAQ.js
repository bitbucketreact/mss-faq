import React, { useState } from "react";

const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "How do I install React?",
    answer: "You can install React using create-react-app or via npm.",
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript used with React.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "left" }}>
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <button
            onClick={() => toggleFAQ(index)}
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              border: "1px solid #ddd",
              background: activeIndex === index ? "#f0f0f0" : "#fff",
              cursor: "pointer",
            }}
          >
            {item.question}
          </button>
          {activeIndex === index && (
            <div style={{ padding: "10px", border: "1px solid #ddd" }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
