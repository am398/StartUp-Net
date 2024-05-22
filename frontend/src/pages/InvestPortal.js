import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvestmentOpportunities } from '../../store/actions/investmentActions';

const InvestmentPortal = () => {
    const dispatch = useDispatch();
    const investmentOpportunities = useSelector(state => state.investments.opportunities);

    useEffect(() => {
        dispatch(fetchInvestmentOpportunities());
    }, [dispatch]);

    return (
        <div>
            <h1>Investment Opportunities</h1>
            <ul>
                {investmentOpportunities.map(opportunity => (
                    <li key={opportunity.id}>
                        <h2>{opportunity.startup.name}</h2>
                        <p>{opportunity.startup.description}</p>
                        <p>Funding Goal: {opportunity.fundingGoal}</p>
                        <button>Invest</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InvestmentPortal;