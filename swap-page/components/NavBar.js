import Link from 'next/link';
import { useState } from 'react';
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import useDarkMode from '../utils/useDarkMode';
import Head from "next/head";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [colorTheme, setTheme] = useDarkMode();

  


  return (
    <>
      <nav className='fixed w-full top-0 flex items-center flex-wrap bg-purplewhite dark:bg-midnight bg-opacity-50 dark:bg-opacity-50 px-12 py-2 '>
        <Link href='/'>
          <div className='inline-flex items-center p-2 mr-2 h-12'>
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
            <div className='flex flex-1 items-center justify-end md:justify-start'>
                <Link href='/'>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-zinc dark:text-white items-center justify-center  hover:text-purple '>
                        Discover
                    </div>
                </Link>
                <Link href='/'>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-zinc dark:text-white items-center justify-center  hover:text-purple'>
                        About Us
                    </div>
                </Link>
                <Link href='/learn'>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-zinc dark:text-white items-center justify-center  hover:text-purple'>
                        Learn more
                    </div>
                </Link>
            </div>
        </div>
        
        <Link href="/swap">
            <div
            class="inline-block rounded-lg bg-gradient-to-r from-purple via-fuchsia to-fuchsia px-4 py-3 text-sm text-lg font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            >
            Swap Token
            </div>
        </Link>
        {colorTheme === "light" ? (
          <SunIcon className="w-10 h-10 text-yellow " role="button" onClick={() => setTheme('light')} />
          ) : (
          <MoonIcon className="w-10 h-10 text-purple " role="button" onClick={() => setTheme('dark')} />
        )}
      </nav>
    </>
  );
};