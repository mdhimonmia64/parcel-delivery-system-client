import React from "react";
import MarqueeModule from 'react-fast-marquee';
import logo1 from "/brands/casio.png";
import logo2 from "/brands/amazon.png";
import logo3 from "/brands/moonstar.png";
import logo4 from "/brands/start.png";
import logo5 from "/brands/start-people 1.png";
import logo6 from "/brands/randstad.png";



const Marquee = MarqueeModule.default;
const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const ClientLogosMarquee = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center">
        We've helped thousands of sales teams
      </h1>
      <div className="my-10 max-w-6xl mx-auto">
        <Marquee pauseOnHover={true}>
        
          {logos.map((logo, index) => (
            <div key={index} className="mx-24 flex items-center">
              <img src={logo} alt="" className="h-6" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ClientLogosMarquee;
