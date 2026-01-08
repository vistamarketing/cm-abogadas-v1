import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { Reviews } from './Reviews';
import { FAQ } from './FAQ';
import { HowWeWork } from './HowWeWork';
import { ContactForm } from './ContactForm';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <HowWeWork />
      <Reviews />
      <FAQ />
      <ContactForm />
    </>
  );
};
