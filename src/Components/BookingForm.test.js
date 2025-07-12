import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock the reducer functions and state
const mockAvailableTimes = [
    "18:00", "18:30", "19:00", "19:30", "20:00", 
    "20:30", "21:00", "21:30", "22:00", "22:30"
];

const mockDispatch = jest.fn();

describe('BookingForm Component', () => {
    test('renders static text elements', () => {
        render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
        
        // Test for main heading
        expect(screen.getByText('Book A Table')).toBeInTheDocument();
        
        // Test for form labels
        expect(screen.getByText("What's your name? 😊")).toBeInTheDocument();
        expect(screen.getByText('Your email, please ✉️:')).toBeInTheDocument();
        expect(screen.getByText('When would you like to dine? 📆')).toBeInTheDocument();
        expect(screen.getByText('What time works best for you? ⏰')).toBeInTheDocument();
        expect(screen.getByText('Number of Diners:')).toBeInTheDocument();
        expect(screen.getByText("What's the occasion? 🎉")).toBeInTheDocument();
        
        // Test for submit button
        expect(screen.getByText('Book Now')).toBeInTheDocument();
    });
}); 