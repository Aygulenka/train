import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Text from './Text';
import Example from './Example';

function App() {
  return (
    <div>
      {/* Добавим навигацию с использованием компонента Link */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/text">Text</Link>
          </li>
          <li>
            <Link to="/examples">Examples</Link>
          </li>
        </ul>
      </nav>

      {/* Добавим маршруты для компонентов */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text" element={<Text />} />
        <Route path="/examples" element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;