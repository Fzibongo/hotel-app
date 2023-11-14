import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { auth } from '../config/firebase';
import logo from '../Assets/40004863.jpg';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateForm = () => {
        if (!name.trim() || !email.trim() || !password.trim()) {
            setError('Name, email, and password are required.');
            return false;
        } else if (password.length < 6) {
            setError('Password should be at least 6 characters.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSignup = () => {
        if (validateForm()) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setError(''); // Clear any previous error message
                    alert("Sign up successful");
                    // Redirect to the home page or perform any other desired action.
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
    };

    return (
        <div className='main-container'>
            <h1 className='header1'>Welcome to our Sign-Up Page</h1>
            <div className='seat'>
                <div className='container1'>
                    {error && <div className="error-message">{error}</div>}
                    <input
                        className='name'
                        type="text"
                        placeholder="Username"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <br></br><br></br>
                    <input
                        className='email'
                        type="text"
                        placeholder="Enter email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <br></br> <br></br>
                    <input
                        className='password'
                        type="password"
                        placeholder="Enter password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <br></br><br></br>
                    <button className='SignUp' onClick={handleSignup}>Sign Up</button>
                    {error ? (
                        <div className="error-message">{error}</div>
                    ) : (
                        <div className="success-message">Validation successful</div>
                    )}
                    <br></br> <br></br>
                    <Link to="/login" className='Already'>Already Have An Account? : Login</Link>
                </div>

                <img src={logo} alt="" style={{ width: '445px', height: '340px', flexShrink: '0' }} />
            </div>
        </div>
    );
}

export default Signup;

