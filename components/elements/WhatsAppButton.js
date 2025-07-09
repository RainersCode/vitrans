'use client'
import React from 'react';
import Link from 'next/link';

const WhatsAppButton = () => {
  const phoneNumber = "+37129288247"; // WhatsApp number
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="whatsapp-button">
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </Link>
    </div>
  );
};

export default WhatsAppButton; 