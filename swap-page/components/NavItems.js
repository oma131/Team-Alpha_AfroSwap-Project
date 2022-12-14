import React, { useState } from 'react'
import Link from 'next/link'

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
        <Link href="/">{HOME}</Link>
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
        <Link href="/learn">{LEARN}</Link>
      </p>
    </div>
  )

  function getNavIconClassName(name) {
    let className =
      'p-1 px-4 cursor-pointer border-[4px] border-transparent flex items-center'
    className +=
      name === selectedNavItem
        ? 'text-white border-zinc rounded-full'
        : ''
    return className
  }
}

export default NavItems
