import Link from "next/link"
import ThemeSwitch from "../elements/ThemeSwitch"
import Menu from "./Menu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar, isSearch, handleSearch }) {
	return (
		<>
			<header className="main-header transparent">
				<div className="mid-header">
					<div className="container">
						<div className="mid-header-wrap">
							<div className="mid-header-left">
								<ul className="header-social">
									<li>
										<Link href="/#" className="facebook"><i className="lab la-facebook-f" /></Link>
									</li>
									<li>
										<Link href="/#" className="twitter"><i className="lab la-twitter" /></Link>
									</li>
									<li>
										<Link href="/#" className="instagram"><i className="lab la-instagram" /></Link>
									</li>
									<li>
										<Link href="/#" className="linkedin"><i className="lab la-linkedin-in" /></Link>
									</li>
									<li>
										<Link href="/#" className="pinterest"><i className="lab la-pinterest-p" /></Link>
									</li>
								</ul>
							</div>
							<div className="site-logo">
								<Link href="/">
									<img className="logo-dark" src="/assets/img/logo/logo-dark-2.png" alt="logo" />
									<img className="logo-light" src="/assets/img/logo/logo-dark.png" alt="logo" />
								</Link>
							</div>
							<div className="mid-header-right">
								<Link href="/contact" className="default-btn header-btn">Subscribe</Link>
								<Link href="/author-details" className="user"><i className="las la-user" /></Link>
							</div>
						</div>
					</div>
				</div>
				<div className={`${scroll ? "sticky-header sticky-fixed-top" : ""} `}>
					<div className="bottom-header">
						<div className="container">
							<div className="navigation-wrapper">
								<div className="navigation-inner">
									<div className="sidebar-icon">
										<button className="sidebar-trigger open" onClick={handleSidebar}>
											<span />
											<span />
											<span />
										</button>
									</div>
									{/* <div className="site-logo">
										<Link className="light" href="/"><img src="/assets/img/logo/logo-dark.png" alt="logo " /></Link>
										<Link className="dark" href="/"><img src="/assets/img/logo/logo-light.png" alt="logo " /></Link>
									</div> */}
									<nav className="navigation-menu">
										<Menu />
									</nav>
									<div className="header-right">
										<ThemeSwitch />
										<div className="search-icon dl-search-icon" onClick={handleSearch}>
											<i className="las la-search" />
										</div>
										<div className="mobile-menu-icon" onClick={handleMobileMenu}>
											<div className="burger-menu">
												<div className="line-menu line-half first-line" />
												<div className="line-menu" />
												<div className="line-menu line-half last-line" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* <HeaderAuthBtn /> */}
		</>
	)
}
