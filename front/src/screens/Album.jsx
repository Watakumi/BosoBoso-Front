import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroContent from '../components/HeroContent';
import CardList from '../components/CardList';

export default function Album() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <HeroContent />
        <CardList />
      </main>
      <Footer />
    </React.Fragment>
  );
}
