// components/WhatsAppIcon.tsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon: React.FC = () => {
  return (
    <a
      href="https://wa.me/7522899459"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 flex items-center justify-center shadow-lg animate-bounce"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppIcon;
