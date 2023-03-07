import React, { useRef } from 'react';
import { IParallax } from '@react-spring/parallax';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { AboutMe } from '~/pages/about-me';
import { Portfolio } from '~/pages/portfolio';
import { Home } from '~/pages/home';

const App = () => {
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <PerfectScrollbar className="w-full h-full" autoHide={false}>
      <Home />
      <AboutMe />
      <Portfolio />
    </PerfectScrollbar>
  );
};

export default App;
