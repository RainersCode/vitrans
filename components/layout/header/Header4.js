'use client'
import Link from "next/link"
import OnePageNav from "../OnePageNav"

export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas, isSearch, handleSearch }) {
	return (
		<>
			<header className="header-section-2">
				<div className="container-fluid">
					<div className="header-top-wrapper-2">
						<ul className="contact-list">
							<li>
								<i className="fa-regular fa-phone" />
								<Link href="tel:+37129288247">+371 29 288 247</Link>
							</li>
							<li>
								<i className="fa-sharp fa-solid fa-location-dot" />
								Vidzeme Region, Latvia
							</li>
						</ul>
					</div>
					<div id="header-sticky" className={`header-2 ${scroll ? "sticky" : ""}`}>
						<div className="mega-menu-wrapper">
							<div className="header-main">
								<div className="header-left">
									<div className="logo d-flex align-items-center">
										<Link href="/" className="header-logo d-flex align-items-center">
											<img
												src="assets/img/logo/black-logo.svg"
												alt="ViTrans logo"
												style={{ maxHeight: '50px', width: 'auto' }}
											/>
										</Link>
									</div>
								</div>
								<div className="header-right d-flex justify-content-end align-items-center">
									<div className="mean__menu-wrapper">
										<div className="main-menu">
											<OnePageNav />
										</div>
									</div>
									<div className="header-button">
										<Link href="#contact" className="theme-btn">
											PIEPRASĪT CENU <i className="fa-regular fa-arrow-right" />
										</Link>
									</div>
									<div className="search-item">
										<a className="search-trigger search-icon" onClick={handleSearch}>
											<i className="fal fa-search" />
										</a>
										<div className="header__hamburger d-xl-block my-auto">
											<div className="sidebar__toggle" onClick={handleOffCanvas}>
												<i className="fas fa-bars" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
