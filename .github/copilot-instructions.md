# GitHub Copilot Custom Instructions

This file provides custom instructions for GitHub Copilot when working on this flashcards application.

## Project Context

This is a Spanish Flashcards web application built with React, TypeScript, and Vite. The app helps users learn Spanish vocabulary through interactive flashcards.

## Code Style Guidelines

### TypeScript/React
- Use functional components with TypeScript
- Prefer React hooks over class components
- Use CSS Modules for component styling
- Follow the existing file structure:
  - Components in `src/components/`
  - Pages in `src/pages/`
  - Data in `src/data/`

### Naming Conventions
- Components: PascalCase (e.g., `FlashcardComponent.tsx`)
- Files: PascalCase for components, camelCase for utilities
- CSS Modules: ComponentName.module.css
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE
- Interfaces/Types: PascalCase with 'I' prefix for interfaces (e.g., `IFlashcard`)

### Testing
- Write unit tests for components
- Test user interactions and state changes
- Mock external dependencies

## Domain Knowledge

### Flashcard Structure
Each flashcard contains:
- `category`: The category (animals, food, verbs)
- `spanish`: Spanish word/phrase
- `english`: English translation
- `quiz`: Quiz configuration with options

### Features
- Study Mode: Flip cards to reveal translations
- Quiz Mode: Multiple choice and fill-in-the-blank
- Statistics: Track learning progress
- Redo Mode: Review incorrectly answered cards

## Best Practices for This Project

1. **State Management**: Use React hooks (useState, useReducer) for local state
2. **Routing**: Use React Router DOM for navigation
3. **Data Storage**: Static TypeScript files (no backend)
4. **Performance**: Optimize re-renders with React.memo and useMemo when needed
5. **Accessibility**: Include ARIA labels and keyboard navigation
6. **Responsive Design**: Ensure mobile-friendly layouts

## When Adding New Features

1. Follow the existing component structure
2. Create corresponding CSS modules for styling
3. Update routing in `App.tsx` if adding new pages
4. Add TypeScript types/interfaces as needed
5. Consider the educational purpose of the app

## Avoid

- Adding unnecessary dependencies
- Creating backend/server code (this is frontend-only)
- Overcomplicating state management (keep it simple)
- Breaking existing functionality
- Ignoring TypeScript type safety
