import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import logo from '../public/logo.svg'
import TokenBalance from './TokenBalance'

import Image from "next/image"

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
    <div className='fixed left-0 top-0 w-full px-8 py-4 flex items-center justify-around'>
      <div className='flex justify-end'>
        <Image src={logo} alt="Afroswap Logo" className='h-12 w-12' />
        <NavItems />
      </div>

      <div className='flex'><ConnectButton/></div>
    </div>
  )
}

export default Header
