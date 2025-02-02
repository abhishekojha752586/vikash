// components/TestimonialsCarousel.tsx
import React, { useState } from 'react';
import styles from '@/app/styles/GradientTextSection.module.css'

interface Testimonial {
  name: string;
  title: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Kashish Singh',
    title: 'Student',
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Photos/WhatsApp%20Image%202025-01-24%20at%2019.58.54.jpeg?updatedAt=1737729315799',
    rating: 5,
    text: '"RS Computer Classes transformed my career! The DCA course gave me practical skills that landed me a job within weeks of completion. The instructors make complex concepts feel simple!"',
  },
  {
    name: 'Dilip',
    title: 'Student',
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Photos/WhatsApp%20Image%202025-01-24%20at%2019.58.53%20(1).jpeg?updatedAt=1737729295913',
    rating: 5,
    text: '"Best investment in my education! The C Language course structure is perfect—hands-on projects and real-world examples. Now I code with confidence!"',
  },
  {
    name: 'Sachin',
    title: 'Student',
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Photos/WhatsApp%20Image%202025-01-24%20at%2019.58.54%20(2).jpeg?updatedAt=1737729365542',
    rating: 5,
    text: 'The ADCA program exceeded my expectations! From basics to advanced modules, everything was industry-relevant. Loved the friendly mentors and supportive environment!',
  },
  {
    name: 'Suhail',
    title: 'Student',
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Photos/WhatsApp%20Image%202025-01-24%20at%2019.58.53.jpeg?updatedAt=1737729291629',
    rating: 5,
    text: '"A game-changer! The DFA course’s practical approach helped me start my own design studio. The lifetime access to resources is an amazing bonus!"',
  },
  {
    name: 'Rohit',
    title: 'Student',
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/user.png?updatedAt=1738488521235',
    rating: 5,
    text: '"I found the CCC course to be an excellent investment. With affordable fees and a flexible schedule, it enhanced my digital literacy and allowed me to balance work and studies seamlessly."',
  },
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  // Get the visible testimonials (3 at a time)
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <div className="flex flex-col items-center w-full mx-0 px-0 bg-gray-100 rounded-lg">
      <h2 className="text-3xl font-bold mt-6 mb-1">Testimonials</h2>
      <div className={styles.underline1}></div>
      {/* Testimonial Text */}
      <div className="text-center mx-4 sm:mx-8 md:mx-16 lg:mx-32 relative max-w-2xl w-full">
        <span className="absolute left-0 top-0 text-purple-500 text-4xl">&ldquo;</span>
        <p className="text-gray-700 mx-10 sm:mx-20 md:mx-32 lg:mx-20">
          {visibleTestimonials[1].text}
        </p>
        <span className="absolute right-0 bottom-0 text-purple-500 text-4xl">&rdquo;</span>
      </div>

      {/* Testimonial Images */}
      <div className="flex items-center justify-center my-8 relative">
        <button onClick={handlePrev} className="p-2 z-10">
          <img
            src="https://ik.imagekit.io/abhishekojha/vikashCyber/Courses/Prev%20Icon.png?updatedAt=1737473196431"
            alt="Previous"
            className="w-10 bg-none h-10"
          />
        </button>

        <div className="flex items-center space-x-4 mx-4">
          {visibleTestimonials.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.image}
              alt={testimonial.name}
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full transition-transform duration-300 ease-in-out ${
                index === 1 ? 'scale-110 blur-none' : 'scale-90 blur-sm'
              }`}
            />
          ))}
        </div>

        <button onClick={handleNext} className="p-2 z-10">
          <img
            src="https://ik.imagekit.io/abhishekojha/vikashCyber/Courses/Next%20arrow.png?updatedAt=1737473196461"
            alt="Next"
            className="w-10 bg-none h-10"
          />
        </button>
      </div>

      {/* Testimonial Details */}
      <div className="text-center">
        <h3 className="text-xl font-semibold">{visibleTestimonials[1].name}</h3>
        
        <p className="text-gray-500">{visibleTestimonials[1].title}</p>
        <div className="flex justify-center mt-2">
          {Array.from({ length: visibleTestimonials[1].rating }, (_, index) => (
            <span key={index} className="text-yellow-500">&#9733;</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;