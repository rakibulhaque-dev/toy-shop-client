import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/Navbar/Navbar';
// import ShopSection from '../ShopSection/ShopSection';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <ShopSection></ShopSection> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;