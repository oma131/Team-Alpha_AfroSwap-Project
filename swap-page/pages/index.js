//import Footer from '../components/Footer'
import Header from "../components/Header";
import SwapComponent from "../components/SwapComponent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
// className = "w-full h-screen flex flex-col items-center justify-center bg-[#0A020C]";
export default function Home() {
  return (
    <div>
      <Landing />
      {/* <SwapComponent /> */}
      {/* <Footer /> */}
    </div>
  );
}

// import React, { Component } from "react";
// export class index extends Component {
//   render() {
//     return (
//       <body>
//         <Navbar />
//         <section id="home">
//           <div id="section-a">
//             <div className="Topic">
//               <div className="stat-a">if not Afroswap,what else?</div>
//               <h1 className="stat-b">
//                 With a dash of Royalty, Swap your tokens
//               </h1>
//               <div className="stat-c">
//                 The most effective decentralized exchange-based platform for
//                 token trading.
//               </div>
//               <div>
//                 <button className="swap" onClick={navigateToSwap}>
//                   Swap Tokens
//                 </button>
//                 <a href="#section-c">
//                   <button className="learn">Community</button>
//                 </a>
//               </div>
//             </div>
//             <div className="frame1">
//               <img src={frame1} alt="Logo" />;
//             </div>
//           </div>
//         </section>
//         <section id="section-b">
//           <h2 className="Topic-b">Accessibility and Affordability</h2>
//           <p>
//             Have direct access to rare tokens and coins at affordable trade
//             rates.
//           </p>
//           <div className="frame2">
//             <img src={frame2} alt="Logo" />;
//           </div>
//         </section>
//         <section id="section-c">
//           <h2 className="Topic-c">Community</h2>
//           <p className="community-header">
//             Join our community and connect with other users, and also get first
//             hand reponse with issues concerning Afroswap
//           </p>

//           <div className="listing">
//             <button className="discord">
//               <FaDiscord /> Join Discord
//             </button>
//           </div>
//         </section>
//         <Testimonial />
//         <Footer />
//       </body>
//     );
//   }
// }

// export default index
