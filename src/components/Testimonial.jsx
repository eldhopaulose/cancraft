import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "CanCraft Studio exceeded my expectations! The customer service was outstanding, and my custom canvas print turned out beautifully. It's the perfect addition to my living room, and I've received so many compliments on it.",
    name: "Sarah L",
    location: "UAE",
    imgSrc: "https://placehold.co/100x100",
  },
  {
    quote: "I was blown away by the quality of my canvas print from CanCraft Studio. The colors are so vibrant, and it looks amazing on my wall. The ordering process was so easy, and my print arrived quickly and in perfect condition. I'll definitely be ordering more.",
    name: "James R",
    location: "UAE",
    imgSrc: "https://placehold.co/100x100",
  },
  {
    quote: "I ordered a photo collage canvas as a gift for my parents, and they absolutely loved it. The quality is top-notch, and it was so easy to create and order. Thank you, CanCraft Studio, for making such a special gift possible!",
    name: "Emily Johnson",
    location: "UAE",
    imgSrc: "https://placehold.co/100x100",
  },
  {
    quote: "The canvas print was of such high quality, it has become the centerpiece of my living room. Highly recommend CanCraft Studio!",
    name: "Michael B",
    location: "USA",
    imgSrc: "https://placehold.co/100x100",
  },
  {
    quote: "My experience with CanCraft Studio was fantastic from start to finish. The print quality is amazing and the delivery was swift.",
    name: "Anna K",
    location: "UK",
    imgSrc: "https://placehold.co/100x100",
  },
  {
    quote: "Absolutely love the canvas prints! They make my home feel so much more personalized and welcoming.",
    name: "Laura D",
    location: "Canada",
    imgSrc: "https://placehold.co/100x100",
  },
];

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">Testimonial</h2>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">Hear what our customers have to say</p>
      </div>
      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
          <div className="flex flex-col items-center" key={index}>
            <FaQuoteLeft className="text-4xl text-gray-400 dark:text-gray-600 mt-4" />
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">{truncateText(testimonial.quote, 160)}</p>
            <img className="w-10 h-10 rounded-full mt-4" src={testimonial.imgSrc} alt={testimonial.name} />
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              <p>{testimonial.name}, <span className="text-zinc-500 dark:text-zinc-400">{testimonial.location}</span></p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center space-x-4">
        <button className="w-10 h-10 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}>
          <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button className="w-10 h-10 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}>
          <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
