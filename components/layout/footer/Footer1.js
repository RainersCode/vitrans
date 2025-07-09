import Link from "next/link"

export default function Footer1() {
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
							<img src="assets/img/logo/black-logo.svg" alt="img" />
						</Link>
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="icon">
								<i className="fa-sharp fa-solid fa-location-dot" />
							</div>
							<div className="content">
								<p>Service Area</p>
								<h3>Vidzeme Region, Latvia</h3>
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
								<p>Call for Quote</p>
								<h3>
									<Link href="tel:+37120000000">+371 2000 0000</Link>
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
										<h5>About Me</h5>
									</div>
									<div className="footer-content">
										<p>
											Independent freight transport service with a manipulator truck. 
											Providing reliable and personal service for all your transport 
											needs in the Vidzeme region.
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
										<h5>Quick Links</h5>
									</div>
									<ul className="list-area">
										<li>
											<Link href="/about">
												<i className="fa-solid fa-chevrons-right" />
												About Me
											</Link>
										</li>
										<li>
											<Link href="/service">
												<i className="fa-solid fa-chevrons-right" />
												Services
											</Link>
										</li>
										<li>
											<Link href="#contact" className="theme-btn">
												Pieprasīt cenu
												<i className="fa-regular fa-arrow-right" />
											</Link>
										</li>
										<li>
											<Link href="/faq">
												<i className="fa-solid fa-chevrons-right" />
												FAQ
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
										<h5>Services</h5>
									</div>
									<ul className="list-area">
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Manipulator Transport
											</Link>
										</li>
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Construction Materials
											</Link>
										</li>
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Equipment Transport
											</Link>
										</li>
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Heavy Item Moving
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
	)
}
