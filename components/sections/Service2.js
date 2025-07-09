"use client"
import Link from "next/link"

export default function Service2() {
	return (
		<>
			<section className="service-section fix section-padding section-bg" id="services">
				<div className="bg-shape">
					<img src="assets/img/service/bg-shape.png" alt="img" />
				</div>
				<div className="container">
					<div className="section-title text-center">
						<h6 className="wow fadeInUp">
							<i className="fa-regular fa-arrow-left-long" />
							Mani pakalpojumi
							<i className="fa-regular fa-arrow-right-long" />
						</h6>
						<h2 className="text-white wow fadeInUp" data-wow-delay=".2s">
							Ko es piedāvāju jūsu <br /> transporta vajadzībām
						</h2>
					</div>
					<div className="row g-4 mt-5">
						<div className="col-lg-4 col-md-6 d-flex">
							<div className="service-card-items h-100 w-100 d-flex flex-column">
									<div className="service-image">
									<img src="https://images.unsplash.com/photo-1558618644-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Manipulatora pakalpojumi" />
									</div>
									<div className="bar-shape">
										<img src="assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
									<i className="fas fa-truck" />
									</div>
								<div className="content d-flex flex-column flex-grow-1">
										<h3>
										<Link href="#contact">Kravu pārvadājumi ar manipulatoru</Link>
										</h3>
									<p className="flex-grow-1">
										Rūpīga iekraušana un izkraušana, izmantojot profesionālu manipulatora aprīkojumu. 
										Droša smagu priekšmetu un būvmateriālu pārvietošana.
										</p>
									<Link href="#contact" className="link-btn mt-auto">
										Pieprasīt cenu <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
									<div className="items-shape">
										<img src="assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
						</div>
						<div className="col-lg-4 col-md-6 d-flex">
							<div className="service-card-items h-100 w-100 d-flex flex-column">
									<div className="service-image">
									<img src="https://images.unsplash.com/photo-1581093458791-9f3c3250a8b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Elastīgs darba grafiks" />
									</div>
									<div className="bar-shape">
										<img src="assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
									<i className="fas fa-calendar-check" />
									</div>
								<div className="content d-flex flex-column flex-grow-1">
										<h3>
										<Link href="#contact">Elastīgs darba grafiks</Link>
										</h3>
									<p className="flex-grow-1">
										Es pielāgojos jūsu grafikam. Vietējās un reģionālās piegādes 
										ar elastīgu laiku, lai iekļautos jūsu projektu termiņos.
										</p>
									<Link href="#contact" className="link-btn mt-auto">
										Plānot piegādi <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
									<div className="items-shape">
										<img src="assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
						</div>
						<div className="col-lg-4 col-md-6 d-flex">
							<div className="service-card-items h-100 w-100 d-flex flex-column">
									<div className="service-image">
									<img src="https://images.unsplash.com/photo-1560472355-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Personīga pieeja" />
									</div>
									<div className="bar-shape">
										<img src="assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
									<i className="fas fa-handshake" />
								</div>
								<div className="content d-flex flex-column flex-grow-1">
										<h3>
										<Link href="#contact">Personīga pieeja</Link>
										</h3>
									<p className="flex-grow-1">
										Tieša komunikācija bez starpniekiem. Ātra atsaucība uz jūsu pieprasījumiem 
										un individuāla pieeja katram pārvadājumam.
										</p>
									<Link href="#contact" className="link-btn mt-auto">
										Sazināties <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
									<div className="items-shape">
										<img src="assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
