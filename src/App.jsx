import React, { useState } from 'react';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import HowWeWork from './pages/HowWeWork';
import Projects from './pages/Projects';
import Contact from './container/Contact';
import './app.scss';
import AnimatedCursor from 'react-animated-cursor';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <AnimatedCursor
        innerSize={10}
        outerSize={8}
        color='193, 11, 111'
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={5}
      />
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} exact />
      <Route path='/how-we-work' component={HowWeWork} exact />
      <Route path='/projects' component={Projects} exact />
      <Route path='/contact' component={Contact} exact />
    </div>
  );
};

export default App;
