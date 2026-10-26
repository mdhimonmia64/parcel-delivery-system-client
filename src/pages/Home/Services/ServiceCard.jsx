import React from "react";

const ServiceCard = ({ service }) => {
    const{icon:Icon,title,description}=service || { };
  return (
    <div className=" card bg-base-100 card-xl shadow-2xl hover:shadow-lime-700 hover:bg-lime-300">
      <div className="card-body">
        <div className="text-center">
            <div className="text-4xl text-primary flex justify-center mb-4  transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 w-16 p-4 mx-auto rounded-full bg-gradient-to-t from-gray-50  to-gray-100">
              <Icon></Icon>
            </div>
            <h2 className="card-title justify-center pb-1">{title}</h2>
        <p className="text-center ">
          {description}
        </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;