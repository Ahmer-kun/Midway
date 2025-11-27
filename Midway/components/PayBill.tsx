import React, { useState } from 'react';
import { CreditCardIcon } from './Icons';

const PayBill: React.FC = () => {
    const [isPaid, setIsPaid] = useState(false);
    const [patientId, setPatientId] = useState('');

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        if (patientId.trim()) {
            setIsPaid(true);
        } else {
            alert('Please enter a valid Patient ID or Invoice Number.');
        }
    };

    if(isPaid) {
        return (
             <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl text-center">
                    <CreditCardIcon className="mx-auto h-12 w-12 text-brand-teal" />
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Payment Successful
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
                        Thank you for your payment. A receipt has been sent to your registered email address.
                    </p>
                     <div className="mt-10">
                        <button
                            onClick={() => setIsPaid(false)}
                            className="rounded-md bg-brand-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                        >
                            Make Another Payment
                        </button>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <CreditCardIcon className="mx-auto h-12 w-12 text-brand-blue dark:text-brand-teal" />
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Pay Your Bill Online
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
          Securely pay your hospital bill online. Please enter your Patient ID or Invoice Number to proceed.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
            <form onSubmit={handlePayment} className="space-y-6">
                <div>
                    <label htmlFor="patientId" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">Patient ID or Invoice Number</label>
                    <div className="mt-2.5">
                        <input type="text" name="patientId" id="patientId" value={patientId} onChange={(e) => setPatientId(e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:focus:ring-brand-teal" />
                    </div>
                </div>
                <div className="mt-10">
                    <button type="submit" className="block w-full rounded-md bg-brand-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue">Proceed to Payment</button>
                </div>
                <p className="text-center text-sm text-gray-500 dark:text-slate-400">
                    By clicking "Proceed to Payment", you will be redirected to our secure payment gateway. For billing questions, please call (555) 123-1001.
                </p>
            </form>
        </div>
    </div>
  );
};

export default PayBill;