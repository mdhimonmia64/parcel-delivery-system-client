import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {

    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
     const from = location.state?.from || {};

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            navigate(from);
            console.log(result.user);
        })
        .catch((error)=> {
            console.error(error);
        })
    }

  return (
    <div>
      <p className="text-center pb-2">Or</p>
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full bg-[#e5e5e6] text-black border-none"
      >
        <FcGoogle size={20} />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
