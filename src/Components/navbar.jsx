import React from 'react';

const NavBar = ({ totalCounters }) => {
    console.log("NavBar - Renderered");
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="nav-brand" href="">
                Navbar{" "} 
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav> 
    );
};

export default NavBar;