import Link from 'next/link'

export const Navbar = () => {

  return (
    <header aria-label="Site Header" className="bg-midnight text-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <img src='./fullLogo.svg' alt="Afroswap Logo" className='h-10' />
                </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="nav-list flex items-center gap-6 text-sm">
                    <li>
                    <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/"
                    >
                        Discover
                    </a>
                    </li>

                    <li>
                    <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/"
                    >
                        About Us
                    </a>
                    </li>

                    <li>
                    <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/learn"
                    >
                        Learn More
                    </Link>
                    </li>
                </ul>
                </nav>

                <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                    <div className="rounded-md bg-gradient-to-r from-purple via-fuchsia to-fuchsia text-white px-5 py-3.5 text-sm font-medium shadow">
                        <Link href="/swap">Swap Token</Link>
                    </div>
                </div>

                <div className="block md:hidden">
                    <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </header>

  );
};