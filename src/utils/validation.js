export const isRequired = (value) => {
    return value.trim() !== '';
};

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
export const isFutureDate = (date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0,0,0,0);
    return selectedDate >= today;
};
export const isValidGuestCount = (guests) => {
    const num = parseInt(guests);
    return num >= 1 && num <= 15;
};
export const isValidName = (name) => {
    return name.trim().length >= 2;
};
export const validateForm = (formData) => {
    const errors = {};

    if (!isRequired(formData.name)) {
        errors.name = 'Name is required';
    } else if (!isValidName(formData.name)) {
        errors.name = 'Name must be at least 2 characters';
    }
    if (!isRequired(formData.email)) {
        errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
        errors.email = 'Invalid email address';
    }
    if (!isRequired(formData.date)) {
        errors.date = 'Date is required';
    } else if (!isFutureDate(formData.date)) {
        errors.date = 'Date must be in the future';
    }
    if (!isRequired(formData.time)) {
        errors.time = 'Time is required';
    }
    if (!isValidGuestCount(formData.guests)) {
        errors.guests = 'Please select a valid number of guests';
    }
    if (!isRequired(formData.occasion)) {
        errors.occasion = 'Occasion is required';
    }
    return errors;
};