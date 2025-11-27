import React from 'react';
import { BriefcaseIcon } from './Icons';

const jobOpenings = [
  { title: 'Registered Nurse (RN) - Cardiology', location: 'Wellness City, USA', type: 'Full-time' },
  { title: 'Medical Assistant - Pediatrics', location: 'Wellness City, USA', type: 'Full-time' },
  { title: 'Radiologic Technologist', location: 'Wellness City, USA', type: 'Part-time' },
  { title: 'Patient Services Coordinator', location: 'Wellness City, USA', type: 'Full-time' },
];

const Careers: React.FC = () => {
  return (
    <div className="bg-brand-blue-light dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <BriefcaseIcon className="mx-auto h-12 w-12 text-brand-blue dark:text-brand-teal" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Join Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Explore rewarding career opportunities at Midway Hospital and become part of a team dedicated to making a difference.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Current Openings</h3>
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h4 className="text-xl font-semibold text-brand-blue dark:text-white">{job.title}</h4>
                  <p className="text-gray-600 dark:text-slate-400 mt-1">{job.location} &bull; {job.type}</p>
                </div>
                <button className="mt-4 sm:mt-0 rounded-md bg-brand-teal px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;