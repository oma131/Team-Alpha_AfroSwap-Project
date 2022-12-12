import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/newlogo.png";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// notification
const notify = () => {
  toast.success("Sent!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
function Footer() {
  return (
    <>
      <footer id={styles.footer}>
        <div className={styles.footera}>
          <p>Sign Up For Updates!!!</p>
          <div className={styles.newsletter}>
            <div className={styles.newslettera}>
              Kindly Subscribe to our newsletter to stay up to date on our
              important news and updates
            </div>
            <div className={styles.subscribe}>
              <form action="" method="get" id={styles.form}>
                <input type="email" placeholder="Email Address" />
                <button onClick={notify} type="submit">
                  Subscribe
                </button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
        <Image
          src={logo}
          alt="logo"
          className={styles.logo2}
          width={600}
          height={50}
        />
        <div className={styles.footerb}>
          <div>
            <h4 className={styles.h4}>Products</h4>
            <p>Features</p>
            <p>Workload</p>
            <p>Time</p>
          </div>
          <div>
            <h4 className={styles.h4}>Company</h4>
            <p>Real Work</p>
            <p>Community</p>
            <p>Careers</p>
          </div>
          <div>
            <h4 className={styles.h4}>Resources</h4>
            <p>Blog</p>
            <p>Help & About</p>
            <p>Customer</p>
          </div>
        </div>
        <div className={styles.reserved}>
          <span>&copy; </span>2022, All rights reserved.
        </div>
      </footer>
    </>
  );
}

export { Footer };
