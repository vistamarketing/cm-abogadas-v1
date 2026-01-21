import React from 'react';
import { useTina } from "tinacms/dist/react";
import { Hero } from './Hero';
import { Services } from './Services';
import { Reviews } from './Reviews';
import { FAQ } from './FAQ';
import { HowWeWork } from './HowWeWork';
import { CTA } from './CTA';
import homeData from "../content/pages/home.json";

export const HomePage: React.FC = () => {
  const { data } = useTina({
    query: `
      query PageQuery {
        page(relativePath: "home.json") {
          hero {
            badge
            title
            subtitle
            ctaPrimary
            ctaSecondary
            quote
            features {
              text
            }
            images
          }
        }
      }
    `,
    variables: {},
    data: { page: homeData },
  });

  return (
    <>
      <Hero data={data?.page} />
      <Services />
      <HowWeWork />
      <Reviews />
      <FAQ />
      <CTA />
    </>
  );
};
