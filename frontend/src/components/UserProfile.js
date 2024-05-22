import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const user = useSelector(state => state.auth.user);

    return (
        <div>
            <h2>User Profile</h2>
            <img src={user.profilePicture} alt="Profile" />
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>User Type: {user.userType}</p>
            <p>Bio: {user.bio}</p>
        </div>
    );
};

export default UserProfile;