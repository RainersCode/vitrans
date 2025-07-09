"use client";
import { useState } from "react";
export default function Faq() {
  const [isAccordion, setIsAccordion] = useState(1);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  return (
    <>
      <section
        id="biezak-uzdotie-jautajumi"
        className="faq-section fix section-padding section-bg-2 bg-cover"
        style={{ backgroundImage: 'url("assets/img/faq/bg-shape.png")' }}
      >
        <div className="track-shape float-bob-x">
          <img src="assets/img/track.png" alt="img" />
        </div>
        <div className="container">
          <div className="faq-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title">
                    <h6 className="wow fadeInUp">
                      <i className="fa-regular fa-arrow-left-long" />
                      BUJ
                      <i className="fa-regular fa-arrow-right-long" />
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                      Biežāk uzdotie <br /> jautājumi
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    Šeit atradīsiet atbildes uz biežāk uzdotajiem jautājumiem par maniem pakalpojumiem. 
                    Ja neatrodat vajadzīgo informāciju, droši sazinieties ar mani.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".2s">
                    <div className="icon">
                      <i className="fa-regular fa-check" />
                    </div>
                    <div className="content">
                      <h5>INDIVIDUĀLA PIEEJA</h5>
                      <span>
                        Katram klientam nodrošinu personīgu pieeju un elastīgu risinājumu
                      </span>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".4s">
                    <div className="icon">
                      <i className="fa-regular fa-check" />
                    </div>
                    <div className="content">
                      <h5>DROŠA PIEGĀDE</h5>
                      <span>
                        Garantēju drošu un savlaicīgu kravu piegādi visā Vidzemes reģionā
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div
                      className="accordion-item mb-3 wow fadeInUp"
                      data-wow-delay=".1s"
                    >
                      <h5 className="accordion-header">
                        <button
                          onClick={() => handleAccordion(1)}
                          className={
                            isAccordion == 1
                              ? "accordion-button"
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq1"
                          aria-expanded="true"
                          aria-controls="faq1"
                        >
                          Kāda ir minimālā pasūtījuma summa?
                        </button>
                      </h5>
                      <div
                        id="faq1"
                        className={
                          isAccordion == 1
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Minimālā summa ir atkarīga no attāluma un kravas specifikas. 
                          Lai iegūtu precīzu cenu, lūdzu, sazinieties ar mani, norādot 
                          kravas veidu un piegādes adresi.
                        </div>
                      </div>
                    </div>

                    <div
                      className="accordion-item mb-3 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h5 className="accordion-header">
                        <button
                          onClick={() => handleAccordion(2)}
                          className={
                            isAccordion == 2
                              ? "accordion-button"
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq2"
                          aria-expanded="false"
                          aria-controls="faq2"
                        >
                          Kādā teritorijā sniedzat pakalpojumus?
                        </button>
                      </h5>
                      <div
                        id="faq2"
                        className={
                          isAccordion == 2
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Galvenokārt darbojos Vidzemes reģionā, bet pēc vienošanās 
                          varu nodrošināt pārvadājumus arī citās Latvijas teritorijās.
                        </div>
                      </div>
                    </div>

                    <div
                      className="accordion-item mb-3 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h5 className="accordion-header">
                        <button
                          onClick={() => handleAccordion(3)}
                          className={
                            isAccordion == 3
                              ? "accordion-button"
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq3"
                          aria-expanded="false"
                          aria-controls="faq3"
                        >
                          Kāds ir maksimālais kravas svars un izmēri?
                        </button>
                      </h5>
                      <div
                        id="faq3"
                        className={
                          isAccordion == 3
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Manipulators spēj pacelt līdz X tonnām. Precīzi kravas izmēri 
                          un svara ierobežojumi ir atkarīgi no konkrētā gadījuma - sazinieties, 
                          lai pārrunātu jūsu kravas specifiku.
                        </div>
                      </div>
                    </div>

                    <div
                      className="accordion-item mb-3 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <h5 className="accordion-header">
                        <button
                          onClick={() => handleAccordion(4)}
                          className={
                            isAccordion == 4
                              ? "accordion-button"
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq4"
                          aria-expanded="false"
                          aria-controls="faq4"
                        >
                          Cik ātri varat nodrošināt piegādi?
                        </button>
                      </h5>
                      <div
                        id="faq4"
                        className={
                          isAccordion == 4
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Parasti varu nodrošināt piegādi 1-2 darba dienu laikā. 
                          Steidzamos gadījumos iespējama arī ātrāka piegāde - 
                          sazinieties, lai pārrunātu jūsu vajadzības.
                        </div>
                      </div>
                    </div>

                    <div
                      className="accordion-item mb-3 wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h5 className="accordion-header">
                        <button
                          onClick={() => handleAccordion(5)}
                          className={
                            isAccordion == 5
                              ? "accordion-button"
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq5"
                          aria-expanded="false"
                          aria-controls="faq5"
                        >
                          Vai strādājat brīvdienās?
                        </button>
                      </h5>
                      <div
                        id="faq5"
                        className={
                          isAccordion == 5
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Pēc iepriekšējas vienošanās varu nodrošināt pakalpojumus 
                          arī brīvdienās. Lūdzu, sazinieties laicīgi, lai vienotos 
                          par jums piemērotāko laiku.
                        </div>
                      </div>
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
