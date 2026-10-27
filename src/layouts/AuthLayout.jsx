import React from "react";
import { Link, Outlet } from "react-router";
import authImg from '/authImage.png'
import ProFastLogo from "../pages/shared/ProFastLogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div className="p-12 bg-base-200">
        <Link to='/'><ProFastLogo /></Link>
      <div className="hero-content flex-col lg:flex-row-reverse container mx-auto">
        <div className="flex-1">
          <img
          src={authImg}
          className="max-w-sm rounded-lg "
        />
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;