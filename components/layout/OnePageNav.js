import Link from "next/link"

export default function OnePageNav() {
	return (
		<>
			<nav id="mobile-menu" className="d-none d-xl-block">
				<ul>
					<li>
						<Link href="/">Sākums</Link>
					</li>
					<li>
						<Link href="#about">Par mani</Link>
					</li>
					<li>
						<Link href="#services">Pakalpojumi</Link>
					</li>
					<li>
						<Link href="#pricing">Cenas</Link>
					</li>
					<li>
						<Link href="#contact">Kontakti</Link>
					</li>
					<li className="has-dropdown">
						<Link href="#">
							Juridiskā informācija
							<i className="fa-regular fa-plus" />
						</Link>
						<ul className="submenu">
							<li>
								<Link href="/privacy">Privātuma politika</Link>
					</li>
					<li>
								<Link href="/terms">Lietošanas noteikumi</Link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</>
	)
}
