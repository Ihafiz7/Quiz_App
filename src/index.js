import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './ClickContext'
import App from './App';
import Topic from './Pages/Topic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <Routes>
          <Route path='/' element={ <App />} />
          <Route path="/topic/:topic" element={<Topic />} />
        </Routes>
        </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

