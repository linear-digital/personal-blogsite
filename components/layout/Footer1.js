import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer-section">
                {/* ./ footer-top */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-wrap">
                            <div className="footer-logo">
                                <Link href="/"><img src="/assets/img/logo/logo-light.png" alt="logo" /></Link>
                            </div>
                            <ul className="footer-menu-list">
                                <li><Link href="/">Home</Link></li>
                                <li>
                                    <Link href="/blogs">
                                        Categories
                                    </Link>
                                </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ./ footer-bottom */}
                <div className="copyright-area">
                    <div className="container">
                        <div className="copyright-wrap">
                            <p><span>GENZ IT </span> {new Date().getFullYear()}. All Rights Reserved.</p>
                            <ul className="list">
                                <li><Link href="/contact">.Contact</Link></li>
                                <li><Link href="/blogs">.Blog</Link></li>
                                <li><Link href="/contact">.Complaint</Link></li>
                                <li><Link href="/contact">.Advertise</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ./ copyright-area */}
            </footer>


        </>
    )
}
