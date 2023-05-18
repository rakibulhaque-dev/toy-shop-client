import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center text-orange-700'>This is HOME</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;