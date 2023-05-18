import React from 'react';

const ExtraSection = () => {
    return (

        <div className='container flex justify-center mx-auto mt-8' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div className="shadow-lg stats">

                <div className="place-items-center stat">
                    <div className="stat-title">Toy Sold</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="place-items-center stat">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="place-items-center stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>

    );
};

export default ExtraSection;