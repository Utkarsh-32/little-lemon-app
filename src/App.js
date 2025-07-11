import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Specials from "./Components/Specials";
import Testimonials from "./Components/Testimonials";
import BookingPage from './Components/BookingPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route
           path='/'
           element={
            <>
              <Header />
              <HeroSection />
              <Specials />
              <Testimonials />
              <About />
              <Footer />
            </>
           }
           />
          
          <Route path='/booking' element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
