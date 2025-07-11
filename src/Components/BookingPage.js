import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import BookingForm from "./BookingForm";

function BookingPage () {
    return (
        <>
          <Header />
          <main>
            <BookingForm />
          </main>
          <Footer />
        </>
    );
}
export default BookingPage;