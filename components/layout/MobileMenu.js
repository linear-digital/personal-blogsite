'use client'
import Link from "next/link"

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {

	return (
		<>
			<div className={`mobile-navigation-menu ${isMobileMenu ? "open-mobile-menu" : ""}`}>
				<button id="mobile-menu-close" onClick={handleMobileMenu}><i className="la la-close" /></button>
				<ul className="main-menu">
					
					<li><Link href="/">Home</Link></li>
					<li><Link href="/blogs">All Blogs</Link></li>
					<li><Link href="/contact">Contact</Link></li>
				</ul></div>

		</>
	)
}
