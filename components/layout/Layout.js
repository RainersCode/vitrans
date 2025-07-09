"use client"
import { useEffect, useState } from "react"
// import AddClassBody from "../elements/AddClassBody"
import BackToTop from "../elements/BackToTop"
import Breadcrumb from "./Breadcrumb"
import Footer1 from "./footer/Footer1"
import Footer2 from "./footer/Footer2"
import Header4 from "./header/Header4"
import Offcanvas from "./Offcanvas"
import Search from "./Search"
import WhatsAppButton from "../elements/WhatsAppButton"

export default function Layout({
	headerStyle,
	footerStyle,
	breadcrumbTitle,
	children,
}) {
	const [scroll, setScroll] = useState(0)
	// MobileMenu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

	// OffCanvas
	const [isOffCanvas, setOffCanvas] = useState(false)
	const handleOffCanvas = () => setOffCanvas(!isOffCanvas)

	// Search
	const [isSearch, setSearch] = useState(false)
	const handleSearch = () => setSearch(!isSearch)

	useEffect(() => {
		const WOW = require("wowjs")
		window.wow = new WOW.WOW({
			live: false,
		})
		window.wow.init()

		const onScroll = () => {
			setScroll(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])
	return (
		<>
			<div id="top" />
			{/* <LinkddClassBody /> */}
			<div className="mouse-cursor cursor-outer" />
			<div className="mouse-cursor cursor-inner" />

			<Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />

			{/* Use Header4 for all pages */}
			<Header4
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isOffCanvas={isOffCanvas}
				handleOffCanvas={handleOffCanvas}
				isSearch={isSearch}
				handleSearch={handleSearch}
			/>

			<Search
				isSearch={isSearch}
				handleSearch={handleSearch} />

			<main className="main">
				{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

				{children}
			</main>

			{!footerStyle && <Footer1 />}
			{footerStyle == 1 ? <Footer1 /> : null}
			{footerStyle == 2 ? <Footer2 /> : null}

			<BackToTop target="#top" />
			<WhatsAppButton />
		</>
	)
}
