import React from 'react';
import { HeartPulseIcon } from './Icons';

const OurMission: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <HeartPulseIcon className="mx-auto h-12 w-12 text-brand-blue dark:text-brand-teal" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Mission & Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
            To provide exceptional healthcare with compassion and respect, advancing medicine through research and education.
          </p>
        </div>
        <div className="mt-16 space-y-12">
            <div>
              <h3 className="text-2xl font-semibold leading-7 text-brand-blue dark:text-brand-teal">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-700 dark:text-slate-300">
                The mission of Midway Hospital is to improve the health and well-being of the diverse communities we serve. We are committed to providing patient-centered care that is safe, effective, and accessible to all. Through innovation, collaboration, and a dedication to excellence, we strive to be a leader in healthcare delivery and a trusted partner in our community's health.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold leading-7 text-brand-blue dark:text-brand-teal">Our Core Values</h3>
              <ul className="mt-4 space-y-4 text-lg text-gray-700 dark:text-slate-300">
                <li><strong className="font-semibold text-gray-900 dark:text-white">Compassion:</strong> We treat everyone with kindness, empathy, and dignity.</li>
                <li><strong className="font-semibold text-gray-900 dark:text-white">Excellence:</strong> We are dedicated to the highest standards of quality and safety in all we do.</li>
                <li><strong className="font-semibold text-gray-900 dark:text-white">Integrity:</strong> We act with honesty, transparency, and accountability.</li>
                <li><strong className="font-semibold text-gray-900 dark:text-white">Teamwork:</strong> We collaborate effectively with our patients, families, and colleagues.</li>
                <li><strong className="font-semibold text-gray-900 dark:text-white">Innovation:</strong> We embrace new ideas and technologies to advance medical care.</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;