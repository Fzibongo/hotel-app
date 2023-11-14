import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

function ForgotPassword() {
    const [email, setEmail] = useState('');
;
    const handlePasswordReset = (() => {

        sendPasswordResetEmail(auth, email).then(() => {
            alert("log in successfully")
            // history.push('/home')

        }).catch((error) => {

        })



    })

    return (
        <div className="container">
            <h4 className="reset">Reset your password</h4>
            <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handlePasswordReset}>Reset Password</button>
            <Link to="/login">Back to Login</Link>
        </div>
    )
}

export default ForgotPassword