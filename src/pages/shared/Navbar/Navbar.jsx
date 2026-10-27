import { Link, NavLink } from "react-router";
import ProFastLogo from "../ProFastLogo/ProFastLogo";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const {user,logOut} = useAuth();

  const handleLogOut = () => {
    logOut()
    .then(result => {
       toast.success("LogOut Successfully!")
    })
    .catch(error => {
      toast.error(error)
    })
  }

    const navItems = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/services">Services</NavLink></li>
    <li><NavLink to="/about">About Us</NavLink></li>
    <li><NavLink to="/rider">Be a Rider</NavLink></li>
    </>

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <NavLink to="/"><ProFastLogo /></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <button onClick={handleLogOut} className='btn bg-[#CAEB66] text-black rounded'>LogOut</button> : <Link to="/login" className='btn bg-[#CAEB66] text-black rounded'>Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
