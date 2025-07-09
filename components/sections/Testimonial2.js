"use client"
// import "swiper/css";

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".array-prev",
		prevEl: ".array-next",
	},
	breakpoints: {
		991: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 1,
		},
		575: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
}

export default function Testimonial2() {
	return (
		<>
			<section className="testimonial-section-2 fix section-padding">
				<div className="container">
					<div className="section-title text-center">
						<h6 className="wow fadeInUp">
							<i className="fa-regular fa-arrow-left-long" />
							Atsauksmes
							<i className="fa-regular fa-arrow-right-long" />
						</h6>
						<h2 className="wow fadeInUp" data-wow-delay=".2s">
							Klientu Atsauksmes
						</h2>
					</div>
					<div className="array-button">
						<button className="array-prev">
							<i className="fa-solid fa-arrow-left-long" />
						</button>
						<button className="array-next">
							<i className="fa-solid fa-arrow-right-long" />
						</button>
					</div>
					<div className="swiper testimonial-slider-2">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide className="swiper-slide">
								<div className="testimonial-card-items">
									<p>
										"Esmu ļoti apmierināts ar Gata sniegto pakalpojumu. Viņš palīdzēja 
										pārvest smagu būvtehniku uz mūsu jauno objektu Valmierā. Darbs tika 
										paveikts profesionāli un precīzi. Īpaši novērtēju viņa elastīgo pieeju 
										un spēju ātri reaģēt uz mūsu steidzamajām vajadzībām."
									</p>
									<div className="client-info-items">
										<div className="client-info">
											<div className="content">
												<h4>Kārlis Liepiņš</h4>
												<span>Būvuzņēmējs</span>
												<div className="star">
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide className="swiper-slide">
								<div className="testimonial-card-items style-2">
									<p>
										"Gatis ir uzticams partneris mūsu uzņēmumam. Regulāri izmantojam 
										viņa manipulatora pakalpojumus materiālu piegādei. Vienmēr precīzs 
										laiks, profesionāla attieksme un konkurētspējīgas cenas. Iesaku 
										visiem, kam nepieciešami kvalitatīvi kravu pārvadājumi Vidzemē."
									</p>
									<div className="client-info-items">
										<div className="client-info">
											<div className="content">
												<h4>Mārtiņš Eglītis</h4>
												<span>SIA "Vidzemes Materiāli"</span>
												<div className="star">
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide className="swiper-slide">
								<div className="testimonial-card-items style-2">
									<p>
										"Pateicos Gatim par operatīvo palīdzību, kad bija steidzami 
										jāpārvieto smagā tehnika no būvobjekta. Patīkami, ka var sazvanīt 
										jebkurā laikā un saņemt profesionālu risinājumu. Manipulatora 
										vadīšanas prasmes ir augstā līmenī."
									</p>
									<div className="client-info-items">
										<div className="client-info">
											<div className="content">
												<h4>Ilze Krūmiņa</h4>
												<span>Projektu vadītāja</span>
												<div className="star">
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}
