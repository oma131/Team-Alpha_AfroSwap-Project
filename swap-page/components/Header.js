import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import toast, { Toaster } from 'react-hot-toast'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import TokenBalance from './TokenBalance'

const Header = () => {
  const [tokenBalComp, setTokenBalComp] = useState()
  const { address } = useAccount()

  const notifyConnectWallet = () => {
    toast.error("Please, connect your wallet first", { duration: 5000 })
  }
  useEffect(() => {
    setTokenBalComp(
      <>
        <TokenBalance name={'W3L'} walletAddress={address}/>
        <TokenBalance name={'TMA'} walletAddress={address}/>
        <TokenBalance name={'AFS'} walletAddress={address}/>
      </>
    )
    if (!address) notifyConnectWallet()
  }, [address])
  return (
    <div className='fixed left-0 top-0 w-full px-8 py-4 flex items-center justify-between'>
      <div className='flex items-center'>
        <img src='./logo.svg' className='h-12' />
        <NavItems />
      </div>

       {/* <div className='flex items-center'>{tokenBalComp}</div> */}

      <div className='flex'><ConnectButton/></div>

      <Toaster />
    </div>
  )
}

export default Header
