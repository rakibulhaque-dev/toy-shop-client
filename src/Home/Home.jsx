import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Stats from '../Pages/Stats/Stats';
import ExtraSection from '../Pages/ExtraSection/ExtraSection';
import NavBar from '../Shared/NavBar/NavBar';
import ShopCategory from '../ShopCategory/ShopCategory';



const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ShopCategory></ShopCategory>
            <ExtraSection></ExtraSection>
            <Stats></Stats>
            <Footer></Footer>
        </div>
    );
};

export default Home;