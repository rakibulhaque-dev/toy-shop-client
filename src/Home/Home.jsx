import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/Navbar/Navbar';
import Stats from '../Pages/Stats/Stats';
import ExtraSection from '../Pages/ExtraSection/ExtraSection';
// import Gallary from '../Pages/Gallary/Gallary';



const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ExtraSection></ExtraSection>
            <Stats></Stats>
            <Footer></Footer>
        </div>
    );
};

export default Home;