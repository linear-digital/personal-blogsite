
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
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

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
		icons: {
			icon: '/favicon.ico',
		},
		
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
      <head>
        <meta name="google-adsense-account" content="ca-pub-4236044300590126" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4236044300590126"
          crossOrigin="anonymous"
        ></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9R90BV9HK6"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9R90BV9HK6');
          `,
        }} />
      </head>
      <body className={`${inter.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}

