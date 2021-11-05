import Script from 'next/script'

export default function GoogleAnalytics(){
	return (
		<>
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-3GXNH3MP2E" strategy="lazyOnload" />
			<Script id="GA" strategy="lazyOnload">
				{
					`window.dataLayer = window.dataLayer || [];		
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());	

					gtag('config', 'G-3GXNH3MP2E');`
				}
			</Script>
		</>
	)
}


