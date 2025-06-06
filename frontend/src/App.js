import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import LandingPage from './components/LandingPage';
import AIChat from './components/AIChat';
import './App.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
        <AIChat />
      </div>
    </I18nextProvider>
  );
}

export default App;