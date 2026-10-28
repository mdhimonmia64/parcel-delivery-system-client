import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import {
  FaHome,
  FaBox,
  FaMoneyBill,
  FaSearch,
  FaUserEdit,
  FaUserCheck,
  FaUserClock,
  FaUserShield,
  FaMotorcycle,
  FaTasks,
  FaCheckCircle,
} from "react-icons/fa";
import ProFastLogo from "../pages/shared/ProFastLogo/ProFastLogo";
import useUserRole from "../hooks/useUserRole";

const DashboardLayout = () => {
  const { role, roleLoading } = useUserRole();
  console.log(role);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none ">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">
            <Link to="/">Dashboard</Link>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <Link to='/'><ProFastLogo /></Link>
          <li>
            <NavLink
              to="/dashboard/dashHome"
              className="flex items-center gap-2"
            >
              <FaHome /> Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/myParcels"
              className="flex items-center gap-2"
            >
              <FaBox /> My Parcels
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/paymentHistory"
              className="flex items-center gap-2"
            >
              <FaMoneyBill /> Payment History
            </NavLink>
          </li>
          {/* rider link */}
          {!roleLoading && role === "rider" && (
            <>
              <li>
                <NavLink
                  to="/dashboard/pending-deliveries"
                  className="flex items-center gap-2"
                >
                  <FaTasks /> Pending Deliveries
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/completed-deliveries"
                  className="flex items-center gap-2"
                >
                  <FaCheckCircle /> Completed Deliveries
                </NavLink>
              </li>
            </>
          )}

          {/* admin link */}
          {!roleLoading && role === "admin" && (
            <>
              <li>
                <NavLink
                  to="/dashboard/assign-rider"
                  className="flex items-center gap-2"
                >
                  <FaMotorcycle /> Assign Rider
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/active-riders"
                  className="flex items-center gap-2"
                >
                  <FaUserCheck /> Active Riders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/pending-riders"
                  className="flex items-center gap-2"
                >
                  <FaUserClock /> Pending Riders
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/makeAdmin"
                  className="flex items-center gap-2"
                >
                  <FaUserShield /> Make Admin
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink to="/dashboard/track" className="flex items-center gap-2">
              <FaSearch /> Track a Package
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/myParcels"
              className="flex items-center gap-2"
            >
              <FaUserEdit /> Update Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
