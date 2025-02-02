'use client';
 /*import React from 'react';

const OurVision: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-purple-50 p-8 rounded-lg">
      <div className="text-center md:text-left md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">OUR VISION</h2>
        <p className="text-gray-700">
          Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
        </p>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
        <div className="relative">
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-2 px-4 rounded-full">
            On a mission to teach Millions
          </button>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
            <div className="w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
            <div className="w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
            <div className="w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
}; */

// components/VisionSection.tsx
import React from 'react';

const OurVision: React.FC = () => {
  return (
    <div className="bg-purple-100 p-8 m-10 rounded-2xl flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">OUR VISION</h2>
        <p className="text-gray-700">
        At RS Computer Classes, we envision a future where technology empowers innovation and leadership for all. Offering courses like ADCA, DCA, C Language, CCC, DFT, DFA, and CFA, we equip students with cutting-edge technical skills, hands-on expertise, and the confidence to excel in a dynamic digital world. Our mission is to bridge education with industry demands, nurturing tech-savvy professionals and ethical leaders who drive progress. By fostering an inclusive, collaborative community rooted in curiosity and lifelong learning, we empower individuals to transform careers, industries, and communities. Together, we engineer futures.
        Empowering Minds. Engineering Futures.
        </p>
      </div>
      <div className="relative flex items-center justify-center my-8">
        <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold py-2 px-4 rounded-full shadow-lg relative z-10">
          On a mission to teach Millions
        </button>
        <div className="absolute flex items-center justify-center inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="w-2 h-10 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full flame"
              style={{
                "--base-transform": `rotate(${index * 45}deg) translateY(-50px)`,
                margin: "5px",
                position: "absolute",
              }}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .flame {
          /* Set the initial transform from our custom property */
          transform: var(--base-transform);
          animation: flame 1s ease-in-out infinite;
        }
        @keyframes flame {
          0% {
            transform: var(--base-transform) scaleY(1);
            opacity: 1;
          }
          50% {
            transform: var(--base-transform) translateY(-5px) scaleY(1.1);
            opacity: 0.8;
          }
          100% {
            transform: var(--base-transform) scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
</div>

  
  );
};

//export default VisionSection;


export default OurVision;
