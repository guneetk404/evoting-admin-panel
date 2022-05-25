import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { authactionCreators } from '../state';
import './Navbar.css'

const Navbar = () => {
    const dispatch = useDispatch();
    const { logoutAction } = bindActionCreators(authactionCreators, dispatch);
    const navigate = useNavigate();
    const onLogout = () => {
        logoutAction(navigate)
    }
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">E-Voting System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Create Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/updateprofile">Update</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/results">Results</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex">
                            <Link className="nav-link" aria-current="page" to="#" onClick={onLogout}>Logout</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>

    </>
}

export default Navbar