import { useNavigate, useLocation } from 'react-router-dom';
import { categories } from '../data/flashcards';
import './CategorySelectionPage.css';

export default function CategorySelectionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine mode from path: /study/category or /quiz/category
  const mode = location.pathname.includes('/study') ? 'study' : 'quiz';

  const handleCategorySelect = (category: string) => {
    if (mode === 'study') {
      navigate(`/study/${category}`);
    } else {
      navigate(`/quiz/${category}`);
    }
  };

  const categoryLabels: Record<string, string> = {
    animals: '🐾 Animals',
    food: '🍎 Food',
    verbs: '🏃 Verbs'
  };

  return (
    <div className="category-selection-page">
      <div className="category-container">
        <h1 className="category-title">
          {mode === 'study' ? '📚 Study Mode' : '✏️ Quiz Mode'}
        </h1>
        <p className="category-subtitle">Select a category to begin</p>
        
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className="category-button"
              onClick={() => handleCategorySelect(category)}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
        
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
