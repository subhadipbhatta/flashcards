import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study/category" element={<div>Category Selection for Study (Coming in Phase 2)</div>} />
        <Route path="/quiz/category" element={<div>Category Selection for Quiz (Coming in Phase 4)</div>} />
        <Route path="/stats" element={<div>Statistics Page (Coming in Phase 5)</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
