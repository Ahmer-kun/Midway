import type { Doctor, Service, Review } from './types';
import { StethoscopeIcon, HeartPulseIcon, BrainIcon, BoneIcon, BabyIcon, LungsIcon, ActivityIcon } from './components/Icons';

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Emily Carter',
    specialty: 'Cardiology',
    imageUrl: 'https://picsum.photos/seed/doc1/400/400',
    bio: 'Dr. Carter is a board-certified cardiologist with over 15 years of experience in treating heart conditions and promoting cardiovascular wellness.'
  },
  {
    id: 2,
    name: 'Dr. Ben Adams',
    specialty: 'Neurology',
    imageUrl: 'https://picsum.photos/seed/doc2/400/400',
    bio: 'Specializing in brain and nervous system disorders, Dr. Adams is a leader in neurological research and patient care.'
  },
  {
    id: 3,
    name: 'Dr. Sarah Chen',
    specialty: 'Orthopedics',
    imageUrl: 'https://picsum.photos/seed/doc3/400/400',
    bio: 'Dr. Chen focuses on musculoskeletal injuries and conditions, helping patients regain mobility and live pain-free.'
  },
  {
    id: 4,
    name: 'Dr. Marcus Rodriguez',
    specialty: 'Pediatrics',
    imageUrl: 'https://picsum.photos/seed/doc4/400/400',
    bio: 'With a passion for children\'s health, Dr. Rodriguez provides comprehensive care for infants, children, and adolescents.'
  },
  {
    id: 5,
    name: 'Dr. Linda Harris',
    specialty: 'Pulmonology',
    imageUrl: 'https://picsum.photos/seed/doc5/400/400',
    bio: 'Dr. Harris is an expert in respiratory diseases, including asthma, COPD, and lung cancer, dedicated to helping her patients breathe easier.'
  },
  {
    id: 6,
    name: 'Dr. David Lee',
    specialty: 'Cardiology',
    imageUrl: 'https://picsum.photos/seed/doc6/400/400',
    bio: 'Dr. Lee is a renowned cardiologist, focusing on preventative care and advanced interventional procedures for complex heart issues.'
  }
];

export const SERVICES: Service[] = [
  {
    name: 'General Care',
    description: 'Comprehensive primary care services for all ages, focusing on prevention and wellness.',
    icon: StethoscopeIcon,
  },
  {
    name: 'Cardiology',
    description: 'Advanced diagnosis and treatment for heart and vascular conditions by top specialists.',
    icon: HeartPulseIcon,
  },
  {
    name: 'Neurology',
    description: 'Expert care for disorders of the brain, spinal cord, and nervous system.',
    icon: BrainIcon,
  },
  {
    name: 'Emergency Care',
    description: 'Providing immediate medical attention for urgent and life-threatening conditions 24/7.',
    icon: ActivityIcon,
  },
  {
    name: 'Orthopedics',
    description: 'Specialized treatment for bones, joints, ligaments, tendons, and muscles.',
    icon: BoneIcon,
  },
  {
    name: 'Pediatrics',
    description: 'Dedicated and compassionate healthcare services for infants, children, and teens.',
    icon: BabyIcon,
  },
  {
    name: 'Pulmonology',
    description: 'State-of-the-art care for respiratory conditions and lung diseases.',
    icon: LungsIcon,
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Sarah L.',
    imageUrl: 'https://picsum.photos/seed/rev1/100/100',
    rating: 5,
    comment: 'The care I received at Midway Hospital was exceptional. The doctors and nurses were incredibly attentive and made me feel comfortable throughout my stay. Highly recommend!'
  },
  {
    id: 2,
    name: 'Michael B.',
    imageUrl: 'https://picsum.photos/seed/rev2/100/100',
    rating: 5,
    comment: 'Dr. Carter is a fantastic cardiologist. She took the time to explain everything clearly and answered all my questions. The entire cardiology department is top-notch.'
  },
  {
    id: 3,
    name: 'Jessica P.',
    imageUrl: 'https://picsum.photos/seed/rev3/100/100',
    rating: 4,
    comment: 'My son was treated in the pediatrics unit, and the staff were wonderful with him. They made a scary experience much more manageable for our family. The facility was also very clean.'
  },
];

export const KARACHI_EMERGENCY_NUMBERS = [
  { name: 'Police (Madadgar)', number: '15' },
  { name: 'Rangers', number: '1101' },
  { name: 'Fire Brigade', number: '16' },
  { name: 'Bomb Disposal', number: '111-222-292' },
  { name: 'Edhi Ambulance', number: '115' },
  { name: 'Chhipa Ambulance', number: '1020' },
  { name: 'K-Electric (Power)', number: '118' },
  { name: 'Sui Southern Gas', number: '1199' },
];