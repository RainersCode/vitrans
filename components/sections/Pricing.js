import Link from "next/link";
import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            Cenrādis
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Pakalpojumu cenas
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="pricing-card-items box-shadow">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="img" />
              </div>
              <div className="pricing-header">
                <h3>Standarta pārvadājums</h3>
                <h2>
                  Sākot no €50<span>/stundā</span>
                </h2>
              </div>
              <ul className="pricing-list">
                <li>
                  <i className="fa-solid fa-check" />
                  Kravas iekraušana/izkraušana
                </li>
                <li>
                  <i className="fa-solid fa-check" />
                  Piegāde Vidzemes reģionā
                </li>
                <li>
                  <i className="fa-solid fa-check" />
                  Manipulatora pakalpojumi
                </li>
                <li className="style-2">
                  <i className="fa-sharp fa-regular fa-xmark" />
                  Steidzamā piegāde
                </li>
              </ul>
              <div className="header-button">
                <Link href="#contact" className="theme-btn style-2">
                  <span />
                  Pieprasīt cenu <i className="fa-regular fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="pricing-card-items box-shadow active">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="img" />
              </div>
              <div className="pricing-header">
                <h3>Būvmateriālu piegāde</h3>
                <h2>
                  Sākot no €60<span>/stundā</span>
                </h2>
              </div>
              <ul className="pricing-list">
                <li>
                  <i className="fa-solid fa-check" />
                  Specializēta iekraušana
                </li>
                <li>
                  <i className="fa-solid fa-check" />
                  Drošs transportējums
                </li>
                <li>
                  <i className="fa-solid fa-check" />
                  Precīza piegāde objektā
                </li>
                <li>
                  <i className="fa-solid fa-check" />
                  Manipulatora pakalpojumi
                </li>
              </ul>
              <div className="header-button">
                <Link href="#contact" className="theme-btn">
                  <span />
                  Pieprasīt cenu <i className="fa-regular fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="pricing-card-items box-shadow">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="img" />
              </div>
              <div className="pricing-header">
                <h3>Steidzamā piegāde</h3>
                <h2>
                  Sākot no €75<span>/stundā</span>
                </h2>
              </div>
              <ul className="pricing-list">
                <li>
                  <i className="fa-solid fa-check" />
                  Prioritāra apkalpošana
                </li>
                <li>
                  <i className="fa-solid fa-check" />
                  Piegāde tajā pašā dienā
                </li>
                <li>
                  <i className="fa-solid fa-check" />
                  24/7 pieejamība
                </li>
                <li>
                  <i className="fa-solid fa-check" />
                  Manipulatora pakalpojumi
                </li>
              </ul>
              <div className="header-button">
                <Link href="#contact" className="theme-btn style-2">
                  <span />
                  Pieprasīt cenu <i className="fa-regular fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
