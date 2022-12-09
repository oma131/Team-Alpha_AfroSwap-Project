//import Footer from '../components/Footer'
import Header from '../components/Header'
import SwapComponent from '../components/SwapComponent'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-[#0A020C]'>
      <Header />
      <SwapComponent />
      <Footer />
    </div>
  )
}