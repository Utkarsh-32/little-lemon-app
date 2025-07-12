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
          
          <Route path='/booking' element={<><BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/></>} />
          <Route path='/about' element={<><Header /><About/> <Footer /></>} />
          <Route path='/confirmed' element={<ConfirmedBooking />} />
      </Routes>
  );
}

function App() {
  return (
    <Router className="App">
      <AppContent />
    </Router>
  );
}

export default App;
