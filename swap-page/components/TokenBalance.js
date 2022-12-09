import React, { useEffect, useState, useRef } from 'react'

import TransactionStatus from './TransactionStatus'
import toast, { Toaster } from 'react-hot-toast'

import { getTokenAddress, getTokenBalance } from '../utils/queries'

import { ClipboardIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import { ethers } from 'ethers'

const TokenBalance = ({ name, walletAddress }) => {
  const [balance, setBalance] = useState("_")
  const [copyIcon, setCopyIcon] = useState({icon: ClipboardIcon})
  const [tokenAddress, setTokenAddress] = useState()
  const [txPending, setTxPending] = useState(false)

  const notifyError = msg => toast.error(msg, { duration: 7000})
  const notifySuccess = () => toast.success("transaction Successful")

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance()
      fetchTokenAddress()
    } else {
      setBalance('0')
    }
  }, [name, walletAddress])

  const fetchTokenBalance = async () => {
    const bal = await getTokenBalance(name, walletAddress)
    const fBal = ethers.utils.formatUnits(bal.toString(), 18)
    setBalance(fBal.toString())
  }

  const fetchTokenAddress = async () => {
    const address = await getTokenAddress(name)
    setTokenAddress(address) 
  }


  return (
    <div className='flex mx-2'>
      <div className='flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg'>
        <p className='text-sm'>{name}</p>
        <p className='bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100'>
          {balance}
        </p>
      </div>

      <div className='flex items-center p-2 px-2 bg-[#B929D0] rounded-r-lg'>
        <copyIcon.icon
          className='h-6 cursor-pointer'
          onClick={() => {
            navigator.clipboard.writeText(tokenAddress)
            setCopyIcon({ icon: ClipboardCheckIcon })
          }}
        />
      </div>

      <Toaster />
    </div>
  )
}

export default TokenBalance
