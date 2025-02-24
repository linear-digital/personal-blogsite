import Link from 'next/link';
import React from 'react';

const SocialIcons = () => {
	return (
		<ul className="header-social">
			<li>
				<Link target='_blank' href="https://www.facebook.com/tamiz.uddin.09/" className="facebook"><i className="lab la-facebook-f" /></Link>
			</li>
			<li>
				<Link target='_blank' href="https://x.com/md_tamiz_uddin" className="twitter"><i className="lab la-twitter" /></Link>
			</li>
			<li>
				<Link target='_blank' href="https://www.instagram.com/tamiz.uddin.09/" className="instagram"><i className="lab la-instagram" /></Link>
			</li>
			<li>
				<Link href="https://www.linkedin.com/in/mdtamiz/" target='_blank' className="linkedin"><i className="lab la-linkedin-in" /></Link>
			</li>
			<li>
				<Link href="https://www.pinterest.com/tamizrabbi/" target='_blank' className="pinterest"><i className="lab la-pinterest-p" /></Link>
			</li>
		</ul>
	);
};

export default SocialIcons;