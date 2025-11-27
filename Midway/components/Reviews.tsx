import React from 'react';
import { REVIEWS } from '../constants';
import { QuoteIcon, StarIcon } from './Icons';

const Reviews: React.FC = () => {
  const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-blue dark:text-brand-teal">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What Our Patients Are Saying
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Read stories from patients who have experienced our compassionate care firsthand.
          </p>
        </div>

        {/* Display Reviews */}
        <div className="mx-auto mt-16 flow-root max-w-4xl sm:mt-20">
          <div className="-my-12 divide-y divide-gray-200 dark:divide-slate-800">
            {REVIEWS.map((review) => (
              <div key={review.id} className="py-12">
                <div className="flex items-center gap-x-4">
                  <img className="h-12 w-12 rounded-full bg-gray-50" src={review.imageUrl} alt="" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{review.name}</h4>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <figure className="relative mt-6">
                  <QuoteIcon className="absolute -left-3 -top-3 h-8 w-8 text-gray-200 dark:text-slate-700" aria-hidden="true" />
                  <blockquote className="text-gray-600 dark:text-slate-300 italic pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                    <p>“{review.comment}”</p>
                  </blockquote>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;