import { initializeTimes, updateTimes } from './bookingUtils';

describe('Booking Utils', () => {
    describe('initializeTimes', () => {
        test('returns the correct array of available times', () => {
            const expectedTimes = [
                "18:00",
                "18:30", 
                "19:00",
                "19:30",
                "20:00",
                "20:30",
                "21:00",
                "21:30",
                "22:00",
                "22:30"
            ];
            
            const result = initializeTimes();
            
            expect(result).toEqual(expectedTimes);
            expect(result).toHaveLength(10);
        });
        
        test('returns a new array each time it is called', () => {
            const firstCall = initializeTimes();
            const secondCall = initializeTimes();
            
            expect(firstCall).toEqual(secondCall);
            expect(firstCall).not.toBe(secondCall); // Different array references
        });
    });
    
    describe('updateTimes', () => {
        test('returns the same value that is provided in the state', () => {
            const mockState = [
                "18:00", "18:30", "19:00", "19:30", "20:00",
                "20:30", "21:00", "21:30", "22:00", "22:30"
            ];
            
            const mockAction = {
                type: 'UPDATE_TIMES',
                date: '2024-01-15'
            };
            
            const result = updateTimes(mockState, mockAction);
            
            // Should return the same times as initializeTimes() regardless of input
            const expectedTimes = initializeTimes();
            expect(result).toEqual(expectedTimes);
        });
        
        test('returns the same result regardless of the action type', () => {
            const mockState = ["18:00", "18:30"];
            
            const action1 = { type: 'UPDATE_TIMES', date: '2024-01-15' };
            const action2 = { type: 'SOME_OTHER_ACTION', date: '2024-01-16' };
            
            const result1 = updateTimes(mockState, action1);
            const result2 = updateTimes(mockState, action2);
            
            expect(result1).toEqual(result2);
        });
        
        test('returns the same result regardless of the state provided', () => {
            const mockState1 = ["18:00", "18:30"];
            const mockState2 = ["19:00", "19:30", "20:00"];
            
            const mockAction = {
                type: 'UPDATE_TIMES',
                date: '2024-01-15'
            };
            
            const result1 = updateTimes(mockState1, mockAction);
            const result2 = updateTimes(mockState2, mockAction);
            
            expect(result1).toEqual(result2);
        });
    });
}); 