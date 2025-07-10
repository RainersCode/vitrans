"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CtaBanner2() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // 1024px is typically tablet breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section 
        className="cta-section-2 bg-cover fix" 
        style={{
          backgroundImage: 'url("/assets/img/cta_background.jpg")',
          backgroundAttachment: isDesktop ? 'fixed' : 'scroll',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="cta-banner-wrapper-2">
            <div className="cta-content">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Vajadzīgi kravu pārvadājumi <br /> Vidzemē?
              </h2>
              <p className="text-white mb-4">
                Caurspīdīgas cenas, bez slēptām izmaksām. Sazinieties ar mani, lai uzzinātu cenu vai pārrunātu jūsu transporta vajadzības.
              </p>
              <Link href="#contact" className="theme-btn theme-btn-alt">
                PIEPRASĪT CENU
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
