import React from 'react'
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <span className="nav__logo">LOGO</span>
            <div className="nav__links">
                <Link to="/add">Add</Link>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </div>
        </nav>
    )
}
