import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

import imgDw from "../assets/DumbMerch.png";
import Register from "../component/auth/register";
import Login from "../component/auth/login";

function Auth() {
  let navigate = useNavigate();

  const [state] = useContext(UserContext);

  const checkAuth = () => {
    if (state.isLogin === true) {
      navigate("/");
    }
  };
  checkAuth();

  const [isRegister, setIsRegister] = useState(false);

  const switchLogin = () => {
    setIsRegister(false);
  };

  const switchRegister = () => {
    setIsRegister(true);
  };

  return (
    <div class="bg-black h-screen flex items-center">
      <div class="mx-32 basis-1/2">
        <img src={imgDw} alt="imgDw" />
        <h1 class="text-6xl text-white mt-12">Easy, Fast and Reliable</h1>
        <p className="text-white mt-10">
          Go shopping for merchandise, just go to dumb merch <br /> shopping.
          the biggest merchandise in <b>Indonesia</b>
        </p>
        <button
          onClick={switchLogin}
          class="bg-brand-red hover:bg-brand-red-hover text-white px-10 py-1.5 rounded-md mt-5 font-bold"
        >
          Login
        </button>
        <button
          onClick={switchRegister}
          class=" text-white bg-black hover:bg-brand-grey-light px-10 py-1.5 rounded-md mt-5 ml-2 font-bold"
        >
          Register
        </button>
      </div>
      <div class="text-white mx-auto basis-1/2">
        <h1>{isRegister ? <Register /> : <Login />}</h1>
      </div>
    </div>
  );
}

export default Auth;
