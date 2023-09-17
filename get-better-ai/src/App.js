import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormatterPage from './pages/FormatterPage'; // Путь к файлу FormatterPage.js

function App() {
  return (
      <Routes>
        <Route path="/" element={<FormatterPage />} />
      </Routes>
  );
}

export default App;