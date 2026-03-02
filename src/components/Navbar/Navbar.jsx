import React from 'react';
import logo from '../../assets/logo.png';
import coinImg from '../../assets/dollar.png';

const Navbar = () => {
    return (
        <div className="navbar gap-12 lg:max-w-7xl mx-auto pt-4 lg:pt-8">
            {/* Desktop Left side */}
            <div className="navbar-start">
                <img className='cursor-pointer' src={logo} alt="" />
            </div>

            {/* Mobile Menu */}
            <div className='navbar-end lg:hidden'>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                </div>
            </div>
            
            {/* Desktop Right side */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal xl:gap-12 mr-2 px-1 text-base text-secondary/70">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul>
                <button className='px-3 py-4 border border-secondary/10 rounded-xl flex items-center gap-2 font-semibold text-base text-secondary cursor-pointer'>
                    <p><span>0</span> Coin</p>
                    <img src={coinImg} alt="" />
                </button>
            </div>

        </div>
    );
};

export default Navbar;