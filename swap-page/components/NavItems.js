import React, { useState } from 'react'
//import { ArrowSmUpIcon } from '@heroicons/react/outline'

const NavItems = () => {
  const HOME = 'Home'
  const SWAP = 'Swap'
  const LEARN = 'Learn More'

  const [selectedNavItem, setSelectedNavItem] = useState(SWAP)

  return (
    <div className='text-white h-fit flex items-center justify-around rounded-full mx-6'>
      <p
        className={getNavIconClassName(HOME)}
        onClick={() => setSelectedNavItem(HOME)}
      >
        {HOME}
      </p>
      <p
        className={getNavIconClassName(SWAP)}
        onClick={() => setSelectedNavItem(SWAP)}
      >
        {SWAP}
      </p>
      <p
        className={getNavIconClassName(LEARN)}
        onClick={() => setSelectedNavItem(LEARN)}
      >
        {LEARN}
      </p>
      {/* <p
        className={getNavIconClassName(CHART)}
        onClick={() => window.open('https://info.uniswap.org/#/', '_blank')}
      >
        {CHART}
        <ArrowSmUpIcon className='h-4 rotate-45' />
      </p> */}
    </div>
  )

  function getNavIconClassName(name) {
    let className =
      'p-1 px-4 cursor-pointer border-[4px] border-transparent flex items-center'
    className +=
      name === selectedNavItem
        ? 'text-white border-zinc-900 rounded-full'
        : ''
    return className
  }
}

export default NavItems
