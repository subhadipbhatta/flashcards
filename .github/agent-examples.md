# Custom Agent Examples

This file provides examples of how to configure and use custom agents for different development scenarios in this flashcards project.

## Example 1: Feature Development Agent

**Scenario**: Adding a new quiz feature

**Instructions**:
```markdown
You are a React developer working on a Spanish flashcards application.

Context:
- Project uses React, TypeScript, and Vite
- Components are in src/components/
- Use CSS Modules for styling
- Follow functional component patterns with hooks

Task: Create a new quiz component
Requirements:
1. Display multiple choice options
2. Handle answer selection
3. Show correct/incorrect feedback
4. Track score
5. Follow existing component patterns

Code Style:
- Use TypeScript interfaces for props
- Name: QuizComponent.tsx
- Styling: QuizComponent.module.css
- State: React hooks (useState)
```

**Expected Output**:
```typescript
import React, { useState } from 'react';
import styles from './QuizComponent.module.css';

interface IQuizOption {
  text: string;
  isCorrect: boolean;
}

interface IQuizComponentProps {
  question: string;
  options: IQuizOption[];
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizComponent: React.FC<IQuizComponentProps> = ({
  question,
  options,
  onAnswer
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    setShowFeedback(true);
    onAnswer(options[index].isCorrect);
  };

  return (
    <div className={styles.quizContainer}>
      <h2 className={styles.question}>{question}</h2>
      <div className={styles.options}>
        {options.map((option, index) => (
          <button
            key={index}
            className={`${styles.option} ${
              selectedOption === index ? styles.selected : ''
            }`}
            onClick={() => handleOptionClick(index)}
            disabled={showFeedback}
          >
            {option.text}
          </button>
        ))}
      </div>
      {showFeedback && selectedOption !== null && (
        <div
          className={
            options[selectedOption].isCorrect
              ? styles.correct
              : styles.incorrect
          }
        >
          {options[selectedOption].isCorrect ? '✓ Correct!' : '✗ Incorrect'}
        </div>
      )}
    </div>
  );
};
```

## Example 2: Testing Agent

**Scenario**: Writing tests for flashcard component

**Instructions**:
```markdown
You are writing unit tests for a React component in a flashcards application.

Context:
- Using React Testing Library
- Test user interactions and state changes
- Mock external dependencies
- Follow AAA pattern (Arrange, Act, Assert)

Component to test: FlashcardComponent
Features:
- Displays Spanish word initially
- Shows English translation when flipped
- Has flip button
- Emits events for right/wrong answers

Test Requirements:
1. Renders with Spanish word visible
2. Flips to show English translation
3. Handles right/wrong button clicks
4. Maintains flip state correctly
```

**Expected Output**:
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { FlashcardComponent } from './FlashcardComponent';

describe('FlashcardComponent', () => {
  const mockFlashcard = {
    spanish: 'perro',
    english: 'dog',
    category: 'animals'
  };

  const mockOnRight = jest.fn();
  const mockOnWrong = jest.fn();

  beforeEach(() => {
    mockOnRight.mockClear();
    mockOnWrong.mockClear();
  });

  it('should render Spanish word initially', () => {
    render(
      <FlashcardComponent
        flashcard={mockFlashcard}
        onRight={mockOnRight}
        onWrong={mockOnWrong}
      />
    );
    
    expect(screen.getByText('perro')).toBeInTheDocument();
    expect(screen.queryByText('dog')).not.toBeInTheDocument();
  });

  it('should show English translation when flipped', () => {
    render(
      <FlashcardComponent
        flashcard={mockFlashcard}
        onRight={mockOnRight}
        onWrong={mockOnWrong}
      />
    );
    
    const flipButton = screen.getByText('Flip');
    fireEvent.click(flipButton);
    
    expect(screen.getByText('dog')).toBeInTheDocument();
  });

  it('should call onRight when right button is clicked', () => {
    render(
      <FlashcardComponent
        flashcard={mockFlashcard}
        onRight={mockOnRight}
        onWrong={mockOnWrong}
      />
    );
    
    const rightButton = screen.getByText('Right');
    fireEvent.click(rightButton);
    
    expect(mockOnRight).toHaveBeenCalledTimes(1);
  });

  it('should call onWrong when wrong button is clicked', () => {
    render(
      <FlashcardComponent
        flashcard={mockFlashcard}
        onRight={mockOnRight}
        onWrong={mockOnWrong}
      />
    );
    
    const wrongButton = screen.getByText('Wrong');
    fireEvent.click(wrongButton);
    
    expect(mockOnWrong).toHaveBeenCalledTimes(1);
  });
});
```

## Example 3: Data Structure Agent

**Scenario**: Adding new flashcard data

**Instructions**:
```markdown
You are managing flashcard data for a Spanish learning application.

Context:
- Data stored in src/data/flashcards.ts
- Each card has: category, spanish, english, quiz options
- Categories: animals, food, verbs
- Quiz has 4 options (1 correct, 3 incorrect)

Task: Add 5 new flashcards for "colors" category

Requirements:
1. Follow existing data structure
2. Include quiz configuration
3. Ensure quiz options are realistic
4. Add TypeScript types if needed
```

**Expected Output**:
```typescript
export interface IFlashcard {
  category: 'animals' | 'food' | 'verbs' | 'colors';
  spanish: string;
  english: string;
  quiz: {
    type: 'multiple_choice';
    options: string[];
    correctIndex: number;
  };
}

export const flashcards: IFlashcard[] = [
  // ... existing flashcards ...
  
  // Colors
  {
    category: 'colors',
    spanish: 'rojo',
    english: 'red',
    quiz: {
      type: 'multiple_choice',
      options: ['red', 'blue', 'green', 'yellow'],
      correctIndex: 0
    }
  },
  {
    category: 'colors',
    spanish: 'azul',
    english: 'blue',
    quiz: {
      type: 'multiple_choice',
      options: ['red', 'blue', 'green', 'yellow'],
      correctIndex: 1
    }
  },
  {
    category: 'colors',
    spanish: 'verde',
    english: 'green',
    quiz: {
      type: 'multiple_choice',
      options: ['red', 'blue', 'green', 'yellow'],
      correctIndex: 2
    }
  },
  {
    category: 'colors',
    spanish: 'amarillo',
    english: 'yellow',
    quiz: {
      type: 'multiple_choice',
      options: ['red', 'blue', 'green', 'yellow'],
      correctIndex: 3
    }
  },
  {
    category: 'colors',
    spanish: 'negro',
    english: 'black',
    quiz: {
      type: 'multiple_choice',
      options: ['black', 'white', 'purple', 'orange'],
      correctIndex: 0
    }
  }
];
```

## Example 4: Styling Agent

**Scenario**: Creating consistent CSS for a new component

**Instructions**:
```markdown
You are styling a React component using CSS Modules.

Context:
- Project uses CSS Modules for component styling
- Follow existing color scheme and spacing
- Responsive design (mobile-first)
- Card-based UI with shadows and rounded corners

Component: StatisticsCard
Requirements:
1. Card layout with shadow
2. Heading and stat display
3. Hover effects
4. Responsive design
5. Match existing component styles
```

**Expected Output**:
```css
/* StatisticsCard.module.css */

.statisticsCard {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin: 16px 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.statisticsCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.heading {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.statValue {
  font-size: 3rem;
  font-weight: 700;
  color: #4CAF50;
  text-align: center;
  margin: 20px 0;
}

.statLabel {
  font-size: 1rem;
  color: #666;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.progressBar {
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 16px;
}

.progressFill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50 0%, #45a049 100%);
  transition: width 0.3s ease;
}

/* Responsive Design */
@media (max-width: 768px) {
  .statisticsCard {
    padding: 16px;
    margin: 12px 0;
  }

  .heading {
    font-size: 1.25rem;
  }

  .statValue {
    font-size: 2.5rem;
  }
}
```

## Example 5: Documentation Agent

**Scenario**: Documenting a new API/component

**Instructions**:
```markdown
You are writing documentation for a React component.

Context:
- Using JSDoc for inline documentation
- Include prop descriptions and examples
- Document complex logic and edge cases

Component: FlashcardDeck
Purpose: Manages a collection of flashcards with navigation

Requirements:
1. Document all props with JSDoc
2. Explain component behavior
3. Include usage example
4. Note any important considerations
```

**Expected Output**:
```typescript
/**
 * FlashcardDeck Component
 * 
 * Manages a collection of flashcards with navigation controls.
 * Tracks progress through the deck and handles answer recording.
 * 
 * @example
 * ```tsx
 * <FlashcardDeck
 *   flashcards={flashcardsData}
 *   onComplete={(stats) => console.log('Completed!', stats)}
 *   shuffle={true}
 * />
 * ```
 */

interface IFlashcardDeckProps {
  /**
   * Array of flashcards to display in the deck
   */
  flashcards: IFlashcard[];
  
  /**
   * Callback fired when user completes all flashcards
   * @param stats - Statistics object containing correct/incorrect counts
   */
  onComplete: (stats: ICompletionStats) => void;
  
  /**
   * Whether to shuffle the deck before displaying
   * @default false
   */
  shuffle?: boolean;
  
  /**
   * Whether to allow reviewing flashcards after completion
   * @default true
   */
  allowReview?: boolean;
  
  /**
   * Initial card index to start from
   * @default 0
   */
  startIndex?: number;
}

/**
 * Statistics returned when deck is completed
 */
interface ICompletionStats {
  /** Total number of cards in the deck */
  total: number;
  /** Number of correct answers */
  correct: number;
  /** Number of incorrect answers */
  incorrect: number;
  /** Time taken in seconds */
  timeSpent: number;
  /** Percentage score (0-100) */
  score: number;
}

/**
 * FlashcardDeck component implementation
 * 
 * Note: The deck automatically saves progress to localStorage
 * and can resume from the last viewed card if interrupted.
 */
export const FlashcardDeck: React.FC<IFlashcardDeckProps> = ({ ... }) => {
  // Implementation
};
```

## Using These Examples

### In Your IDE

1. **Copy the instructions** for the scenario you're working on
2. **Paste them as a comment** at the top of your file or in Copilot chat
3. **Start typing** and let Copilot generate suggestions based on the context
4. **Review and refine** the generated code

### With Copilot Chat

1. Open Copilot Chat in your IDE
2. Paste the scenario instructions
3. Ask specific questions or request code generation
4. Copilot will use the context to provide better suggestions

### Customizing Instructions

Feel free to modify these examples for your specific needs:
- Add more project-specific context
- Include additional constraints or requirements
- Specify libraries or patterns to use
- Add examples of existing code to match

## Best Practices

1. **Be Specific**: Provide clear requirements and context
2. **Include Examples**: Show existing code patterns to match
3. **Specify Constraints**: Mention what to avoid or limitations
4. **Iterate**: Refine instructions based on generated results
5. **Document**: Save successful instruction patterns for reuse

## Contributing

To add more example scenarios:
1. Identify a common development task
2. Create clear instructions with context
3. Show expected output
4. Submit a PR with the new example

---

These examples demonstrate how custom agent instructions can guide Copilot to generate code that matches your project's patterns and standards.
