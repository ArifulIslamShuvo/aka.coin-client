import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const menuItems = <>
    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/home">Ecosystem</CustomLink></li>
    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/buy">Buy</CustomLink></li>
    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/what-is-ako">What is AKO</CustomLink></li>
    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/learn">Learn</CustomLink></li>
    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/community">Community</CustomLink></li>

</>

const Header = () => {
    return (
        // <div className="navbar bg-base-100 md: px-5 hover:bg-none" style={{background: '#F4F5FA'}}>
        //     <div className="flex-1">
        //         <Link to="/home" className='font-sans text-2xl font-bold text-decoration-none'><span style={{color:'#1F33D8'}}>AKA</span><span className='text-xl text-neutral'>.coin</span></Link>
        //     </div>
        //     <div className="flex-none">
        //         <ul className="menu menu-horizontal p-0">
        //             <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/home">Ecosystem</CustomLink></li>
        //             <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/buy">Buy</CustomLink></li>
        //             <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/what-is-ako">What is AKO</CustomLink></li>
        //             <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/learn">Learn</CustomLink></li>
        //             <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/community">Community</CustomLink></li>
        //         </ul>
        //     </div>
        // </div>

        <div className="sticky top-0 py-2 flex justify-center md:justify-between px-12 " style={{ background: '#F4F5FA' }}>
                <div className="dropdown lg:hidden block">
                    <label tabIndex="0" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            <div className="navbar-start">
                <div className="flex-1 mt-2">
                    <Link to="/home" className='font-sans text-2xl font-bold text-decoration-none'><span style={{ color: '#1F33D8' }}>AKA</span><span className='text-xl text-neutral'>.coin</span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;