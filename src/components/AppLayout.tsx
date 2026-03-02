import React from 'react';
import Navbar from './Navbar';
import TransactAtScale from './TransactAtScale';
import Hero from './Hero';
import Partners from './Partners';
import WhatWeDo from './WhatWeDo';
import Products from './Products';
import Stats from './Stats';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className='overflow-hidden'>
        <TransactAtScale />
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
