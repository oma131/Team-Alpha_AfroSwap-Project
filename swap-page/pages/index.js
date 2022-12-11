
import { Navbar } from "../components/NavBar";
import "../styles/Home.module.css";
function Home() {

  return (
    <div>
      <Navbar />
      <section id="home">
        <div id="section-a">
          <div className="Topic">
            <div className="stat-a">if not Afroswap,what else?</div>
            <h1 className="stat-b">With a dash of Royalty, Swap your tokens</h1>
            <div className="stat-c">
              The most effective decentralized exchange-based platform for token
              trading.
            </div>
            <div>
              <button className="swap" >
                Swap Tokens
              </button>
              <a href="#section-c">
                <button className="learn">Join Our Community</button>
              </a>
            </div>
          </div>
          <div className="frame1">{/* <img src={frame1} alt="Logo" />; */}</div>
        </div>
      </section>
      <section id="section-b">
        <h2 className="Topic-b">Accessibility and Affordability</h2>
        <p>
          Have direct access to rare tokens and coins at affordable trade rates.
        </p>
        <div className="frame2">{/* <img src={frame2} alt="Logo" />; */}</div>
      </section>
      <section id="section-c">
        <h2 className="Topic-c">Community</h2>
        <p className="community-header">
          Join our community and connect with other users, and also get first
          hand reponse with issues concerning Afroswap
        </p>

        <div className="listing">
          <button className="discord">
            {/* <FaDiscord /> Join Discord */}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;