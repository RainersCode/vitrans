import Link from "next/link";

export default function CtaBanner2() {
  return (
    <>
      <section className="cta-section-2 bg-cover fix">
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
