import React, { useState } from 'react';
import { DOCTORS } from '../constants';
import { CalendarDaysIcon } from './Icons';

const BookAppointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    doctor: '',
    date: '',
    time: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(formData.name && formData.email && formData.doctor && formData.date && formData.time){
        setIsSubmitted(true);
    } else {
        alert('Please fill out all fields.');
    }
  };

  if (isSubmitted) {
    return (
        <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl text-center">
                 <CalendarDaysIcon className="mx-auto h-12 w-12 text-brand-teal" />
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Appointment Requested!</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
                    Thank you, <span className="font-semibold text-brand-blue dark:text-brand-teal">{formData.name}</span>. Your request to see <span className="font-semibold text-brand-blue dark:text-brand-teal">{formData.doctor}</span> on <span className="font-semibold text-brand-blue dark:text-brand-teal">{formData.date}</span> in the {formData.time} has been received.
                </p>
                <p className="mt-4 text-gray-600 dark:text-slate-300">
                    We will contact you shortly at <span className="font-semibold text-brand-blue dark:text-brand-teal">{formData.email}</span> to confirm the details.
                </p>
                 <div className="mt-10">
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="rounded-md bg-brand-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                    >
                        Book Another Appointment
                    </button>
                </div>
            </div>
        </div>
    )
  }

  return (
    <div className="bg-brand-blue-light dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-blue dark:text-brand-teal">Schedule a Visit</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Book an Appointment
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Fill out the form below to request an appointment with one of our specialists. Our team will contact you to confirm your visit.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
            <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">Full Name</label>
                    <div className="mt-2.5">
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:focus:ring-brand-teal" />
                    </div>
                </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">Email Address</label>
                    <div className="mt-2.5">
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:focus:ring-brand-teal" />
                    </div>
                </div>
                <div>
                    <label htmlFor="doctor" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">Select Doctor</label>
                    <div className="mt-2.5">
                        <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:focus:ring-brand-teal">
                            <option value="" disabled>-- Please choose a doctor --</option>
                            {DOCTORS.map(doc => <option key={doc.id} value={doc.name}>{doc.name} - {doc.specialty}</option>)}
                        </select>
                    </div>
                </div>
                 <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="date" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">Preferred Date</label>
                        <div className="mt-2.5">
                            <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:focus:ring-brand-teal" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="time" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">Preferred Time</label>
                         <div className="mt-2.5">
                            <select id="time" name="time" value={formData.time} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:focus:ring-brand-teal">
                                <option value="" disabled>-- Select a time --</option>
                                <option value="morning">Morning (9am - 12pm)</option>
                                <option value="afternoon">Afternoon (1pm - 5pm)</option>
                            </select>
                        </div>
                    </div>
                 </div>
                 <div className="mt-10">
                    <button type="submit" className="block w-full rounded-md bg-brand-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue">Request Appointment</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;