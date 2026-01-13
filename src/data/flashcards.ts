export interface Flashcard {
  category: "animals" | "food" | "verbs";
  spanish: string;
  english: string;
  quiz: {
    type: "multiple-choice" | "fill-in-the-blank";
    options?: string[];
  };
}

export const flashcards: Flashcard[] = [
  // Animals category
  {
    category: "animals",
    spanish: "el gato",
    english: "the cat",
    quiz: {
      type: "multiple-choice",
      options: ["the dog", "the house", "the cat", "the bird"]
    }
  },
  {
    category: "animals",
    spanish: "el perro",
    english: "the dog",
    quiz: {
      type: "multiple-choice",
      options: ["the cat", "the dog", "the bird", "the fish"]
    }
  },
  {
    category: "animals",
    spanish: "el pájaro",
    english: "the bird",
    quiz: {
      type: "multiple-choice",
      options: ["the cat", "the dog", "the bird", "the horse"]
    }
  },
  {
    category: "animals",
    spanish: "el caballo",
    english: "the horse",
    quiz: {
      type: "multiple-choice",
      options: ["the cat", "the horse", "the bird", "the fish"]
    }
  },
  {
    category: "animals",
    spanish: "el pez",
    english: "the fish",
    quiz: {
      type: "multiple-choice",
      options: ["the cat", "the dog", "the bird", "the fish"]
    }
  },

  // Food category
  {
    category: "food",
    spanish: "la manzana",
    english: "the apple",
    quiz: {
      type: "multiple-choice",
      options: ["the apple", "the bread", "the milk", "the cheese"]
    }
  },
  {
    category: "food",
    spanish: "el pan",
    english: "the bread",
    quiz: {
      type: "multiple-choice",
      options: ["the apple", "the bread", "the milk", "the cheese"]
    }
  },
  {
    category: "food",
    spanish: "la leche",
    english: "the milk",
    quiz: {
      type: "multiple-choice",
      options: ["the apple", "the bread", "the milk", "the cheese"]
    }
  },
  {
    category: "food",
    spanish: "el queso",
    english: "the cheese",
    quiz: {
      type: "multiple-choice",
      options: ["the apple", "the bread", "the milk", "the cheese"]
    }
  },
  {
    category: "food",
    spanish: "el arroz",
    english: "the rice",
    quiz: {
      type: "multiple-choice",
      options: ["the apple", "the bread", "the rice", "the cheese"]
    }
  },

  // Verbs category
  {
    category: "verbs",
    spanish: "comer",
    english: "to eat",
    quiz: {
      type: "multiple-choice",
      options: ["to eat", "to drink", "to sleep", "to run"]
    }
  },
  {
    category: "verbs",
    spanish: "beber",
    english: "to drink",
    quiz: {
      type: "multiple-choice",
      options: ["to eat", "to drink", "to sleep", "to run"]
    }
  },
  {
    category: "verbs",
    spanish: "dormir",
    english: "to sleep",
    quiz: {
      type: "multiple-choice",
      options: ["to eat", "to drink", "to sleep", "to run"]
    }
  },
  {
    category: "verbs",
    spanish: "correr",
    english: "to run",
    quiz: {
      type: "multiple-choice",
      options: ["to eat", "to drink", "to sleep", "to run"]
    }
  },
  {
    category: "verbs",
    spanish: "caminar",
    english: "to walk",
    quiz: {
      type: "multiple-choice",
      options: ["to eat", "to walk", "to sleep", "to run"]
    }
  }
];

export const getFlashcardsByCategory = (category: "animals" | "food" | "verbs"): Flashcard[] => {
  return flashcards.filter(card => card.category === category);
};

export const categories = ["animals", "food", "verbs"] as const;
