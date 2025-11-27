import React, { useState } from 'react';
import { UserCircleIcon } from './Icons';

const PatientPortal: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // This is a mock login. In a real application, you would call an authentication service.
    if (username && password) {
      alert(`Login successful for ${username}! (This is a demo)`);
      setUsername('');
      setPassword('');
    } else {
      setError('Please enter both username and password.');
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-md px-6 lg:px-8">
        <div className="text-center">
            <UserCircleIcon className="mx-auto h-12 w-12 text-brand-blue dark:text-brand-teal" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Patient Portal
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
                Access your medical records, test results, and communicate with your care team securely.
            </p>
        </div>

        <div className="mt-16">
            <form onSubmit={handleLogin} className="space-y-6">
                 <div>
                    <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">Username</label>
                    <div className="mt-2.5">
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            autoComplete='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:focus:ring-brand-teal" />
                    </div>
                </div>
                 <div>
                    <label htmlFor="password" aria-label="Password for your account" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">Password</label>
                    <div className="mt-2.5">
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            autoComplete='current-password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:focus:ring-brand-teal" />
                    </div>
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}
                
                 <div className="mt-10">
                    <button type="submit" className="block w-full rounded-md bg-brand-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue">Sign In</button>
                </div>

                <div className="text-center mt-4">
                    <a href="#" className="text-sm font-semibold text-brand-blue hover:text-blue-700 dark:text-brand-teal dark:hover:text-teal-400">
                        Forgot password?
                    </a>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;
