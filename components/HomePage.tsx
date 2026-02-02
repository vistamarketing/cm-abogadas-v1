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
  // Only use Tina in edit mode (when in /admin or when Tina is active)
  const isEditMode = typeof window !== 'undefined' && window.location.pathname.includes('/admin');

  let data = { page: homeData };

  // Only use useTina hook if we're in edit mode
  if (isEditMode) {
    const tinaResult = useTina({
      query: `
        query PageQuery {
          page(relativePath: "home.json") {
            ... on PageHome {
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
              services {
                badge
                title
                subtitle
                ctaText
                items {
                  id
                  title
                  description
                  icon
                }
              }
              reviews {
                badge
                title
                subtitle
                ctaText
                items {
                  author
                  date
                  rating
                  text
                  initial
                }
              }
              faq {
                title
                subtitle
                ctaText
                items {
                  question
                  answer
                }
              }
            }
          }
        }
      `,
      variables: {},
      data: { page: homeData },
    });
    data = tinaResult.data;
  }

  return (
    <>
      <Hero data={data?.page} />
      <Services data={data?.page} />
      <HowWeWork />
      <Reviews data={data?.page} />
      <FAQ data={data?.page} />
      <CTA />
    </>
  );
};
