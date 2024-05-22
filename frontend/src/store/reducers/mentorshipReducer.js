const initialState = {
    mentors: [],
    mentorships: [],
    error: null,
};

const mentorshipReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MENTORS_SUCCESS':
            return {
                ...state,
                mentors: action.payload,
                error: null,
            };
        case 'FETCH_MENTORS_FAILURE':
            return {
                ...state,
                mentors: [],
                error: action.payload,
            };
        case 'REQUEST_MENTORSHIP_SUCCESS':
            return {
                ...state,
                mentorships: [...state.mentorships, action.payload],
                error: null,
            };
        case 'REQUEST_MENTORSHIP_FAILURE':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default mentorshipReducer;