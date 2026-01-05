import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type PageView = 'home' | 'all-services' | 'about' | 'contact';

export interface GuideResponse {
  analysis: string;
  suggestedVisas: string[];
  nextSteps: string[];
  disclaimer: string;
}