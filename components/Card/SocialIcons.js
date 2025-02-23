import Link from 'next/link';
import React from 'react';

const SocialIcons = () => {
    return (
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
    );
};

export default SocialIcons;