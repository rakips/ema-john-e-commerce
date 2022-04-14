import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>

                <h1 className='form-title'>Login</h1>

                <form action="">
                    <div className="input-group">
                        <label>Email </label>
                        <input type="email" name="" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password"> Password</label>
                        <input type="password" name="" id="" required />
                    </div>

                    <input className='form-submit' type="submit" value="Login" />
                </form>

                <p> New to Ema-john? <Link className='form-link' to='/signup'>Create an account</Link> </p>

            </div>
        </div>
    );
};

export default Login;