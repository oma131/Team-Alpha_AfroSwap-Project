import React, { useEffect, useState, useRef } from 'react'
import {
  hasValidAllowance,
  increaseAllowance,
  swapEthToToken,
  swapTokenToEth,
  swapTokenToToken,
} from '../utils/queries'

import { CogIcon, ArrowSmDownIcon } from '@heroicons/react/outline'
import SwapField from './SwapField'
import TransactionStatus from './TransactionStatus'
import toast, { Toaster } from 'react-hot-toast'
import { DEFAULT_VALUE, MATIC } from '../utils/SupportedCoins'
import { toEth, toWei } from '../utils/ether-utils'
import { useAccount } from 'wagmi'

const SwapComponent = () => {
  const [srcToken, setSrcToken] = useState(MATIC)
  const [destToken, setDestToken] = useState(DEFAULT_VALUE)

  const [inputValue, setInputValue] = useState()
  const [outputValue, setOutputValue] = useState()

  const inputValueRef = useRef()
  const outputValueRef = useRef()

  const isReversed = useRef(false)

  const INCREASE_ALLOWANCE = 'Increase allowance'
  const ENTER_AMOUNT = 'Enter an amount'
  const CONNECT_WALLET = 'Connect wallet'
  const SWAP = 'Swap'

  const srcTokenObj = {
    id: 'srcToken',
    value: inputValue,
    setValue: setInputValue,
    defaultValue: srcToken,
    ignoreValue: destToken,
    setToken: setSrcToken,
  }

  const destTokenObj = {
    id: 'destToken',
    value: outputValue,
    setValue: setOutputValue,
    defaultValue: destToken,
    ignoreValue: srcToken,
    setToken: setDestToken,
  }

  const [srcTokenComp, setSrcTokenComp] = useState()
  const [destTokenComp, setDestTokenComp] = useState()

  const [swapBtnText, setSwapBtnText] = useState(ENTER_AMOUNT)
  const [txPending, setTxPending] = useState(false)

  const notifyError = msg => toast.error(msg, { duration: 6000 })
  const notifySuccess = () => toast.success('Transaction completed.')
  const { address } = useAccount()

  // Functions for functionality
  const performSwap = async () => {
    setTxPending(true)
    let receipt

    if (srcToken === MATIC && destToken !== MATIC) {
      receipt = await swapEthToToken(destToken, inputValue)
    } else if (srcToken !== MATIC && destToken === MATIC) {
      receipt = await swapTokenToEth(srcToken, inputValue)
    } else {
      receipt = await swapTokenToToken(srcToken, destToken, inputValue)
    }

    setTxPending(false)

    if (receipt && !receipt.hasOwnProperty("transactionHash") ) {
      notifyError(receipt)
    }else {
      notifySuccess()
    }
  }

  const handleSwap = async () => {
    if(srcToken == MATIC && destToken !== MATIC) {
      performSwap()
    } else {
      setTxPending(true)
      const result = await hasValidAllowance(address,srcToken,inputValue)
      setTxPending(false)

      if (result) {
        performSwap()
      } else {
        handleInsufficientAllowance()
      }
    }
  }

  const handleIncreaseAllowance = async () => {
    setTxPending(true)
    await increaseAllowance(srcToken, inputValue)
    setTxPending(false)
  }  

  useEffect(() => {
    // Handling the text of the submit button

    if (!address) setSwapBtnText(CONNECT_WALLET)
    else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT)
    else setSwapBtnText(SWAP)
  }, [inputValue, outputValue, address])

  useEffect(() => {
    if (
      document.activeElement !== outputValueRef.current &&
      document.activeElement.ariaLabel !== 'srcToken' &&
      !isReversed.current
    )
      populateOutputValue(inputValue)

    setSrcTokenComp(<SwapField obj={srcTokenObj} ref={inputValueRef} />)

    if (inputValue?.length === 0) setOutputValue('')
  }, [inputValue, destToken])

  useEffect(() => {
    if (
      document.activeElement !== inputValueRef.current &&
      document.activeElement.ariaLabel !== 'destToken' &&
      !isReversed.current
    )
      populateInputValue(outputValue)

    setDestTokenComp(<SwapField obj={destTokenObj} ref={outputValueRef} />)

    if (outputValue?.length === 0) setInputValue('')

    // Resetting the isReversed value if its set
    if (isReversed.current) isReversed.current = false
  }, [outputValue, srcToken])

  return (
    <div className='bg-fuchsia-50 w-[35%] p-4 px-6 rounded-xl'>
      <div className='flex items-center justify-between text-purple-900 py-4 px-1'>
        <p>Swap</p>
        <CogIcon className='h-6' />
      </div>
      <div className='relative bg-[#F8D6FE] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-fuchsia-400'>
        {srcTokenComp}

        <ArrowSmDownIcon
          className='absolute left-1/2 -translate-x-1/2 -bottom-6 h-10 p-1 bg-[#F8D6FE] border-4 border-fuchsia-50 text-fuchsia-400 rounded-xl cursor-pointer hover:scale-110'
          onClick={handleReverseExchange}
        />
      </div>

      <div className='bg-[#F8D6FE] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-fuchsia-400'>
        {destTokenComp}
      </div>

      <button
        className={getSwapBtnClassName()}
        onClick={() => {
          if (swapBtnText === INCREASE_ALLOWANCE)
            handleIncreaseAllowance()
          else if (swapBtnText === SWAP) handleSwap()
        }}
      >
        {swapBtnText}
      </button>

      {txPending && <TransactionStatus />}

      <Toaster />
    </div>
  )

  // Front end functionality

  function handleReverseExchange(e) {
    // Setting the isReversed value to prevent the input/output values
    // being calculated in their respective side - effects
    isReversed.current = true

    // 1. Swap tokens (srcToken <-> destToken)
    // 2. Swap values (inputValue <-> outputValue)

    setInputValue(outputValue)
    setOutputValue(inputValue)

    setSrcToken(destToken)
    setDestToken(srcToken)
  }

  function getSwapBtnClassName() {
    let className = 'p-4 w-full my-2 rounded-xl'
    className +=
      swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET
        ? ' text-gray-200 bg-gray-400 pointer-events-none'
        : ' bg-gradient-to-r from-purple-700 via-purple-500 to-fuchsia-600 text-white'
    className += swapBtnText === INCREASE_ALLOWANCE ? ' bg-yellow-600' : ''
    return className
  }

  function populateOutputValue() {
    if (
      destToken === DEFAULT_VALUE ||
      srcToken === DEFAULT_VALUE ||
      !inputValue
    )
      return

    try {
      if (srcToken !== MATIC && destToken !== MATIC) setOutputValue(inputValue)
      else if (srcToken === MATIC && destToken !== MATIC) {
        const outValue = toEth(toWei(inputValue), 14)
        setOutputValue(outValue)
      } else if (srcToken !== MATIC && destToken === MATIC) {
        const outValue = toEth(toWei(inputValue, 14))
        setOutputValue(outValue)
      }
    } catch (error) {
      setOutputValue('0')
    }
  }

  function populateInputValue() {
    if (
      destToken === DEFAULT_VALUE ||
      srcToken === DEFAULT_VALUE ||
      !outputValue
    )
      return

    try {
      if (srcToken !== MATIC && destToken !== MATIC) setInputValue(outputValue)
      else if (srcToken === MATIC && destToken !== MATIC) {
        const outValue = toEth(toWei(outputValue, 14))
        setInputValue(outValue)
      } else if (srcToken !== MATIC && destToken === MATIC) {
        const outValue = toEth(toWei(outputValue), 14)
        setInputValue(outValue)
      }
    } catch (error) {
      setInputValue('0')
    }
  }

  function handleInsufficientAllowance() {
    notifyError(
      "INSUFFICIENT ALLOWANCE. Click on 'Increase allowance' to increase it.",
    )
    setSwapBtnText(INCREASE_ALLOWANCE)
  }
}

export default SwapComponent
