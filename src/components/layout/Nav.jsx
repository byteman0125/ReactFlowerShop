import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () =>
{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <NavLink className="navbar-brand" to="/">Hanna & Samuel</NavLink>

                <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" activeClassName="active" exact>Home<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categories" activeClassName="active">Categories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart" activeClassName="active">Cart</NavLink>
                        </li>
                    </ul>

                </div>

            </nav>
        </div>
    );
}

export default Nav;