import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router basename='/app'>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/page-one' element= {<PageOne />} />
        <Route path='/page-two' element= {<PageTwo />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
