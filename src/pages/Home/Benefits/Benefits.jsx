import React from 'react';
import BenefitCard from './BenefitCard';


const benefits = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: "https://i.postimg.cc/KYhZvKzG/live-tracking.png"
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: "https://i.postimg.cc/FRW5c19J/safe-delivery.png"
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description: "Our dedicated support team is available 24/7 to assist with any questions, important updates, or delivery concerns, ensuring prompt, reliable, and seamless customer service always. ",
    image: "https://i.postimg.cc/FRW5c19J/safe-delivery.png"
  }
]

const Benefits = () => {
    return (
        <div>
            <h1 className='text-3xl font-extrabold text-center my-14'>Why Choose Us</h1>
            <div className='max-w-6xl mx-auto flex flex-col gap-6 mb-14'>
                {
                    benefits.map(benefit => <BenefitCard key={benefit.id} benefit={benefit}></BenefitCard>)
                }
            </div>
        </div>
    );
};

export default Benefits;