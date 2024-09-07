import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define a single question with its options and correct answer
const quiz = {
  quizTitle: 'The Mice and the Elephants Quiz',
  questions: [
    {
      question: 'What did the mice do to save the elephants?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'The mice warned the elephants.',
        'The mice saved the elephants by chewing the ropes.',
        'The mice built new tunnels.',
        'The mice left the village.',
      ],
      correctAnswer: '1', // Index of the correct answer (1-based index)
      messageForCorrectAnswer: 'Correct! The mice chewed the ropes to save the elephants.',
      messageForIncorrectAnswer: 'Oops! The correct answer is: The mice saved the elephants by chewing the ropes.',
    },
  ],
};

const QuizComp = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = quiz.questions[0]; // Displaying only the first question

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setShowAnswer(true);
  };

  return (
    <motion.div
      className="quiz-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="quiz-title">🧠 The Mice and the Elephants Quiz 🧠</h1>
      <div className="quiz-question">
        <h2>{currentQuestion.question}</h2>
        <div className="answers-container">
          {currentQuestion.answers.map((answer, index) => (
            <div
              key={index}
              className={`answer-box ${selectedAnswer === index ? 'selected' : ''}`}
              onClick={() => handleAnswerClick(index)}
            >
              {answer}
            </div>
          ))}
        </div>
        {showAnswer && (
          <p className={`quiz-answer ${selectedAnswer === parseInt(currentQuestion.correctAnswer) ? 'correct' : 'incorrect'}`}>
            {selectedAnswer === parseInt(currentQuestion.correctAnswer)
              ? currentQuestion.messageForCorrectAnswer
              : currentQuestion.messageForIncorrectAnswer}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default QuizComp;
