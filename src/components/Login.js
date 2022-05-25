import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authactionCreators } from '../state/index'
import './Login.css'

const Login = () => {
    const [user, setUser] = useState({email:"blo@gmail.com",password:"Abcd1234@#"});
    const buttonloading = useSelector(state => state.auth.buttonloading);
    const dispatch = useDispatch();
    const { loginAction, buttonLoadingAction } = bindActionCreators(authactionCreators, dispatch);
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        buttonLoadingAction(true);
        loginAction(user,navigate);
    }
    // arrow function to handle on change event
    const onChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    // login button loading feature
    let button = <button className="w-100 btn btn-lg btn-primary" type="submit">Login In</button>
    if (buttonloading) {
        button =
            <button className="w-100 btn btn-lg btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                &nbsp;&nbsp;Please Wait...
            </button>
    }

    return (
        <>
            <div className="text-center">
                <main className="form-signin">
                    <form onSubmit={handleSubmit}>
                        <img className="mb-4" src="/logo192.png" alt="" width="80" height="80" />
                        <h1 className="h3 mb-3 fw-normal">E-Voting System</h1>
                        <hr />
                        <h3 className="h3 mb-3 fw-normal">Admin Login Below</h3>
                        <div className="form-floating mb-2">
                            <input type="email" value='blo@gmail.com' className="form-control" id="floatingInput" placeholder="Email" name='email' onChange={onChange} />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="password" value='Abcd1234@#' className="form-control" id="floatingInput2" placeholder="Password" name='password' onChange={onChange} />
                            <label htmlFor="floatingInput2">Password</label>
                        </div>
                        {button}
                        <p className="mt-5 mb-3 text-muted">E-Voting System 2021</p>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Login