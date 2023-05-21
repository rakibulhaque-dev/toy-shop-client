import React from 'react';
import manofsteel from '../../assets/images/gallary/manofsteel.png'
import superman from '../../assets/images/gallary/superman.png'
const Gallary = () => {
  return (
    <div className='container items-center justify-center p-4 mx-auto mt-5 border rounded-md shadow-lg shadow-red-200'>
      <div className='items-center justify-center gap-4 mx-auto text-center md:flex lg:flex'>
        <img className='mx-auto' src={manofsteel} alt="" />
        <img className='mx-auto' src={superman} alt="" />
        <img className='mx-auto' src={manofsteel} alt="" />
        <img className='mx-auto' src={superman} alt="" />
        <img className='mx-auto' src={superman} alt="" />
        <img className='mx-auto' src={superman} alt="" />
        <img className='mx-auto' src={manofsteel} alt="" />
        <img className='mx-auto' src={superman} alt="" />
      </div>
    </div>
  );
};

export default Gallary;