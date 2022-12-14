import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Landing from "../components/Landing";
function Home() {
  return (
    <div className="bg-purplewhite dark:bg-midnight text-midnight dark:text-white">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default Home;
