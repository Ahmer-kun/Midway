import React from 'react';
import { BuildingIcon } from './Icons';
import { KARACHI_EMERGENCY_NUMBERS } from '../constants';

const departmentContacts = [
  { name: 'Emergency Room', phone: '(555) 123-1000' },
  { name: 'Billing Department', phone: '(555) 123-1001' },
  { name: 'Pharmacy', phone: '(555) 123-1002' },
  { name: 'Radiology', phone: '(555) 123-1003' },
  { name: 'Patient Relations', phone: '(555) 123-1004' },
  { name: 'Human Resources', phone: '(555) 123-1005' },
];

const Contact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-blue dark:text-brand-teal">Get In Touch</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            We're Here to Help
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Whether you have a question, need assistance, or want to provide feedback, our team is ready to assist you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Contact info & Departments */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Address</h3>
              <p className="mt-2 text-gray-600 dark:text-slate-400">
                Midway Hospital<br />
                123 Health Street<br />
                Wellness City, USA 12345
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
              <p className="mt-2 text-gray-600 dark:text-slate-400">
                <span className="font-medium">Main Line:</span> (555) 123-4567<br />
                <span className="font-medium">Appointments:</span> (555) 987-6543
              </p>
            </div>
             <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Hours of Operation</h3>
              <p className="mt-2 text-gray-600 dark:text-slate-400">
                Hospital: 24/7<br />
                Visiting Hours: 10:00 AM - 8:00 PM Daily
              </p>
            </div>
             <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Department Directory</h3>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-slate-400">
                {departmentContacts.map(dept => (
                   <li key={dept.name} className="flex justify-between">
                        <span>{dept.name}</span>
                        <span className="font-medium text-gray-800 dark:text-slate-300">{dept.phone}</span>
                   </li>
                ))}
              </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Karachi Emergency Numbers</h3>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-slate-400">
                    {KARACHI_EMERGENCY_NUMBERS.map(service => (
                        <li key={service.name} className="flex justify-between">
                            <span>{service.name}</span>
                            <span className="font-medium text-gray-800 dark:text-slate-300">{service.number}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
          {/* Right Column: Visit Us */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-lg shadow-lg">
            <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-6">
                <BuildingIcon className="h-6 w-6 text-brand-blue dark:text-brand-teal"/>
                Visit Us in Person
            </h3>
            <p className="text-gray-700 dark:text-slate-300 leading-7">
                For non-urgent inquiries and personal assistance, we encourage you to visit us. Our patient relations team is available on-site to help you with your needs, provide information, and guide you through our facility.
            </p>
            <div className="mt-6 border-t border-gray-200 dark:border-slate-700 pt-6 space-y-4">
                <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Visiting Hours</h4>
                    <p className="text-gray-600 dark:text-slate-400">10:00 AM - 8:00 PM Daily</p>
                </div>
                <div>
                     <h4 className="font-semibold text-gray-900 dark:text-white">Our Location</h4>
                    <p className="text-gray-600 dark:text-slate-400">
                        123 Health Street<br />
                        Wellness City, USA 12345
                    </p>
                </div>
            </div>
            <p className="mt-6 text-sm text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/50 p-3 rounded-md">
                <strong>For medical emergencies, please call your local emergency number (e.g., Rescue 1122 for Karachi) or go to the nearest emergency room immediately.</strong>
            </p>
          </div>
        </div>
        
        <div className="mt-24">
            <h3 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">Find Us on the Map</h3>
             <div className="mt-8 aspect-video bg-gray-200 dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.629323139364!2d-73.98785368459395!3d40.74844097932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1678886975734!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Midway Hospital Location"
              ></iframe>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;