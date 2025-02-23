
import { Inter, Jost } from 'next/font/google'
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/common-style.css"
import "/public/assets/css/dark-mode.css"
import "/public/assets/css/line-awesome.min.css"
import "/public/assets/css/main.css"
import "/public/assets/css/posty-color.css"
import "/public/assets/css/swiper.min.css"
import "/public/assets/css/venobox.min.css"
import fetchPublicationInfo from '@/lib/hasnode/publication'


const inter = Inter({
	weight: ['200', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--body-font",
	display: 'swap',
})

const jost = Jost({
	weight: ['200', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--secondary-font",
	display: 'swap',
})



export async function generateMetadata() {
	const publication = await fetchPublicationInfo();
	if (!publication) {
	  return {
		title: "GENZ IT Blogs",
		description: "A blog for the next generation of IT professionals.",
	  };
	}
	return {
	  title: publication.title,
	  description: publication.descriptionSEO,
	  icons: [
		{
		  url: publication.url,
		  href: publication.ogMetaData.image,
		  sizes: "192x192",
		  type: "image/png",
		},
	  ],
	  openGraph: {
		title: publication.title,
		description: publication.descriptionSEO,
		url: publication.url,
		siteName: publication.title,
		images: [publication.ogMetaData.image],
		type: "website",
	  },
	};
  }

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${jost.variable}`}>
				{children}
			</body>
		</html>
	)
}