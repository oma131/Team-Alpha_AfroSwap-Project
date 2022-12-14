import styles from "../styles/Home.module.css";
import Image from "next/image";
import crown from "../public/crown.png";
import bannerImg from "../public/bannerImg.png";
import { Review } from "./Review";
import Link from "next/link";

export default function Landing() {
    return(
        <>
            <section id={styles.home} className="bg-purplewhite dark:bg-midnight text-midnight dark:text-white">
                <div id={styles.sectiona} className="bg-purplewhite dark:bg-midnight text-midnight dark:text-white">
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
            <section id={styles.sectionb} className="bg-purplewhite dark:bg-midnight text-midnight dark:text-white">
                <div className={styles.sectionba}>
                    <h2 className={styles.Topicb}>Accessibility and Affordability</h2>
                    <p>
                    Have direct access to rare tokens and coins at affordable trade rates.
                    </p>
                    <div className={styles.frame2}>
                    <Image src={bannerImg} alt="banner" width={600} height={400} />
                    </div>
                </div>
            </section>
            <div id={styles.sectionca} className="bg-midnight dark:bg-purplewhite text-white dark:text-midnight">
                <section className={styles.sectionc}>
                    <h2 className={styles.Topicc}>Community</h2>
                    <p className={styles.sectcheader}>CONNECT WITH US</p>
                    <p className={styles.communityheader}>
                        Join our community, Connect with other users, Get first hand reponse
                        <br/> with issues concerning Afroswap
                    </p>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"  
                        fill="currentColor" 
                        class="bi bi-discord w-24 h-24" 
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                    > 
                        <path 
                            d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                        /> 
                        
                    </svg>
                    <div className={styles.listing}>
                        <button className={styles.discord}>Join Discord</button>
                    </div>
                </section>
            </div>
            <Review />
        </>
    );
}