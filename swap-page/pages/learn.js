import { Navbar } from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Swap() {
  return (
    <div>
      <Navbar />
      <div>
        <section id={styles.Learn}>
          <div id={styles.learncard}>
            <div className={styles.learncarda}>
              <h3>Learn More</h3>
              <p className={styles.learninstruction}>
                Step by Step process to effectively Swap your Tokens on Afroswap
              </p>
            </div>

            <div className={styles.listing}>
              <ul>
                <li>
                  Click on the Swap Token button and connect to your wallet,by
                  clicking on connect wallet button
                </li>
                <li>Ensure your are on the Polygon (Mumbai) network</li>
                <li>
                  Select the token you wish to swap by clicking the dropdown
                  menu
                </li>
                <li>
                  The power is in your hands,switch up the arrangement by
                  clicking the arrown button facing down
                </li>
                <li>Click on Swap</li>
                <li>And thats all,very simple</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
