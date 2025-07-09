"use client"
import Link from "next/link"

export default function Hero3() {
	return (
		<>
			<section className="hero-section fix hero-2">
							<div
								className="slider-image bg-cover"
					style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
							></div>
							<div className="container">
								<div className="row g-4">
									<div className="col-lg-8">
										<div className="hero-content text-start">
											<h5
												data-animation="slideInRight"
												data-duration="2s"
												data-delay=".3s"
											>
									Kravu pārvadājumi ar manipulatoru
											</h5>
											<h1
												data-animation="slideInRight"
												data-duration="2s"
												data-delay=".5s"
											>
									Uzticami kravu <br />
									pārvadājumi
											</h1>
											<p
												data-animation="slideInRight"
												data-duration="2s"
												data-delay=".9s"
											>
									Piedāvāju personīgus, uzticamus kravu pārvadājumu pakalpojumus Vidzemē. <br />
									Izmantojot manipulatoru, es palīdzu droši un efektīvi pārvietot un piegādāt kravas <br />
									privātpersonām un maziem uzņēmumiem.
											</p>
											<div className="hero-button">
												<Link href="#contact" className="theme-btn">
										Pieprasīt cenu
										<i className="fa-regular fa-arrow-right" />
												</Link>
											</div>
										</div>
									</div>
								</div>
				</div>
			</section>
		</>
	)
}
