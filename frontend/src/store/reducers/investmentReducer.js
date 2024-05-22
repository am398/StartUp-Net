const initialState = {
    opportunities: [],
    error: null,
};

const investmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_INVESTMENT_OPPORTUNITIES_SUCCESS':
            return {
                ...state,
                opportunities: action.payload,
                error: null,
            };
        case 'FETCH_INVESTMENT_OPPORTUNITIES_FAILURE':
            return {
                ...state,
                opportunities: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default investmentReducer;