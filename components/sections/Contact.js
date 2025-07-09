import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section
        className="contact-section fix section-padding" id="contact"
        style={{ background: '#E84E4E' }}
      >
        <div className="contact-image float-bob-x">
          <img src="assets/img/contact-img-shape.png" alt="forma" />
        </div>
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="contact-items">
                  <h3 className="wow fadeInUp text-white" data-wow-delay=".2s">
                    Pieprasīt Cenu
                  </h3>
                  <form
                    action="#"
                    id="contact-form"
                    method="POST"
                    className="mt-4 mt-md-0"
                  >
                    <div className="row g-4">
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Jūsu vārds"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Telefona numurs"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 col-md-12 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="Iekraušanas adrese"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Aprakstiet, kas jāpārvadā..."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-7 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <button type="submit" className="theme-btn">
                          Pieprasīt Cenu <i className="fa-regular fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <h6 className="wow fadeInUp text-white">
                      <i className="fa-regular fa-arrow-left-long" />
                      Kontaktinformācija
                      <i className="fa-regular fa-arrow-right-long" />
                    </h6>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      Tieša Komunikācija, Ātra Atbilde
                    </h2>
                  </div>
                  <p
                    className="text-white mt-3 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Kā neatkarīgs pārvadātājs, es nodrošinu individuālu pieeju katram klientam. 
                    Sazinieties ar mani tieši par kravu pārvadājumiem Vidzemes reģionā. 
                    Pieejams būvmateriālu, iekārtu un smagu priekšmetu pārvadāšanai ar manipulatoru.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon" style={{ background: '#ffffff', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-light fa-phone-volume" style={{ color: '#E84E4E', fontSize: '28px' }} />
                    </div>
                    <div className="content">
                      <span className="text-white">Zvaniet Tieši</span>
                      <h4>
                        <Link href="tel:+37126858674" className="text-white">+371 2685 8674</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="icon-items mt-4 wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon" style={{ background: '#ffffff', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-light fa-location-dot" style={{ color: '#E84E4E', fontSize: '28px' }} />
                    </div>
                    <div className="content">
                      <span className="text-white">Apkalpojamā Teritorija</span>
                      <h4 className="text-white">Vidzemes reģions, Latvija</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
