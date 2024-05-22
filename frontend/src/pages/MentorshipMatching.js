import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMentors, requestMentorship } from '../../store/actions/mentorshipActions';

const MentorshipMatching = () => {
    const dispatch = useDispatch();
    const mentors = useSelector(state => state.mentorship.mentors);
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(fetchMentors());
    }, [dispatch]);

    const handleRequestMentorship = (mentorId) => {
        dispatch(requestMentorship(user.id, mentorId));
    };

    return (
        <div>
            <h1>Find a Mentor</h1>
            <ul>
                {mentors.map(mentor => (
                    <li key={mentor.id}>
                        <h2>{mentor.name}</h2>
                        <p>{mentor.bio}</p>
                        <button onClick={() => handleRequestMentorship(mentor.id)}>
                            Request Mentorship
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MentorshipMatching;