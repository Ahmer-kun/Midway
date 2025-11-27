import React from 'react';
import type { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <article className="flex flex-col items-start justify-between p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800/50 dark:hover:bg-slate-800">
      <div className="flex items-center gap-x-4">
        <img src={doctor.imageUrl} alt={`Photo of ${doctor.name}`} className="h-24 w-24 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900 text-lg dark:text-white">{doctor.name}</p>
          <p className="text-brand-teal font-medium">{doctor.specialty}</p>
        </div>
      </div>
      <div className="group relative mt-4">
        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-300">{doctor.bio}</p>
      </div>
    </article>
  );
};

export default DoctorCard;