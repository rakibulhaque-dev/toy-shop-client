import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Stats from '../Pages/Stats/Stats';
import ExtraSection from '../Pages/ExtraSection/ExtraSection';
import NavBar from '../Shared/NavBar/NavBar';
import ShopCategory from '../ShopCategory/ShopCategory';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from '../hooks/useTitle';


const Home = () => {
    useTitle('Welcome')

    useEffect(()=>{
        AOS.init();
    }, [])

    return (
        <div>
            <NavBar></NavBar>
            <Outlet data-aos='fade-down'></Outlet>
            <ShopCategory></ShopCategory>
            <ExtraSection data-aos="fade-up-right"></ExtraSection>
            <Stats data-aos="fade-up"></Stats>
            <Footer></Footer>
        </div>
    );
};

export default Home;