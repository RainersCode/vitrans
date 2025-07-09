import Link from "next/link";

export default function CtaBanner2() {
  return (
    <>
      <section
        className="cta-section-2 bg-cover fix"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000&q=80")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',
          padding: '120px 0',
          margin: '80px 0'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cta-banner-wrapper-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="cta-content" style={{ textAlign: 'center', padding: '0 20px' }}>
              <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '30px', fontSize: '42px', lineHeight: '1.3' }}>
                Vajadzīgi kravu pārvadājumi <br /> Vidzemē?
              </h2>
              <p className="text-white mb-4" style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '35px' }}>
                Caurspīdīgas cenas, bez slēptām izmaksām. Sazinieties ar mani, lai uzzinātu cenu vai pārrunātu jūsu transporta vajadzības.
              </p>
              <Link href="#contact" className="theme-btn theme-btn-alt" style={{ padding: '15px 35px', fontSize: '16px' }}>
                PIEPRASĪT CENU
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
