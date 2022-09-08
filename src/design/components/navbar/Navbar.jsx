import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();

    const logOut = ( ) => {
        navigate("/login", {
            replace: true
        })
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dc">DC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/marvel">Marvel</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={logOut} href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
