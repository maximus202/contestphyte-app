import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import LandingPageBody from '../../components/LandingPageBody/LandingPageBody';
import Footer from '../../components/Footer/Footer';

function LandingPage() {
  return (
    <>
      <NavBar />
      <main>
        <LandingPageBody />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
