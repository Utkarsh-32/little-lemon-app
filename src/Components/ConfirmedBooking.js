import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ConfirmedBooking() {
    return (
        <>
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
                        Thank you for your reservation. We have recieved your booking request and will send you a confirmation email shortly.
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