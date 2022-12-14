import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import TokenBalance from './TokenBalance'

const Header = () => {
  const [tokenBalComp, setTokenBalComp] = useState()
  const { address } = useAccount()

  useEffect(() => {
    setTokenBalComp(
      <>
        <TokenBalance name={'W3L'} walletAddress={address}/>
        <TokenBalance name={'TMA'} walletAddress={address}/>
        <TokenBalance name={'AFS'} walletAddress={address}/>
      </>
    )
  }, [address])
  return (
    <div className='fixed left-0 top-0 w-full px-8 py-4 flex items-center justify-between'>
      <div className='flex items-center'>
        <img src='./logo.svg' alt="Afroswap Logo" className='h-12' />
        <NavItems />
      </div>

      <div className='flex'><ConnectButton/></div>
    </div>
  )
}

export default Header
