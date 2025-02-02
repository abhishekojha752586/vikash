// components/ContactSection.tsx
'use client';
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <div
      className="relative flex flex-row lg:flex-row items-center justify-between sm:p-8 rounded-sm shadow-md space-y-6 lg:space-y-0 lg:space-x-8"
      style={{
        backgroundImage: `url('https://ik.imagekit.io/abhishekojha/vikashCyber/DCA.png?updatedAt=1737321379104')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '120px', // Adjust height as needed
      }}
    >
      {/* Logo Section */}
      <div className="relative z-10 flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-indigo-100 rounded-full">
        <img
          className="rounded-full w-full h-full object-cover"
          src="https://ik.imagekit.io/abhishekojha/vikashCyber/WhatsApp%20Image%202024-12-20%20at%2010.47.16.jpeg?updatedAt=1737220461105"
          alt="logo"
        />
      </div>

      {/* Contact Section */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        {/* Mail Us Section - Hidden on screens smaller than lg */}
        <div className="lg:flex items-center bg-white shadow-sm border border-gray-200 rounded-md px-4 py-2 sm:px-6 sm:py-3 hidden">
          <span className="mr-2 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0L12 13.5m-9.75-6.75L12 13.5m0 0l9.75-6.75"
              />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-gray-800 m-0">Mail Us</p>
            <p className="text-sm text-gray-600">
              <a
                href="mailto:prakash231313@gmail.com"
                className="no-underline text-gray-600 hover:text-blue-500"
              >
                rscomputerclasses@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Call Us Section */}
        <div className="flex items-center bg-white shadow-sm border border-gray-200 rounded-md px-4 py-2 sm:px-6 sm:py-3">
          <span className="mr-2 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 7.5c0 8.284 6.716 15 15 15a1.5 1.5 0 001.448-1.106l.71-2.84a1.5 1.5 0 00-.874-1.755l-2.499-1a1.5 1.5 0 00-1.515.174l-1.056.793a11.037 11.037 0 01-5.173-5.173l.793-1.056a1.5 1.5 0 00.174-1.515l-1-2.5a1.5 1.5 0 00-1.755-.874l-2.84.71A1.5 1.5 0 002.25 7.5z"
              />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-gray-800 m-0">Call Us</p>
            <p className="text-sm text-gray-600">
              <a
                href="tel:+917522899459"
                className="no-underline text-gray-600 hover:text-blue-500"
              >
                +91 7522899459
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;