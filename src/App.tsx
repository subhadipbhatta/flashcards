import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import StudySessionPage from './pages/StudySessionPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study/category" element={<CategorySelectionPage />} />
        <Route path="/study/:category" element={<StudySessionPage />} />
        <Route path="/quiz/category" element={<CategorySelectionPage />} />
        <Route path="/stats" element={<div>Statistics Page (Coming in Phase 5)</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
