import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)



    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    };


    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    };

    if (user) {
        navigate('/')

    }

    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Your Passwords did not matching.')
            return;
        }


        createUserWithEmailAndPassword(email, password);
    }






    return (
        <div>

            <div className='form-container'>
                <div>

                    <h1 className='form-title'>Sign Up</h1>

                    <form onSubmit={handleCreateUser} action="">
                        <div className="input-group">
                            <label>Email </label>
                            <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password"> Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password"> Confirmed Password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="" id="" required />
                        </div>
                        <p style={{ color: 'red' }}> {
                            error}
                        </p>

                        <input className='form-submit' type="submit" value="Sign Up" required />
                    </form>

                    <p>Already have an account? <Link className='form-link' to='/login'>Sign In</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;