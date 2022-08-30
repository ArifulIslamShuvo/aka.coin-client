import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import auth from '../../Firebase/firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import Loading from '../Shared/Loading';



const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();
    // console.log(user);

    const logout = () => {
        signOut(auth);
        navigate('/');

    };

    if (loading) {
        return <Loading />
    }

    const menuItems = <>
    </>

    return (
        <div className="sticky top-0 py-2 flex justify-center md:justify-between px-12 " style={{ background: '#F4F5FA' }}>
            <div className="dropdown lg:hidden block">
                <label tabIndex="0" className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul className="menu menu-horizontal p-0">
                    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/home">Ecosystem</CustomLink></li>
                    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/buy">Buy</CustomLink></li>
                    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/whatisako">What is AKO</CustomLink></li>
                    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/learn">Learn</CustomLink></li>
                    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/community">Community</CustomLink></li>
                   
                    {user?.email === 'admin@gmail.com' && <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/dashboard">Dashboard</CustomLink></li>}
                    {user
                        ?
                        <button className="text-decoration-none text-xl text-neutral" onClick={logout}>Logout</button>
                        :
                        <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/login">Login</CustomLink></li>
                    }

                </ul>
            </div>
            <div className="navbar-start">
                <div className="flex-1 mt-2">
                    <Link smooth to="/home" className='font-sans text-2xl font-bold text-decoration-none'><span style={{ color: '#1F33D8' }}>AKA</span><span className='text-xl text-neutral'>.coin</span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/home">Ecosystem</CustomLink></li>
                    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/buy">Buy</CustomLink></li>
                    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/whatisako">What is AKO</CustomLink></li>
                    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/learn">Learn</CustomLink></li>
                    <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/community">Community</CustomLink></li>
                    {user?.email === 'admin@gmail.com' && <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/dashboard">Dashboard</CustomLink></li>}
                    {user
                        ?
                        <button className="text-decoration-none text-xl text-neutral" onClick={logout}>Logout</button>
                        :
                        <li><CustomLink className="text-decoration-none text-xl text-neutral" to="/login">Login</CustomLink></li>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Header;