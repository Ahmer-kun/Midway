import React, { useState, useMemo } from 'react';
import { DOCTORS } from '../constants';
import DoctorCard from './DoctorCard';

const FindDoctor: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('All');

  const specialties = useMemo(() => ['All', ...new Set(DOCTORS.map(doc => doc.specialty))], []);

  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = specialty === 'All' || doctor.specialty === specialty;
      return matchesSearch && matchesSpecialty;
    });
  }, [searchTerm, specialty]);

  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Find Your Doctor</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Search our directory of world-class physicians to find the right specialist for your needs.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Search by name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue dark:bg-slate-800 dark:border-slate-700 dark:text-white"
          />
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white"
          >
            {specialties.map(spec => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-slate-400 col-span-full">No doctors found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;