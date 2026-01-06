import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { Reviews } from './Reviews';
import { FAQ } from './FAQ';
import { Contact } from './Contact';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  );
};
