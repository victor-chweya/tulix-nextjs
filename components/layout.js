import Head from 'next/head'
import Navigation from './navigation'
import Footer from './footer'
import SubscribeModal from './subscribe-modal'
import GoogleAnalytics from './google-analytics'

//In order to use a component that references document or window import this component using a dynamic import with srr: false
import dynamic from 'next/dynamic'
const DynamicGetButtonWidget = dynamic(() => import('../components/get-button-widget'), { ssr: false })



export default function Layout({ children }) {
  return (
    <>
      <Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
    		<link  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet" />
    		<link  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />				
      </Head>
			
			<Navigation />
      <main>{children}</main>
			<Footer />
			<SubscribeModal />
			<GoogleAnalytics />
			<DynamicGetButtonWidget />
    </>
  )
}
