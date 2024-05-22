import API from '../../utils/api';
import {
    fetchInvestmentOpportunitiesSuccess,
    fetchInvestmentOpportunitiesFailure,
} from '../slices/investmentSlice';

export const fetchInvestmentOpportunities = () => async (dispatch) => {
    try {
        const response = await API.get('/investments');
        dispatch(fetchInvestmentOpportunitiesSuccess(response.data));
    } catch (error) {
        dispatch(fetchInvestmentOpportunitiesFailure(error.message));
    }
};