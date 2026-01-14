import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Flashcard } from '../data/flashcards';

interface StudyContextType {
  incorrectCards: Flashcard[];
  addIncorrectCard: (card: Flashcard) => void;
  clearIncorrectCards: () => void;
  getIncorrectCardsByCategory: (category: string) => Flashcard[];
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

export function StudyProvider({ children }: { children: ReactNode }) {
  const [incorrectCards, setIncorrectCards] = useState<Flashcard[]>([]);

  const addIncorrectCard = (card: Flashcard) => {
    setIncorrectCards(prev => {
      // Avoid duplicates
      if (!prev.find(c => c.spanish === card.spanish && c.category === card.category)) {
        return [...prev, card];
      }
      return prev;
    });
  };

  const clearIncorrectCards = () => {
    setIncorrectCards([]);
  };

  const getIncorrectCardsByCategory = (category: string) => {
    return incorrectCards.filter(card => card.category === category);
  };

  return (
    <StudyContext.Provider
      value={{
        incorrectCards,
        addIncorrectCard,
        clearIncorrectCards,
        getIncorrectCardsByCategory,
      }}
    >
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  const context = useContext(StudyContext);
  if (context === undefined) {
    throw new Error('useStudy must be used within a StudyProvider');
  }
  return context;
}
