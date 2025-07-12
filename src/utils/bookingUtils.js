export const initializeTimes = () => {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    if (typeof window.fetchAPI === 'function') {
        return window.fetchAPI(todayString);
    } else {
        console.log('API not found, using default values');
        return ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"];
    }
    
};

export const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        if (typeof window.fetchAPI === 'function') {
            return window.fetchAPI(action.date);
        } else {
            console.log('API not loaded, using current state');
            return state;
        }
    }
    return state;
};