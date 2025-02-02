// components/Footer.tsx
import React from 'react';
import Link from 'next/link';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About the Company */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a leading education platform offering high-quality courses to help you achieve your career goals.
            </p>
          </div>

          {/* Contact Details */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <Link href="mailto:prakash231313@gmail.com" className="mb-2">Email: prakash231313@gmail.com </Link> 
              <Link href="tel:+917522899459" className="mb-2">Phone: +917522899459</Link>
              <Link href="#" className="mb-2">Address: Kushaha Churaha, Jigna, Mirzapur, 231303</Link>
            </ul>
          </div>

          {/* Social Links */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img
                  src="https://ik.imagekit.io/abhishekojha/vikashCyber/Social/facebook.png?updatedAt=1737433151234"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img
                  src="https://ik.imagekit.io/abhishekojha/Placement%20Series/icons8-youtube-48.png?updatedAt=1716378135176"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img
                  src="https://ik.imagekit.io/abhishekojha/Placement%20Series/icons8-linkedin-48.png?updatedAt=1716378135281"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img
                  src="https://ik.imagekit.io/abhishekojha/Placement%20Series/icons8-instagram-48.png?updatedAt=1716378135105"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className=" text-gray-400">
              <li className="mb-2 ">
                <Link href="/courses" className="hover:text-white transition-colors no-underline">
                  Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-white transition-colors no-underline">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white transition-colors no-underline">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/#" className="hover:text-white transition-colors no-underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Developed By Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Developed by <span className="text-white font-semibold"><Link href="https://www.refllect.com/">Refllect</Link></span> | © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;