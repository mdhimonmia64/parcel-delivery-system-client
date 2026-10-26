import React from 'react';
import customer from '/customer-top.png'
const Customers = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={customer} alt="" />
            <h3 className='text-4xl font-extrabold my-5 hover:text-lime-300'>What our <span className='text-lime-300'>customers</span> are sayings</h3>
            <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br></br> pain, and strengthen your body with ease!</p>
        </div>
    );
};

export default Customers;