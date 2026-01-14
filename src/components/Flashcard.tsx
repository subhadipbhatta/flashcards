import { useState } from 'react';
import type { Flashcard as FlashcardType } from '../data/flashcards';
import './Flashcard.css';

interface FlashcardProps {
  card: FlashcardType;
  onAnswer: (isCorrect: boolean) => void;
}

export default function Flashcard({ card, onAnswer }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleFlip = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      setShowButtons(true);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    onAnswer(isCorrect);
    // Reset for next card
    setIsFlipped(false);
    setShowButtons(false);
  };

  return (
    <div className="flashcard-container">
      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flashcard-front">
          <div className="flashcard-content">
            <p className="flashcard-label">Spanish</p>
            <h2 className="flashcard-text">{card.spanish}</h2>
            <p className="flashcard-hint">Click to flip</p>
          </div>
        </div>
        <div className="flashcard-back">
          <div className="flashcard-content">
            <p className="flashcard-label">English</p>
            <h2 className="flashcard-text">{card.english}</h2>
          </div>
        </div>
      </div>
      
      {showButtons && (
        <div className="answer-buttons">
          <button
            className="answer-button correct-button"
            onClick={() => handleAnswer(true)}
          >
            ✅ I got it right
          </button>
          <button
            className="answer-button incorrect-button"
            onClick={() => handleAnswer(false)}
          >
            ❌ I got it wrong
          </button>
        </div>
      )}
    </div>
  );
}
