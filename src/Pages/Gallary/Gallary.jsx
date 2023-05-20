import React from 'react';
import manofsteel from '../../assets/images/gallary/manofsteel.png'
import superman from '../../assets/images/gallary/superman.png'
const Gallary = () => {
  return (
    <div className='container p-4 mx-auto mt-5 border rounded-md shadow-lg'>
      <div className='justify-center gap-4 md:flex lg:flex'>
        <img src={manofsteel} alt="" /><img src={superman} alt="" /><img src={manofsteel} alt="" /><img src={superman} alt="" /><img src={manofsteel} alt="" /><img src={superman} alt="" />
      </div>
    </div>
  );
};

export default Gallary;