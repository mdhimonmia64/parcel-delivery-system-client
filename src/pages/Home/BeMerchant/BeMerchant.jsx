import React from "react";
import locationImg from "/location-merchant.png";


const BeMerchant = () => {
  return (
    <div 
    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
     className=" bg-no-repeat bg-[url('assets/be-a-merchant-bg.png')] bg-[#03373D] p-20 max-w-6xl mx-auto rounded-3xl mb-10 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={locationImg} className="max-w-sm rounded-lg " />
        <div>
          <h1 className="text-4xl font-bold text-white">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6 text-white">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <button className="btn btn-primary bg-[#CAEB66] text-black rounded-full">
            Become a Merchant
          </button>
          <button className="btn btn-primary border-[#CAEB66] text-[#CAEB66] bg-[#03373D] rounded-full ms-4">
            Earn with Profast Courier
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;