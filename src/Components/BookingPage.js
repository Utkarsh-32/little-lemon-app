import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import BookingForm from "./BookingForm";

function BookingPage ({availableTimes, dispatch, submitForm}) {
    return (
        <>
          <Header />
          <main>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
          </main>
          <Footer />
        </>
    );
}
export default BookingPage;