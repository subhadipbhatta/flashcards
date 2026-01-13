import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-container">
        <h1 className="home-title">🇪🇸 Spanish Flashcards</h1>
        <p className="home-subtitle">Learn Spanish vocabulary with interactive flashcards</p>
        
        <div className="home-buttons">
          <button 
            className="home-button study-button"
            onClick={() => navigate('/study/category')}
          >
            📚 Study Mode
          </button>
          
          <button 
            className="home-button quiz-button"
            onClick={() => navigate('/quiz/category')}
          >
            ✏️ Quiz Mode
          </button>
          
          <button 
            className="home-button stats-button"
            onClick={() => navigate('/stats')}
          >
            📊 Stats Page
          </button>
        </div>
      </div>
    </div>
  );
}
