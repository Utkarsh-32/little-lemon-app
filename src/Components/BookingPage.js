import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import BookingForm from "./BookingForm";
import { Helmet } from 'react-helmet-async';

function BookingPage ({availableTimes, dispatch, submitForm}) {
    return (
        <>
          <Helmet>
            <title>Book a Table | Little Lemon Restaurant</title>
            <meta name="description" content="Reserve your table at Little Lemon restaurant in Chicago. Book online for Mediterranean cuisine, fresh ingredients, and warm hospitality." />
            <meta name="keywords" content="book table, restaurant reservation, Chicago restaurant booking, Little Lemon reservation, Mediterranean restaurant booking" />
            <meta property="og:title" content="Book a Table | Little Lemon Restaurant" />
            <meta property="og:description" content="Reserve your table at Little Lemon restaurant in Chicago. Book online for Mediterranean cuisine, fresh ingredients, and warm hospitality." />
            <meta property="og:url" content="https://littlelemon.com/booking" />
            <meta property="twitter:title" content="Book a Table | Little Lemon Restaurant" />
            <meta property="twitter:description" content="Reserve your table at Little Lemon restaurant in Chicago. Book online for Mediterranean cuisine, fresh ingredients, and warm hospitality." />
            <link rel="canonical" href="https://littlelemon.com/booking" />
          </Helmet>
          <Header />
          <main>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
          </main>
          <Footer />
        </>
    );
}
export default BookingPage;