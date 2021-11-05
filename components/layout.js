import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'
import SubscribeModal from './subscribe-modal'
import GoogleAnalytics from './google-analytics'

//In order to use a component that references document or window import this component using a dynamic import with srr: false
import dynamic from 'next/dynamic'
const GetButtonWidget = dynamic(() => import('../components/get-button-widget'), { ssr: false })



export default function Layout({ children }) {
  return (
    <>
      <Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />								
      </Head>
			
			<Navigation />
      <main>{children}</main>
			<Footer />
			<SubscribeModal />
			<GoogleAnalytics />
			<GetButtonWidget />
    </>
  )
}
