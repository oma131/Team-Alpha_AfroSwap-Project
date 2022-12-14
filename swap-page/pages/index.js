import link from "next/link";
import Head from 'next/head';
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Landing from "../components/Landing";
function Home() {
  return (
    <div className="bg-purplewhite dark:bg-midnight text-midnight dark:text-white">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default Home;
