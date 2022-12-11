//import Footer from '../components/Footer'
import Header from '../components/SwapHeader'
import SwapComponent from '../components/SwapComponent'
import Footer from '../components/SwapFooter'

export default function Swap() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-[#0A020C]'>
      <Header />
      <SwapComponent />
      <Footer />
    </div>
  )
}