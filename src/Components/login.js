import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../config/firebase';
import logo from '../Assets/40004863.jpg';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateForm = () => {
        if (!email.trim() || !password.trim()) {
            setError('Email and password are required.');
            return false;
        }
        setError('');
        return true;
    };

    const handleLogin = () => {
        if (validateForm()) {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setError(''); // Clear any previous error message
                    alert("Log in successful");
                    navigate('/home')
                    // Redirect to the home page or perform any other desired action.
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
    };

    return (
        <div className='main-container'>
            <h1 className='header1'>Welcome to our Login Page</h1>
            <div className='seat'>
                <div className='container1'>
                    {error && <div className="error-message">{error}</div>}
                    <input
                        className='email1'
                        type="text"
                        placeholder="Enter email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <br></br> <br></br>
                    <input
                        className='password1'
                        type="password"
                        placeholder="Enter password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <br></br>
                    <button className='login' onClick={handleLogin}>Login</button>
                    <br></br> <br></br>
                    
                    <br />
                    <Link to="/signUp" className='Register'>Not yet Registered? : Create an account</Link>
                </div>

                <img src={logo} alt="" style={{ width: '345px', height: '360px', flexShrink: '0' }} />
            </div>
        </div>
    );
}

export default Login;
