"use client"
import Link from "next/link"
// import "swiper/css";

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 2000,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".project-dot",
	},
	breakpoints: {
		1199: {
			slidesPerView: 3,
		},
		991: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2,
		},
		575: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
}

export default function Project2() {
	return (
		<>
			<style jsx global>{`
				@media (max-width: 576px) {
					.project-thumb img {
						height: 300px !important;
					}
				}
			`}</style>
			<section className="project-section section-padding fix" id="projects">
				<div className="container">
					<div className="section-title-area">
						<div className="section-title">
							<h6 className="wow fadeInUp">
								<i className="fa-regular fa-arrow-left-long" />
								Transporta galerija
								<i className="fa-regular fa-arrow-right-long" />
							</h6>
							<h2 className="wow fadeInUp" data-wow-delay=".1s">
								Nesenie pārvadājumi
							</h2>
						</div>
					</div>
				</div>
				<div className="project-wrapper-2">
					<div className="swiper project-slider">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide className="swiper-slide">
								<div className="project-thumb">
									<img 
										src="/assets/img/service/offer/manipulatora_pakalpojumi.jpg" 
										alt="Manipulatora pakalpojumi" 
										style={{ width: '1200px', height: '500px', objectFit: 'cover' }}
									/>
									<div className="project-content">
										<div className="content" style={{ color: '#fff' }}>
											<h3 style={{ color: '#fff' }}>Manipulatora pakalpojumi</h3>
											<span style={{ color: '#fff' }}>
												<i className="fa-sharp fa-solid fa-location-dot" /> Vidzemes reģions
											</span>
										</div>
										<h2 className="number" style={{ color: '#fff' }}>01</h2>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="project-thumb">
									<img 
										src="/assets/img/service/offer/celtniecibasmaterialu_piegade.jpg" 
										alt="Celtniecības materiālu piegāde" 
										style={{ width: '1200px', height: '500px', objectFit: 'cover' }}
									/>
									<div className="project-content">
										<div className="content" style={{ color: '#fff' }}>
											<h3 style={{ color: '#fff' }}>Celtniecības materiālu piegāde</h3>
											<span style={{ color: '#fff' }}>
												<i className="fa-sharp fa-solid fa-location-dot" /> Vidzemes reģions
											</span>
										</div>
										<h2 className="number" style={{ color: '#fff' }}>02</h2>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="project-thumb">
									<img 
										src="/assets/img/service/offer/kokmaterialu_piegade.jpg" 
										alt="Kokmateriālu piegāde" 
										style={{ width: '1200px', height: '500px', objectFit: 'cover' }}
									/>
									<div className="project-content">
										<div className="content" style={{ color: '#fff' }}>
											<h3 style={{ color: '#fff' }}>Kokmateriālu piegāde</h3>
											<span style={{ color: '#fff' }}>
												<i className="fa-sharp fa-solid fa-location-dot" /> Vidzemes reģions
											</span>
										</div>
										<h2 className="number" style={{ color: '#fff' }}>03</h2>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="project-thumb">
									<img 
										src="/assets/img/service/offer/iekartu_parvesana.jpg" 
										alt="Iekārtu pārvešana" 
										style={{ width: '1200px', height: '500px', objectFit: 'cover' }}
									/>
									<div className="project-content">
										<div className="content" style={{ color: '#fff' }}>
											<h3 style={{ color: '#fff' }}>Iekārtu pārvešana</h3>
											<span style={{ color: '#fff' }}>
												<i className="fa-sharp fa-solid fa-location-dot" /> Vidzemes reģions
											</span>
										</div>
										<h2 className="number" style={{ color: '#fff' }}>04</h2>
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
