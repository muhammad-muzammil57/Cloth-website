"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "You can return any product within 30 days of purchase in original condition."
  },
  {
    question: "Do you ship worldwide?",
    answer: "Yes, international orders are accepted. Shipping charges apply based on region."
  },
  {
    question: "How can I track my order?",
    answer: "After shipping, tracking details will be emailed to your registered email."
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full px-6 py-16 bg-dark">
      <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-md">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-5 py-4 text-left font-medium flex justify-between items-center"
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-5 pb-4 pt-0 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
