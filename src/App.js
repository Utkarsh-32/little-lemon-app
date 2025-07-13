import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Specials from "./Components/Specials";
import Testimonials from "./Components/Testimonials";
import BookingPage from './Components/BookingPage';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import { useReducer } from 'react';
import { initializeTimes, updateTimes } from './utils/bookingUtils';
import ConfirmedBooking from './Components/ConfirmedBooking';
import { HelmetProvider, Helmet } from 'react-helmet-async';

function AppContent() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (typeof window.submitAPI === 'function') {
      const success = window.submitAPI(formData);
      if (success) {
        navigate('/confirmed');
      } else {
        alert('Booking failed. Please try again.');
      }
    } else {
      console.log('API not available. simulating success');
      navigate('/confirmed');
    }
  };
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Routes>
        <Route
           path='/'
           element={
            <>
              <Helmet>
                <title>Little Lemon - Mediterranean Restaurant in Chicago | Fresh Mediterranean Cuisine</title>
                <meta name="description" content="Little Lemon is a family-owned Mediterranean restaurant in Chicago serving traditional recipes with a modern twist. Fresh ingredients, bold flavors, and warm hospitality. Book your table today!" />
                <meta name="keywords" content="Mediterranean restaurant, Chicago restaurant, Greek salad, bruschetta, family restaurant, Chicago dining, Mediterranean cuisine, Little Lemon, restaurant booking, Chicago food" />
                <meta property="og:title" content="Little Lemon - Mediterranean Restaurant in Chicago" />
                <meta property="og:description" content="Little Lemon is a family-owned Mediterranean restaurant in Chicago serving traditional recipes with a modern twist. Fresh ingredients, bold flavors, and warm hospitality." />
                <meta property="og:url" content="https://littlelemon.com/" />
                <meta property="twitter:title" content="Little Lemon - Mediterranean Restaurant in Chicago" />
                <meta property="twitter:description" content="Little Lemon is a family-owned Mediterranean restaurant in Chicago serving traditional recipes with a modern twist. Fresh ingredients, bold flavors, and warm hospitality." />
                <link rel="canonical" href="https://littlelemon.com/" />
              </Helmet>
              <Header />
              <main id="main-content" role="main">
                <HeroSection />
                <Specials />
                <Testimonials />
                <About />
              </main>
              <Footer />
            </>
           }
           />
          
          <Route path='/booking' element={<><BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/></>} />
          <Route path='/about' element={<><Header /><main id="main-content" role="main"><About/></main> <Footer /></>} />
          <Route path='/confirmed' element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router className="App">
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
