import React from 'react';
import { FaUser, FaHourglassHalf, FaSearch, FaEye, FaFlagCheckered } from 'react-icons/fa';

const Game = () => {
  return (
    <div className="game-container">
      <h1 className="game-title">Hide and Seek</h1>
      <div className="step">
        <FaUser className="step-icon" />
        <h2 className="step-title">1. Choose the Seeker</h2>
        <p className="step-description">One of the kids gets to be the seeker, and the rest of the kids will hide.</p>
      </div>
      <div className="step">
        <FaHourglassHalf className="step-icon" />
        <h2 className="step-title">2. Counting</h2>
        <p className="step-description">The seeker closes their eyes and starts counting out loud, like "1, 2, 3..." up to 10 or 20, while the others find their hiding spots.</p>
      </div>
      <div className="step">
        <FaSearch className="step-icon" />
        <h2 className="step-title">3. Hiding</h2>
        <p className="step-description">All the other kids run and hide in different places where the seeker can’t see them.</p>
      </div>
      <div className="step">
        <FaEye className="step-icon" />
        <h2 className="step-title">4. Seeking</h2>
        <p className="step-description">When the seeker finishes counting, they open their eyes and start looking for the kids who are hiding.</p>
      </div>
      <div className="step">
        <FaFlagCheckered className="step-icon" />
        <h2 className="step-title">5. Playing Until the End</h2>
        <p className="step-description">The game keeps going until the seeker finds everyone. The first kid found will be the next seeker!</p>
      </div>
      <div className="step">
        <FaFlagCheckered className="step-icon" />
        <h2 className="step-title">6. Starting a New Round</h2>
        <p className="step-description">When all the kids are found, it’s time for a new round with a new seeker.</p>
      </div>
    </div>
  );
}

export default Game;
