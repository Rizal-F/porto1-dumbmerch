import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div class="bg-brand-grey mr-40 rounded-lg">
        <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h1 class="text-white text-3xl font-bold">Login</h1>
          <div className="space-y-5">
            <label htmlFor="email" class="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              class="text-white bg-brand-grey-light  relative block w-full px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
            />
            <label htmlFor="password" class="sr-only">
              password Address
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              class="text-white bg-brand-grey-light  relative block w-full px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
            />
          </div>
          <Link to="/">
            <button className="bg-brand-red text-white font-bold text-xl w-full px-3 py-1.5 rounded-md mt-10 mb-2 hover:bg-brand-red-hover ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
