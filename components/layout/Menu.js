'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu({ }) {
	const pathname = usePathname()
	return (
		<>
			<ul className="main-menu">
				<li className={pathname === "/" ? "active" : ""}>
					<Link href="/">Home</Link>
				</li>
				<li className={pathname === "/blogs" ? "active" : ""}>
					<Link href="/blogs">All Blogs</Link>
				</li>
				<li className={pathname === "/contact" ? "active" : ""}>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</>
	)
}
