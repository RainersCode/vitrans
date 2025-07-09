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
			<section className="project-section section-padding fix" id="projects">
				<div className="container">
					<div className="section-title-area">
						<div className="section-title">
							<h6 className="wow fadeInUp">
								<i className="fa-regular fa-arrow-left-long" />
								Transporta galerija
								<i className="fa-regular fa-arrow-right-long" />
							</h6>
							<h2 className="wow fadeInUp" data-wow-delay=".2s">
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
									<img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" alt="Būvmateriālu pārvadāšana" />
									<div className="project-content">
										<div className="content" style={{ color: '#fff' }}>
											<h3 style={{ color: '#fff' }}>Būvmateriālu pārvadāšana</h3>
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
									<img src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" alt="Manipulatora pakalpojumi" />
									<div className="project-content">
										<div className="content" style={{ color: '#fff' }}>
											<h3 style={{ color: '#fff' }}>Manipulatora pakalpojumi</h3>
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
									<img src="https://images.unsplash.com/photo-1517490232338-06b912a786b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" alt="Iekārtu pārvietošana" />
									<div className="project-content">
										<div className="content" style={{ color: '#fff' }}>
											<h3 style={{ color: '#fff' }}>Iekārtu pārvietošana</h3>
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
									<img src="https://images.unsplash.com/photo-1627634777217-c864268db30c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" alt="Celtniecības materiālu piegāde" />
									<div className="project-content">
										<div className="content" style={{ color: '#fff' }}>
											<h3 style={{ color: '#fff' }}>Celtniecības materiālu piegāde</h3>
											<span style={{ color: '#fff' }}>
												<i className="fa-sharp fa-solid fa-location-dot" /> Vidzemes reģions
											</span>
										</div>
										<h2 className="number" style={{ color: '#fff' }}>04</h2>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="project-thumb">
									<img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" alt="Konteineru pārvadāšana" />
									<div className="project-content">
										<div className="content" style={{ color: '#fff' }}>
											<h3 style={{ color: '#fff' }}>Konteineru pārvadāšana</h3>
											<span style={{ color: '#fff' }}>
												<i className="fa-sharp fa-solid fa-location-dot" /> Vidzemes reģions
											</span>
										</div>
										<h2 className="number" style={{ color: '#fff' }}>05</h2>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
						<div className="project-dot" />
					</div>
				</div>
			</section>
		</>
	)
}
