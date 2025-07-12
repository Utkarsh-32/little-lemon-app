import React, {useState} from 'react';
import '../BookingForm.css';
import { FaWineGlassAlt } from 'react-icons/fa';

function BookingForm({availableTimes, dispatch, submitForm}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("18:00");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            email: email,
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        };
        submitForm(formData);
    };

    return (
        <form onSubmit={handleSubmit} className='booking-form'>
            <h2>Book A Table</h2>
            
            <div className='form-row'>
               <label>What's your name? 😊</label>
               <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='e.g. John Doe' required/>
            </div>

            <div className='form-row'>
               <label>Your email, please ✉️:</label>
               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e.g. johndoe@mail.com' required/>
            </div>

            <div className='form-row'>
               <label>When would you like to dine? 📆</label>
               <input type='date' value={date} onChange={handleDateChange} required />
            </div>

            <div className='form-row'>
                <label>What time works best for you? ⏰</label>
                <select value={time} onChange={(e) => setTime(e.target.value)} required >
                   {availableTimes.map((timeSlot) => (
                       <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
                   ))}
                </select>
            </div>

            <div className='form-row'>
              <label>Number of Diners:</label>
              <input type="number" 
                   value={guests}
                   min="1"
                   max="15" 
                   onChange={(e) => setGuests(e.target.value)}
                   required />
            </div>
            
            <div className='form-row select-icon-wrapper'>
                <label>What's the occasion? 🎉</label>
                <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                 <option>Birthday</option>
                 <option>Anniversary</option>
                 <option>Other</option>
                </select>
            </div>

            <button type="submit">Book Now</button>
        </form>
    );
}
export default BookingForm;