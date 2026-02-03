import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Partners from './Partners';
import WhatWeDo from './WhatWeDo';
import Products from './Products';
import Stats from './Stats';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <WhatWeDo />
        <Products />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
