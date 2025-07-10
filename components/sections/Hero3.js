"use client"
import Link from "next/link"
import Image from "next/image"

export default function Hero3() {
	return (
		<>
			<style jsx global>{`
				@media (max-width: 576px) {
					.hero-section {
						position: relative !important;
						padding-bottom: 100px !important;
					}
					.hero-section .hero-button {
						position: absolute !important;
						bottom: 30px !important;
						left: 50% !important;
						transform: translateX(-50%) !important;
						width: calc(100% - 40px) !important;
					}
					.hero-section .hero-button .theme-btn {
						width: 100% !important;
						text-align: center !important;
					}
				}
				.hero-section .slider-image {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: -1;
				}
				.hero-section .slider-image::after {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: rgba(0, 0, 0, 0.5);
				}
			`}</style>
			<section className="hero-section fix hero-2">
							<div className="slider-image">
								<Image
									src="/assets/img/hero/hero-image.jpg"
									alt="Hero Background"
									fill
									priority
									quality={90}
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div className="container">
								<div className="row g-4">
									<div className="col-lg-8">
										<div className="hero-content text-start">
											<h5
												data-animation="slideInRight"
												data-duration="1s"
												data-delay=".1s"
												style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
											>
									Kravu pārvadājumi ar manipulatoru
											</h5>
											<h1
												data-animation="slideInRight"
												data-duration="1s"
												data-delay=".2s"
												style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
											>
									Profesionāli Kravu <br />
									Pārvadājumi Vidzemē
											</h1>
											<div
												data-animation="slideInRight"
												data-duration="1s"
												data-delay=".3s"
												style={{ 
													textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
													marginTop: '20px',
													marginBottom: '30px'
												}}
											>
												<div style={{ 
													display: 'flex',
													flexDirection: 'column',
													gap: '12px',
													fontSize: '1.1rem',
													color: '#fff'
												}}>
													<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
														<i className="fa-solid fa-circle-check" style={{ color: '#FF4E4E', fontSize: '1.2rem' }}></i>
														<span>Celtniecības materiālu piegāde un pārvietošana</span>
													</div>
													<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
														<i className="fa-solid fa-circle-check" style={{ color: '#FF4E4E', fontSize: '1.2rem' }}></i>
														<span>Iekārtu un smagu priekšmetu transportēšana</span>
													</div>
													<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
														<i className="fa-solid fa-circle-check" style={{ color: '#FF4E4E', fontSize: '1.2rem' }}></i>
														<span>Kokmaterialu un baļķu pārvadāšana</span>
													</div>
													<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
														<i className="fa-solid fa-circle-check" style={{ color: '#FF4E4E', fontSize: '1.2rem' }}></i>
														<span>Konteineru un būvmateriālu pārvietošana</span>
													</div>
													<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
														<i className="fa-solid fa-circle-check" style={{ color: '#FF4E4E', fontSize: '1.2rem' }}></i>
														<span>Manipulatora pakalpojumi dažādiem darbiem</span>
													</div>
												</div>
											</div>
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
