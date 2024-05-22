import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStartupDetails } from '../../store/actions/startupActions';

const StartupProfile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const startup = useSelector(state => state.startups.currentStartup);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchStartupDetails(id));
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching startup details:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [dispatch, id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{startup.name}</h1>
            <p>{startup.description}</p>
            <p>Industry: {startup.industry}</p>
            <p>Stage: {startup.stage}</p>
            {/* Add more details about the startup here */}
        </div>
    );
};

export default StartupProfile;