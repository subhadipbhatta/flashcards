# Spanish Flashcards App

A front-end-only flashcards web application to help users learn Spanish vocabulary.

## Tech Stack

- **Frontend Framework:** React (with Vite + TypeScript)
- **Data Storage:** Static TypeScript files (no backend)
- **State Management:** React hooks (useState, useReducer)
- **Routing:** React Router DOM
- **Styling:** CSS Modules

## Project Structure

```
app/
├── src/
│   ├── components/       # Reusable components
│   ├── data/            # Static flashcard data
│   │   └── flashcards.ts
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   └── HomePage.css
│   ├── App.tsx          # Main app with routing
│   └── main.tsx         # Entry point
├── package.json
└── vite.config.ts
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the app at http://localhost:5173

### Build

```bash
npm run build
```

## Phase 1 Status: ✅ COMPLETE

- ✅ Vite + React + TypeScript project initialized
- ✅ File structure created (components, data, pages)
- ✅ Flashcard data: 15 cards across 3 categories (animals, food, verbs)
- ✅ Home Page with navigation buttons (Study Mode, Quiz Mode, Stats Page)
- ✅ Routing configured

## Features (Planned)

- **Phase 2:** Flashcard Study Mode
- **Phase 3:** Redo Mode (repeat wrong cards)
- **Phase 4:** Quiz Mode (multiple choice & fill-in-the-blank)
- **Phase 5:** Statistics Tracking

## Data Format

Each flashcard has:
- `category`: "animals" | "food" | "verbs"
- `spanish`: Spanish word/phrase
- `english`: English translation
- `quiz`: Quiz configuration with options
