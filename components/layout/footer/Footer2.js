import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer
        className="footer-section bg-cover bg-cover"
        style={{ backgroundImage: 'url("assets/img/footer/bg.jpg")' }}
      >
        <div className="container">
          <div className="contact-info-area">
            <Link
              href="/"
              className="logo-img wow fadeInUp"
              data-wow-delay=".2s"
            >
              <img src="assets/img/logo/white-logo.svg" alt="img" style={{ background: 'transparent' }} />
            </Link>
            <div
              className="contact-info-items wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="icon">
                <i className="fa-sharp fa-solid fa-location-dot" />
              </div>
              <div className="content">
                <p>Apkalpojamā teritorija</p>
                <h3>Vidzemes reģions, Latvija</h3>
              </div>
            </div>
            <div
              className="contact-info-items wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="icon">
                <i className="fa-solid fa-phone-volume" />
              </div>
              <div className="content">
                <p>Pieprasīt cenu</p>
                <h3>
                  <Link href="tel:+37126858674">+371 2685 8674</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="footer-widgets-wrapper">
            <div className="row justify-content-center">
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>Par mani</h5>
                  </div>
                  <div className="footer-content">
                    <p>
                      Neatkarīgs kravu pārvadātājs ar manipulatoru. 
                      Nodrošinu uzticamu un individuālu pieeju visām jūsu 
                      transporta vajadzībām Vidzemes reģionā.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>Ātrās saites</h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="#about">
                        <i className="fa-solid fa-chevrons-right" />
                        Par mani
                      </Link>
                    </li>
                    <li>
                      <Link href="#services">
                        <i className="fa-solid fa-chevrons-right" />
                        Pakalpojumi
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact">
                        <i className="fa-solid fa-chevrons-right" />
                        Pieprasīt cenu
                      </Link>
                    </li>
                    <li>
                      <Link href="#biezak-uzdotie-jautajumi">
                        <i className="fa-solid fa-chevrons-right" />
                        Biežāk uzdotie jautājumi
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>Pakalpojumi</h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="#services">
                        <i className="fa-solid fa-chevrons-right" />
                        Pārvadājumi ar manipulatoru
                      </Link>
                    </li>
                    <li>
                      <Link href="#services">
                        <i className="fa-solid fa-chevrons-right" />
                        Būvmateriālu pārvadāšana
                      </Link>
                    </li>
                    <li>
                      <Link href="#services">
                        <i className="fa-solid fa-chevrons-right" />
                        Iekārtu transportēšana
                      </Link>
                    </li>
                    <li>
                      <Link href="#services">
                        <i className="fa-solid fa-chevrons-right" />
                        Smagu priekšmetu pārvietošana
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} ViTrans - Uzticami kravu pārvadājumi
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
