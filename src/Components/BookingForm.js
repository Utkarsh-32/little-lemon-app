import React, {useState} from 'react';
import '../BookingForm.css';
import { validateForm } from '../utils/validation';

function BookingForm({availableTimes, dispatch, submitForm}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("18:00");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("Birthday");
    const [errors, setErrors] = useState({});

    // Helper function to validate individual fields
    const validateField = (fieldName, value) => {
        const formData = {
            name: fieldName === 'name' ? value : name,
            email: fieldName === 'email' ? value : email,
            date: fieldName === 'date' ? value : date,
            time: fieldName === 'time' ? value : time,
            guests: fieldName === 'guests' ? value : guests,
            occasion: fieldName === 'occasion' ? value : occasion
        };
        
        const fieldErrors = validateForm(formData);
        return fieldErrors[fieldName] || '';
    };

    // Change handlers - clear errors when user starts typing
    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        if (errors.name) {
            setErrors(prev => ({ ...prev, name: '' }));
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (errors.email) {
            setErrors(prev => ({ ...prev, email: '' }));
        }
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        if (errors.date) {
            setErrors(prev => ({ ...prev, date: '' }));
        }
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    };

    const handleTimeChange = (e) => {
        const value = e.target.value;
        setTime(value);
        if (errors.time) {
            setErrors(prev => ({ ...prev, time: '' }));
        }
    };

    const handleGuestsChange = (e) => {
        const value = e.target.value;
        setGuests(value);
        if (errors.guests) {
            setErrors(prev => ({ ...prev, guests: '' }));
        }
    };

    const handleOccasionChange = (e) => {
        const value = e.target.value;
        setOccasion(value);
        if (errors.occasion) {
            setErrors(prev => ({ ...prev, occasion: '' }));
        }
    };

    // Blur handlers - validate when user leaves a field
    const handleNameBlur = () => {
        if (name.trim() !== '') {
            const nameError = validateField('name', name);
            setErrors(prev => ({ ...prev, name: nameError }));
        }
    };

    const handleEmailBlur = () => {
        if (email.trim() !== '') {
            const emailError = validateField('email', email);
            setErrors(prev => ({ ...prev, email: emailError }));
        }
    };

    const handleDateBlur = () => {
        if (date.trim() !== '') {
            const dateError = validateField('date', date);
            setErrors(prev => ({ ...prev, date: dateError }));
        }
    };

    const handleTimeBlur = () => {
        if (time.trim() !== '') {
            const timeError = validateField('time', time);
            setErrors(prev => ({ ...prev, time: timeError }));
        }
    };

    const handleGuestsBlur = () => {
        if (guests.toString().trim() !== '') {
            const guestsError = validateField('guests', guests);
            setErrors(prev => ({ ...prev, guests: guestsError }));
        }
    };

    const handleOccasionBlur = () => {
        if (occasion.trim() !== '') {
            const occasionError = validateField('occasion', occasion);
            setErrors(prev => ({ ...prev, occasion: occasionError }));
        }
    };

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
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            setErrors({});
            submitForm(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='booking-form' role="form" aria-labelledby="booking-title">
            <h2 id="booking-title">Book A Table</h2>
            
            <div className='form-row'>
               <label htmlFor="name">What's your name? 😊</label>
               <input 
                   id="name"
                   type='text' 
                   value={name} 
                   onChange={handleNameChange} 
                   onBlur={handleNameBlur}
                   placeholder='e.g. John Doe' 
                   required 
                   className={errors.name ? 'error' : ''}
                   aria-describedby={errors.name ? 'name-error' : undefined}
                   aria-invalid={errors.name ? 'true' : 'false'}
               />
               {errors.name && <span id="name-error" className='error-message' role="alert">{errors.name}</span>}
            </div>

            <div className='form-row'>
               <label htmlFor="email">Your email, please ✉️:</label>
               <input 
                   id="email"
                   type="email" 
                   value={email} 
                   onChange={handleEmailChange} 
                   onBlur={handleEmailBlur}
                   placeholder='e.g. johndoe@mail.com' 
                   required 
                   className={errors.email ? 'error' : ''}
                   aria-describedby={errors.email ? 'email-error' : undefined}
                   aria-invalid={errors.email ? 'true' : 'false'}
               />
               {errors.email && <span id="email-error" className='error-message' role="alert">{errors.email}</span>}
            </div>

            <div className='form-row'>
               <label htmlFor="date">When would you like to dine? 📆</label>
               <input 
                   id="date"
                   type='date' 
                   value={date} 
                   onChange={handleDateChange} 
                   onBlur={handleDateBlur}
                   required 
                   className={errors.date ? 'error' : ''}
                   aria-describedby={errors.date ? 'date-error' : undefined}
                   aria-invalid={errors.date ? 'true' : 'false'}
               />
               {errors.date && <span id="date-error" className='error-message' role="alert">{errors.date}</span>}
            </div>

            <div className='form-row'>
                <label htmlFor="time">What time works best for you? ⏰</label>
                <select 
                    id="time"
                    value={time} 
                    onChange={handleTimeChange} 
                    onBlur={handleTimeBlur}
                    required 
                    className={errors.time ? 'error' : ''}
                    aria-describedby={errors.time ? 'time-error' : undefined}
                    aria-invalid={errors.time ? 'true' : 'false'}
                >
                   {availableTimes.map((timeSlot) => (
                       <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
                   ))}
                </select>
                {errors.time && <span id="time-error" className='error-message' role="alert">{errors.time}</span>}
            </div>

            <div className='form-row'>
              <label htmlFor="guests">Number of Diners:</label>
              <input 
                  id="guests"
                  type="number" 
                  value={guests}
                  min="1"
                  max="15" 
                  onChange={handleGuestsChange}
                  onBlur={handleGuestsBlur}
                  required 
                  className={errors.guests ? 'error' : ''}
                  aria-describedby={errors.guests ? 'guests-error' : undefined}
                  aria-invalid={errors.guests ? 'true' : 'false'}
              />
              {errors.guests && <span id="guests-error" className='error-message' role="alert">{errors.guests}</span>}
            </div>
            
            <div className='form-row select-icon-wrapper'>
                <label htmlFor="occasion">What's the occasion? 🎉</label>
                <select 
                    id="occasion"
                    value={occasion} 
                    onChange={handleOccasionChange} 
                    onBlur={handleOccasionBlur}
                    className={errors.occasion ? 'error' : ''} 
                    required
                    aria-describedby={errors.occasion ? 'occasion-error' : undefined}
                    aria-invalid={errors.occasion ? 'true' : 'false'}
                >
                 <option>Birthday</option>
                 <option>Anniversary</option>
                 <option>Other</option>
                </select>
                {errors.occasion && <span id="occasion-error" className='error-message' role="alert">{errors.occasion}</span>}
            </div>

            <button type="submit" aria-label="Submit booking form">Book Now</button>
        </form>
    );
}
export default BookingForm;