import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import About from './routes/About.js';
import Default from './components/Detail.js';
import Navigation from './components/Navigation.js';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/movie/:id' element={<Default />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
