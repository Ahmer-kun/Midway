import React from 'react';

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
  bio: string;
}

export interface Service {
  name: string;
  description: string;
  // FIX: Import React to use React types like React.FC.
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'loading';
  content: string;
}

export interface Review {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  comment: string;
}

export type View = 'home' | 'doctors' | 'services' | 'health-assistant' | 'contact' | 'mission' | 'reviews';