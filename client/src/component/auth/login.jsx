import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

import { API } from "../../config/api";

const Login = () => {
  let navigate = useNavigate();

  const title = "Login";
  document.title = "Dumbmerch | " + title;

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data for login process
      const response = await API.post("/login", body, config);

      // Checking process
      if (response?.status === 200) {
        // Send data to useContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        // Status check
        if (response.data.data.status === "admin") {
          navigate("/complain-admin");
        } else {
          navigate("/");
        }

        const alert = (
          <div
            className="flex flex-col bg-green-800 bg-opacity-50 border-2 border-green-600 mt-4 rounded-md text-green-600 text-sm font-bold px-3 py-3"
            role="alert"
          >
            <p className="text-center">Successfully registered</p>
          </div>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <div
          className="flex justify-center items-center rounded-md mt-4 bg-red-900 bg-opacity-40 text-red-600 border border-red-600 text-sm font-bold px-4 py-3"
          role="alert"
        >
          <p>Login Failed. Try Again</p>
        </div>
      );
      setMessage(alert);
      console.log(error);
    }
  };

  return (
    <div>
      <div class="bg-brand-grey mr-40 rounded-lg">
        <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h1 class="text-white text-3xl font-bold">Login</h1>
          {message && message}
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <label htmlFor="email" class="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
                class="text-white bg-brand-grey-light  relative block w-full px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              />
              <label htmlFor="password" class="sr-only">
                password Address
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
                class="text-white bg-brand-grey-light  relative block w-full px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              />
            </div>
            <button className="bg-brand-red text-white font-bold text-xl w-full px-3 py-1.5 rounded-md mt-10 mb-2 hover:bg-brand-red-hover ">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
