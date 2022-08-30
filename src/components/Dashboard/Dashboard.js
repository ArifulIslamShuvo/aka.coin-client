import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    return (
        <div className="drawer drawer-mobile mt-3 mx-2">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-cyan-400 text-center mb-3'>Admin Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side ">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay "></label>
                <ul className="overflow-y-auto  bg-primary rounded-xl text-base-content">
                    <li><Link to='/dashboard/'><button className="  btn btn-sm text-white text-left">My Profile</button></Link></li>
                    <li><Link to='/dashboard/managewallets'><button className="  btn btn-sm text-white text-left">Manage-wallets</button></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;