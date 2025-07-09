'use client'
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Offcanvas({ isOffCanvas, handleOffCanvas }) {
	return (
		<>
			<div className="fix-area">
				<div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
					<div className="offcanvas__wrapper">
						<div className="offcanvas__content">
							<div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
								<div className="offcanvas__logo">
									<Link href="/">
										<img src="assets/img/logo/black-logo.svg" alt="ViTrans logo" />
									</Link>
								</div>
								<div className="offcanvas__close">
									<button onClick={handleOffCanvas}>
										<i className="fas fa-times" />
									</button>
								</div>
							</div>
							<p className="text d-none d-xl-block">
								ViTrans nodrošina profesionālus kravu pārvadājumus ar manipulatoru Vidzemes reģionā.
							</p>
							<MobileMenu />
							<div className="offcanvas__contact">
								<h4>Kontaktinformācija</h4>
								<ul>
									<li className="d-flex align-items-center">
										<div className="offcanvas__contact-icon">
											<i className="fal fa-map-marker-alt" />
										</div>
										<div className="offcanvas__contact-text">
											<Link target="_blank" href="#">
												Vidzeme, Latvija
											</Link>
										</div>
									</li>
									<li className="d-flex align-items-center">
										<div className="offcanvas__contact-icon mr-15">
											<i className="fal fa-envelope" />
										</div>
										<div className="offcanvas__contact-text">
											<Link href="mailto:info@vitrans.lv">
												<span>info@vitrans.lv</span>
											</Link>
										</div>
									</li>
									<li className="d-flex align-items-center">
										<div className="offcanvas__contact-icon mr-15">
											<i className="fal fa-clock" />
										</div>
										<div className="offcanvas__contact-text">
											<Link target="_blank" href="#">
												Pirmdiena-Piektdiena, 08:00-18:00
											</Link>
										</div>
									</li>
									<li className="d-flex align-items-center">
										<div className="offcanvas__contact-icon mr-15">
											<i className="far fa-phone" />
										</div>
										<div className="offcanvas__contact-text">
											<Link href="tel:+37129288247">+371 29 288 247</Link>
										</div>
									</li>
								</ul>
								<div className="header-button mt-4">
									<Link href="#contact" className="theme-btn">
										Pieprasīt cenu
										<i className="fa-regular fa-arrow-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`} onClick={handleOffCanvas} />
		</>
	)
}
