import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Specials from "./Components/Specials"
import Testimonials from "./Components/Testimonials"

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Specials />
      <Testimonials />
      <About />
      {/*<Footer /> */}
    </div>
  );
}

export default App;
