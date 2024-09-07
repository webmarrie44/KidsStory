import React from 'react';
import {motion}   from 'framer-motion';
import step1Img from '../img/game1.png';
import step2Img from '../img/game2.png';
import step3Img from '../img/game3.png';
import step4Img from '../img/game4.png';
import step5Img from '../img/game5.png';
import step6Img from '../img/game6.png';
import step7Img from '../img/game7.png';

const steps = [
  { id: 1, title: "Step 1", image: step1Img },
  { id: 2, title: "Step 2", image: step2Img },
  { id: 3, title: "Step 3", image: step3Img },
  { id: 4, title: "Step 4", image: step4Img },
  { id: 5, title: "Step 5", image: step5Img },
  { id: 6, title: "Step 6", image: step6Img },
  { id: 7, title: "Step 7", image: step7Img },
];

const ExampleGame = () => {
  return (
    <div className="example-game-container">
      {steps.map((step, index) => (
        <motion.div
          className="step-container"
          key={step.id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <h2>{step.title}</h2>
          <motion.img
            src={step.image}
            alt={step.title}
            className="step-image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ExampleGame;
