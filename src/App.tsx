import React from 'react';
import { Navigation } from '~/components/Navigation';
import { Container } from '~/components/Container';
import { Topbar } from '~/components/Topbar';

const App = () => {
  return (
    <>
      <Topbar />
      <section className="flex flex-column">
        <Navigation />
        <Container />
      </section>
    </>
  );
};

export default App;
