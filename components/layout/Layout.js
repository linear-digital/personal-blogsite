
'use client'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from "./BackToTop"
import Footer1 from './Footer1'
import Header1 from "./Header1"
import MobileMenu from "./MobileMenu"
import SearchBox from "./SearchBox"
import Sidebar from "./Sidebar"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
// Create a client
const queryClient = new QueryClient()
export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }) {
	const [scroll, setScroll] = useState(false)
	// MoblileMenu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => setMobileMenu(!isMobileMenu)
	// Sidebar
	const [isSidebar, setSidebar] = useState(false)
	const handleSidebar = () => {
		setSidebar(!isSidebar)
		!isSidebar ? document.body.classList.add("open-sidebar") : document.body.classList.remove("open-sidebar")
	}
	// Search
	const [isSearch, setSearch] = useState(false)
	const handleSearch = () => {
		setSearch(!isSearch)
		!isSearch ? document.body.classList.add("open-search-box") : document.body.classList.remove("open-search-box")
	}

	useEffect(() => {
		const WOW = require('wowjs')
		window.wow = new WOW.WOW({
			live: false
		})
		window.wow.init()

		const onScroll = () => {
			setScroll(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])
	return (
		<QueryClientProvider client={queryClient}>
			<div id="top" />
			<SearchBox
				isSearch={isSearch}
				handleSearch={handleSearch}
			/>
			<Header1
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
				isSearch={isSearch}
				handleSearch={handleSearch}
			/>

			<Sidebar
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
			/>

			<MobileMenu
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
			/>
			{children}

			{/* <NewsLetter1 /> */}
			< Footer1 />
			<BackToTop target="#top" />
			<AddClassBody />
		</QueryClientProvider>
	)
}
