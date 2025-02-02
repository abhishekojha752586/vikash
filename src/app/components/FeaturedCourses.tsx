// components/FeaturedCourses.tsx
import React, { useState, useEffect, useRef } from 'react';

type Course = {
  id: number;
  title: string;
  rating: number;
  price: number;
  image: string;
};

const featuredCourses: Course[] = [
  {
    id: 1,
    title: 'DCA Course',
    rating: 4.7,
    price: 3999,
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Courses/DCA%20.png?updatedAt=1737433156328',
  },
  {
    id: 2,
    title: 'ADCA Course',
    rating: 4.9,
    price: 5999,
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Courses/ADCA.png?updatedAt=1737433155379',
  },
  {
    id: 3,
    title: 'CCC Course',
    rating: 4.5,
    price: 5999,
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Courses/CCC?updatedAt=1737433156101',
  },
  {
    id: 4,
    title: 'DTP Course',
    rating: 4.7,
    price: 4999,
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Courses/DTP.png?updatedAt=1737433156453',
  },
  {
    id: 5,
    title: 'DFA Course',
    rating: 4.8,
    price: 5999,
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Courses/DFA.png?updatedAt=1737433155823',
  },
  {
    id: 6,
    title: 'CFCA Course',
    rating: 4.6,
    price: 5999,
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Courses/CFA?updatedAt=1737433153652',
  },
  {
    id: 7,
    title: 'C Language Course',
    rating: 4.6,
    price: 4999,
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Courses/C.png?updatedAt=1737433157595',
  },
];

const FeaturedCourses: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [coursesPerPage, setCoursesPerPage] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + coursesPerPage >= featuredCourses.length ? 0 : prev + coursesPerPage
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(0, featuredCourses.length - coursesPerPage) : prev - coursesPerPage
    );
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(handleNext, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, startIndex, coursesPerPage]);

  const pauseCarousel = () => setIsPaused(true);
  const resumeCarousel = () => setIsPaused(false);

  useEffect(() => {
    const updateCoursesPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setCoursesPerPage(1);
      else if (width < 1024) setCoursesPerPage(2);
      else setCoursesPerPage(3);
    };

    updateCoursesPerPage();
    window.addEventListener('resize', updateCoursesPerPage);
    return () => window.removeEventListener('resize', updateCoursesPerPage);
  }, []);

  const visibleCourses = featuredCourses.slice(startIndex, startIndex + coursesPerPage);

  return (
    <section id="courses" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-gray-600 text-lg">Master in-demand tech skills with industry-aligned programs</p>
        </div>

        <div className="relative px-4 lg:px-8">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            disabled={startIndex === 0}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div 
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            onMouseEnter={pauseCarousel}
            onMouseLeave={resumeCarousel}
            onTouchStart={pauseCarousel}
            onTouchEnd={resumeCarousel}
          >
            {visibleCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{course.title}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-600 font-semibold">{course.rating}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500 line-through">₹{course.price + 2000}</span>
                      <p className="text-xl font-bold text-gray-900">₹{course.price}</p>
                    </div>
                  </div>

                  <a
                    href="https://forms.gle/bqKuCQ9H4AKjZEce9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 no-underline text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            disabled={startIndex + coursesPerPage >= featuredCourses.length}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex space-x-2">
            {featuredCourses.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === startIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                onClick={() => setStartIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;