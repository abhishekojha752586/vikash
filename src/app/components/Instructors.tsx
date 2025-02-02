// components/Instructors.tsx
import React from 'react';
import styles from '@/app/styles/GradientTextSection.module.css';

// Define the type for an instructor
type Instructor = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

// Mock data for instructors
const instructors: Instructor[] = [
  {
    id: 1,
    name: 'Vikash Singh',
    designation: 'CFO, RS Classes ',
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Photos/WhatsApp%20Image%202025-01-24%20at%2019.58.52.jpeg?updatedAt=1737729294433',
  },
  {
    id: 2,
    name: 'Usha Singh',
    designation: 'Director, RS Classes',
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Photos/WhatsApp%20Image%202025-01-24%20at%2019.58.50.jpeg?updatedAt=1737729289429',
  },
  {
    id: 3,
    name: 'Prakash Singh',
    designation: 'Secretary, RS Classes',
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Photos/download.png?updatedAt=1738394507745',
  },
  {
    id: 4,
    name: 'Kashish Singh',
    designation: 'Instructor',
    image: 'https://ik.imagekit.io/abhishekojha/vikashCyber/Photos/WhatsApp%20Image%202025-01-24%20at%2019.58.54.jpeg?updatedAt=1737729315799',
  },
];

const Instructors: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Team</h2>
        <div className={styles.underline1}></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-2">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-lg overflow-hidden text-center">
              {/* Instructor Image */}
              <div className="flex justify-center">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              {/* Instructor Name and Designation */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{instructor.name}</h3>
                <p className="text-gray-600 text-sm">{instructor.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;