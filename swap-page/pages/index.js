import link from "next/link";
import { Navbar } from "../components/NavBar";
import { Review } from "../components/Review";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import crown from "../public/crown.png";
import frame from "../public/Frame2.PNG";
import Link from "next/link";
function Home() {
  return (
    <div>
      <Navbar />
      <section id={styles.home}>
        <div id={styles.sectiona}>
          <div className={styles.Topic}>
            <div className={styles.stata}>if not Afroswap,what else?</div>
            <h1 className={styles.statb}>
              With a dash of Royalty, Swap your tokens
            </h1>
            <div className={styles.statc}>
              The most effective decentralized exchange-based platform for token
              trading.
            </div>
            <div>
              <Link href="./swap">
                <button className={styles.swap}>Swap Tokens</button>
              </Link>

              <Link href="#sectionca">
                <button className={styles.learn}>Join Our Community</button>
              </Link>
            </div>
          </div>
          <div className={styles.frame1}>
            <Image src={crown} alt="crown" width={600} height={500} />
          </div>
        </div>
      </section>
      <section id={styles.sectionb}>
        <h2 className={styles.Topicb}>Accessibility and Affordability</h2>
        <p>
          Have direct access to rare tokens and coins at affordable trade rates.
        </p>
        <div className={styles.frame2}>
          <Image src={frame} alt="Logo" width={600} height={400} />
        </div>
      </section>
      <div id="sectionca">
        <section id={styles.sectionc}>
          <h2 className={styles.Topicc}>Community</h2>
          <p className={styles.sectcheader}>CONNECT WITH US</p>
          <p className={styles.communityheader}>
            Join our community, Connect with other users, Get first hand reponse
            with issues concerning Afroswap
          </p>

          <div className={styles.listing}>
            <button className={styles.discord}>Join Discord</button>
          </div>
        </section>
      </div>
      <Review />
      <Footer />
    </div>
  );
}

export default Home;
