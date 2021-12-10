import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import About from './routes/About.js';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
