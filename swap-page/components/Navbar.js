import { useRef } from "react";
import { useRouter } from "next/router";
// import "../styles/Home.module.css";
import navstyles from "../styles/Home.module.css";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";
// import logo from "../images/Logo.PNG";

function Navbar() {
  const navRef = useRef();
  // const hideNavbar = () => {
  //   navRef.current.classList.remove("responsive_nav");
  // };
  const navigate = useRouter();
  const navigateToSwap = () => {
    navigate.push("/swap");
  };

  const navigateHome = () => {
    navigate.push("/");
  };

  const navigateContact = () => {
    navigate.push("/contact");
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header id={navstyles["header"]}>
      <div>
        {/* <img id="logo" src={logo} alt="Logo" /> */}
        <h2 className="name">AFROSWAP</h2>
      </div>
      <nav ref={navRef} className={navstyles["nav"]}>
        <a className={navstyles["nav-white"]} onClick={navigateHome}>
          Home
        </a>
        <a className={navstyles["nav-white"]} href="/#">
          About us
        </a>

        <a className={navstyles["nav-white"]} onClick={navigateContact}>
          Learn more
        </a>
        <button
          className={navstyles["wallet-connect"]}
          onClick={navigateToSwap}
        >
          Swap Tokens
        </button>
        <button
          className={navstyles["nav-btn nav-close-btn"]}
          onClick={showNavbar}
        >
          {/* <FaTimes /> */}
        </button>
      </nav>
      <button className={navstyles["nav-btn"]} onClick={showNavbar}>
        {/* <FaBars /> */}
      </button>
    </header>
  );
}

export default Navbar;
