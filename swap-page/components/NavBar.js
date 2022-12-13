import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='sticky top-0 flex items-center flex-wrap bg-midnight px-12 py-2 '>
        <Link href='/'>
          <div className='inline-flex items-center p-2 mr-2 '>
            <img src='./fullLogo.svg' alt='Afroswap Main logo' />
          </div>
        </Link>
        <button
          className=' block p-3 hover:bg-purple rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                <Link href='/'>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center  hover:text-purple '>
                        Discover
                    </div>
                </Link>
                <Link href='/'>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center  hover:text-purple'>
                        About Us
                    </div>
                </Link>
                <Link href='/learn'>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center  hover:text-purple'>
                        Learn more
                    </div>
                </Link>
            </div>
        </div>
        <Link href="/swap">
            <div
            class="inline-block rounded bg-gradient-to-r from-purple via-fuchsia to-fuchsia px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            >
            Swap Token
            </div>
        </Link>
      </nav>
    </>
  );
};