import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import test1 from "../public/test1.jpg";
import test3 from "../public/test3.jpg";
import test2 from "../public/test2.png";

class Review extends Component {
  render() {
    return (
      <div id={styles.review} className="bg-purplewhite dark:bg-midnight">
        <div id={styles.sectiontest}>
          <h2 className={styles.Testheading}>Reviews</h2>
          <p>What our users are saying about us</p>
        </div>

        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div id={styles.carouse}>
            <Image src={test1} width={50} height={50} alt="test1" />
            <div className={styles.myCarousel}>
              <h3>Mariam Abdul</h3>
              <h4 className={styles.profilejob}>Designer</h4>
              <p>
                The simple and intuitive design makes it easy to use, I would
                recommend AFROSWAP anyday
              </p>
            </div>
          </div>

          <div id={styles.carouse}>
            <Image src={test2} width={50} height={50} alt="test2"/>
            <div className={styles.myCarousel}>
              <h3>Favour Obi</h3>
              <h4 className={styles.profilejob}>Front-end dev</h4>
              <p>
                I highly recommend AFROSWAP to my peers,I could swap my tokens
                easily.
              </p>
            </div>
          </div>

          <div id={styles.carouse}>
            <Image src={test3} width={50} height={50} alt="test3" />
            <div className={styles.myCarousel}>
              <h3>Laura Ade</h3>
              <h4 className={styles.profilejob}>Blockchain developer</h4>
              <p>
                Kudos to the AFROSWAP team for building this simplified swapping
                app
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
// ReactDOM.render(<Review />, document.querySelector(".review"));
export { Review };
