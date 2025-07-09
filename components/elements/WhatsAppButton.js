'use client'
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  const phoneNumber = "+37126858674"; // ViTrans WhatsApp number

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '30px',
        zIndex: 999,
        display: isVisible ? 'block' : 'none'
      }}
    >
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          position: 'relative'
        }}
        className="whatsapp-button"
        title="Sazināties WhatsApp"
      >
        <i 
          className="fab fa-whatsapp"
          style={{
            fontSize: '32px',
            color: '#fff'
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: '70px',
            background: '#fff',
            padding: '8px 15px',
            borderRadius: '4px',
            fontSize: '14px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            whiteSpace: 'nowrap',
            opacity: 0,
            visibility: 'hidden',
            transition: 'all 0.3s ease',
            color: '#333'
          }}
          className="whatsapp-tooltip"
        >
          Sazināties WhatsApp
        </span>
      </a>
    </div>
  );
} 