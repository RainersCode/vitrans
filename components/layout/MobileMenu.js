'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return <>
		<div className="mobile-menu fix mb-3 mean-container" aria-label="Mobilā izvēlne">
			<div className="mean-bar">
				<Link href="/#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }} aria-label="Izvēlnes poga">
					<span>
						<span>
							<span />
						</span>
					</span>
				</Link>
				<nav className="mean-nav" aria-label="Galvenā navigācija">
					<ul>
						<li>
							<Link href="/" aria-label="Doties uz sākumlapu">Sākums</Link>
						</li>
						<li>
							<Link href="#about" aria-label="Doties uz sadaļu par mani">Par mani</Link>
						</li>
						<li>
							<Link href="#services" aria-label="Doties uz pakalpojumu sadaļu">Pakalpojumi</Link>
						</li>
						<li>
							<Link href="#pricing" aria-label="Doties uz cenu sadaļu">Cenas</Link>
						</li>
						<li>
							<Link href="#contact" aria-label="Doties uz kontaktu sadaļu">Kontakti</Link>
						</li>
						<li className="has-dropdown">
							<Link href="#" aria-label="Atvērt juridisko informāciju">
								Juridiskā informācija
								<i className="fa-regular fa-plus" aria-hidden="true" />
							</Link>
							<ul className="submenu" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
								<li>
									<Link href="/privacy" aria-label="Doties uz privātuma politiku">Privātuma politika</Link>
								</li>
								<li>
									<Link href="/terms" aria-label="Doties uz lietošanas noteikumiem">Lietošanas noteikumi</Link>
								</li>
							</ul>
							<a 
								className="mean-expand" 
								onClick={() => handleAccordion(1)} 
								style={{ fontSize: 18 }}
								aria-label={isAccordion == 1 ? "Aizvērt apakšizvēlni" : "Atvērt apakšizvēlni"}
							>
								<i className="far fa-plus" aria-hidden="true" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</>
}
