import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFlashcardsByCategory } from '../data/flashcards';
import type { Flashcard } from '../data/flashcards';
import FlashcardComponent from '../components/Flashcard';
import { useStudy } from '../context/StudyContext';
import './StudySessionPage.css';

export default function StudySessionPage() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { addIncorrectCard } = useStudy();
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionIncorrectCards, setSessionIncorrectCards] = useState<Flashcard[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (category && ['animals', 'food', 'verbs'].includes(category)) {
      const categoryCards = getFlashcardsByCategory(category as 'animals' | 'food' | 'verbs');
      setCards(categoryCards);
    } else {
      navigate('/study/category');
    }
  }, [category, navigate]);

  const handleAnswer = (isCorrect: boolean) => {
    const currentCard = cards[currentIndex];
    
    if (!isCorrect) {
      // Add to session incorrect cards
      setSessionIncorrectCards(prev => {
        if (!prev.find(card => card.spanish === currentCard.spanish)) {
          return [...prev, currentCard];
        }
        return prev;
      });
      // Also add to global study context
      addIncorrectCard(currentCard);
    }

    // Move to next card
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // All cards reviewed
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSessionIncorrectCards([]);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <div className="study-session-page">
        <div className="completion-container">
          <h1 className="completion-title">🎉 Study Session Complete!</h1>
          <p className="completion-message">
            You've reviewed all {cards.length} cards in the {category} category.
          </p>
          {sessionIncorrectCards.length > 0 && (
            <div className="incorrect-summary">
              <p className="incorrect-count">
                Cards marked as incorrect: {sessionIncorrectCards.length}
              </p>
            </div>
          )}
          <div className="completion-buttons">
            <button className="action-button" onClick={handleRestart}>
              🔄 Study Again
            </button>
            <button 
              className="action-button"
              onClick={() => navigate('/study/category')}
            >
              📚 Choose Another Category
            </button>
            <button 
              className="action-button"
              onClick={() => navigate('/')}
            >
              🏠 Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="study-session-page">
        <div className="loading-container">
          <p>Loading cards...</p>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];
  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="study-session-page">
      <div className="study-header">
        <button 
          className="back-button"
          onClick={() => navigate('/study/category')}
        >
          ← Back
        </button>
        <div className="progress-info">
          <p>Card {currentIndex + 1} of {cards.length}</p>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="study-content">
        <FlashcardComponent 
          card={currentCard} 
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}
