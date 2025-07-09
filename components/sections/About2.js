'use client'
import Link from "next/link"

export default function About2() {
	return (
		<>
			<section className="about-section fix section-padding" id="about">
				<div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div>
				<div className="about-shape-5 float-bob-y">
					<img src="assets/img/about/about-shape-5.png" alt="img" />
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4">
							<div className="col-lg-6">
								<div className="about-image">
									<img
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
										alt="Gatis Lovkins - ViTrans īpašnieks"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img 
											src="/assets/img/about/bottom_about.jpg" 
											alt="Transporta aprīkojums" 
											style={{ width: '500px', height: '400px', objectFit: 'cover' }}
										/>
									</div>
									<div className="bar-shape">
										<img src="assets/img/about/bar.png" alt="img" />
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											<i className="fa-regular fa-arrow-left-long" />
											Par mani
											<i className="fa-regular fa-arrow-right-long" />
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
											Neatkarīgs pārvadātājs, <br /> Gatis Lovkins
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
										Es esmu neatkarīgs pārvadātājs. Mans mērķis ir nodrošināt 
										draudzīgu, elastīgu pakalpojumu, kas pielāgots jūsu vajadzībām. Neatkarīgi no tā, 
										vai jums nepieciešams pārvietot būvmateriālus, iekārtas vai citus smagus priekšmetus, 
										es varu palīdzēt.
									</p>
									<div className="row g-4 mt-3">
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
											<div className="icon-items">
												<div className="icon">
													<i className="fas fa-truck" />
												</div>
												<h5>Manipulatora transports</h5>
											</div>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="fas fa-handshake" />
												</div>
												<h5>Personīga pieeja</h5>
											</div>
										</div>
									</div>
									<ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<li>
											<i className="fa-solid fa-circle-check" />
											Tieša komunikācija—bez starpniekiem
										</li>
										<li>
											<i className="fa-solid fa-circle-check" />
											Ātra atsaucība uz jūsu pieprasījumiem
										</li>
										<li>
											<i className="fa-solid fa-circle-check" />
											Elastīgs grafiks, kas pielāgots jūsu vajadzībām
										</li>
									</ul>
									<div className="about-author">
										<Link
											href="#services"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Mani pakalpojumi <i className="fa-regular fa-arrow-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
