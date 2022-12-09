//const address = "0x19273e19c5587eB840212233609e27eD6Ae6eDB5";

import { ethers } from 'ethers'
import SwapABI from '../utils/Swap.json'
import TokenABI from '../utils/Token.json'

export const tokenContract = async address => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const { ethereum } = window

  if (ethereum) {
    const signer = provider.getSigner()

    const contractReader = new ethers.Contract(address, TokenABI.abi, signer)

    return contractReader
  }
}

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const { ethereum } = window

  if (ethereum) {
    const signer = provider.getSigner()

    const contractReader = new ethers.Contract(
      '0x19273e19c5587eB840212233609e27eD6Ae6eDB5',
      SwapABI.abi,
      signer,
    )

    return contractReader
  }
}