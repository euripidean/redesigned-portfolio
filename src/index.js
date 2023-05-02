import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Home/Home';
import Work from './Components/WorkList/WorkList';
import Project from './Components/ProjectDetails/ProjectDetails';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:id" element={<Project />} />
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
