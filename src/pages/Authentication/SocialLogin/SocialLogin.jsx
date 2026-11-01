import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxios from "../../../hooks/useAxios";

const SocialLogin = () => {

    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
     const from = location.state?.from || {};
     const axiosInstance = useAxios();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(async(result) => {
          const user = result.user;
          const userInfo = {
            email:user.email,
            role:'user',
            created_at:new Date().toISOString(),
            last_log_in:new Date().toISOString()
          }

          const res = await axiosInstance.post('users',userInfo);
          console.log('user update info',res.data)

            navigate(from);
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
