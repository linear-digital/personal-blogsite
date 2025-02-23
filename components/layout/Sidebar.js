import Link from "next/link"

export default function Sidebar({ isSidebar, handleSidebar, isMobileMenu, handleMobileMenu }) {
	return (
		<>
			<div id="sidebar-area" className="sidebar-area">
				<button className="sidebar-trigger close" onClick={handleSidebar}>
					<svg className="sidebar-close" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="12.7px" viewBox="0 0 16 12.7" style={{ enableBackground: 'new 0 0 16 12.7' }} xmlSpace="preserve">
						<g>
							<rect x={0} y="5.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)" width={16} height={2} />
							<rect x={0} y="5.4" transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)" width={16} height={2} />
						</g>
					</svg>
				</button>
				<div className="sidebar-content">
					<div className="site-logo">
						<Link href="/#">
							<img className="logo-dark" src="/assets/img/logo/logo-dark-2.png" alt="logo" />
							<img className="logo-light" src="/assets/img/logo/logo-dark.png" alt="logo" />
						</Link>
					</div>
					<ul className="sidebar-info">
						<li><span>Call:</span> +8801824692955</li>
						<li><span>Email:</span> tamizrabbi@gmail.com</li>
					</ul>
					<ul className="sidebar-social">
						<li>
							<Link href="/#"><i className="lab la-facebook-f" /></Link>
						</li>
						<li>
							<Link href="/#"><i className="lab la-twitter" /></Link>
						</li>
						<li>
							<Link href="/#"><i className="lab la-youtube" /></Link>
						</li>
						<li>
							<Link href="/#"><i className="lab la-behance" /></Link>
						</li>
					</ul>
				</div>
			</div>

			{isSidebar &&
				<div id="sidebar-overlay" onClick={handleSidebar} />
			}

		</>
	)
}
