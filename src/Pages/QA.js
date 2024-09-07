import React from 'react';

const questionsAndAnswers = [
  {
    question: "Why did the mice live in the abandoned village?",
    answer: "The mice lived in the abandoned village because the houses, streets, and shops were in ruins and empty, making it an ideal place for them to live and build a network of tunnels.",
  },
  {
    question: "How did the elephants' footsteps affect the mice's tunnels?",
    answer: "When the elephants walked through the village, their large feet destroyed the network of tunnels that the mice had painstakingly built, causing chaos and damage.",
  },
  {
    question: "What did the mice do when they discovered the elephants were stuck in the lake?",
    answer: "When the mice discovered that the elephants were stuck in the lake, they rushed to the lake and quickly chewed through the ropes that were tying the elephants, freeing them.",
  },
  {
    question: "What were the elephants planning to do when they passed through the village?",
    answer: "The elephants were planning to reach the lake in the west to enjoy a swim, and they did not realize that their passage would destroy the mice's tunnels.",
  },
  {
    question: "How did the mice respond to the destruction of their tunnels?",
    answer: "The mice responded to the destruction of their tunnels by saving the elephants when they were stuck in the lake, showing kindness and consideration despite the damage caused.",
  },
];

const QA = () => {
  return (
    <div className="qa-container mt-3">
      <h1 className="qa-title">🌟 Frequently Asked Questions 🌟</h1>
      {questionsAndAnswers.map((qa, index) => (
        <div key={index} className="qa-item">
          <h2 className="qa-question">{qa.question}</h2>
          <p className="qa-answer">{qa.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default QA;
