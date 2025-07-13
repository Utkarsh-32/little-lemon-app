import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';


function ConfirmedBooking() {
    return (
        <>
            <Helmet>
                <title>Booking Confirmed | Little Lemon Restaurant</title>
                <meta name="description" content="Your table reservation at Little Lemon restaurant has been confirmed. We look forward to serving you Mediterranean cuisine in Chicago." />
                <meta name="robots" content="noindex, nofollow" />
                <meta property="og:title" content="Booking Confirmed | Little Lemon Restaurant" />
                <meta property="og:description" content="Your table reservation at Little Lemon restaurant has been confirmed. We look forward to serving you Mediterranean cuisine in Chicago." />
                <meta property="og:url" content="https://littlelemon.com/confirmed" />
                <meta property="twitter:title" content="Booking Confirmed | Little Lemon Restaurant" />
                <meta property="twitter:description" content="Your table reservation at Little Lemon restaurant has been confirmed. We look forward to serving you Mediterranean cuisine in Chicago." />
            </Helmet>
            <Header />
            <main style={{
                textAlign: 'center',
                padding: '50px 20px',
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    backgroundColor: '#f4ce14',
                    padding: '30px',
                    borderRadius: '10px',
                    maxWidth: '500px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    <h1 style={{color: '#495e57', marginBottom: '20px'}}>
                        Booking Confirmed! 🎉
                    </h1>
                    <p style={{color: '#333', fontSize: '18px', lineHeight: '1.6'}}>
                        Thank you for your reservation. We have received your booking request and will send you a confirmation email shortly.
                    </p>
                    <p style={{fontSize: '16px', color:"#666", marginTop: '20px'}}>
                        We look forward to serving you at Little Lemon!
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default ConfirmedBooking;