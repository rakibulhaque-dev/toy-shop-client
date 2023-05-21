import React, { useEffect } from 'react';
import ToyBanner from '../../src/assets/images/banner-toy.png'
import { Link } from 'react-router-dom';
import Gallary from '../Pages/Gallary/Gallary';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        const interval = setInterval(() => {
          AOS.init();
        }, 2000); // Set the desired interval duration in milliseconds (e.g., 2000ms = 2 seconds)
      
        return () => clearInterval(interval); // Clear the interval when the component unmounts or the effect re-runs
      
      }, []);
    return (
        <div className='container mx-auto' data-aos="flip-right" >
            <div className='items-center gap-3 p-5 border rounded-lg shadow-lg shadow-success md:flex lg:flex'>
                <div>
                    <h3 className='mb-3 text-4xl font-bold text-secondary' data-aos="fade-up-left">Eleven Toy Shop</h3>
                    <p className='text-slate-500' data-aos="fade-up-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eius fuga, unde et vero natus doloribus rerum placeat illum repudiandae amet, culpa voluptate nobis delectus impedit veniam adipisci dolorem asperiores.
                    Molestias, ex. Voluptas facere dicta laborum, ot eveniet perferendis sit nostrum, nesciunt esse. Reiciendis ipsum beatae minus illum.</p>
                    <Link className='p-4 mt-3 font-bold btn btn-secondary' data-aos="flip-right">Learn More</Link>
                </div>
                <img className='w-96 h-72' src={ToyBanner} alt="" />
            </div>
            <Gallary></Gallary>
        </div>
    );
};

export default Banner;