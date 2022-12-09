//import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import TokenBalance from './TokenBalance'

const Footer = () => {
    // const [tokenBalComp, setTokenBalComp] = useState()
    const { address } = useAccount()

    // useEffect(() => {
    //     setTokenBalComp(
    //     <>
            
    //     </>
    //     )
    // }, [address])
  return (
    <div className='flex fixed bottom-4 left-1/2 -translate-x-1/2'>
      <TokenBalance name={'W3L'} walletAddress={address}/>
        <TokenBalance name={'TMA'} walletAddress={address}/>
        <TokenBalance name={'AFS'} walletAddress={address}/>
    </div>
  )
}

export default Footer