import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './store/actions/authActions';

const Login = () => {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);

    const handleSubmit = (email, password) => {
        dispatch(login(email, password));
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;