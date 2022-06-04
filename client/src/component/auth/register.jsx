import React, { useState } from "react";

import { API } from "../../config/api";

const Register = () => {
  const title = "Register";
  document.title = "Dumbmerch | " + title;

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/register", body, config);

      if (response.data.status === "success...") {
        const alert = (
          <div
            className="flex flex-col bg-green-800 bg-opacity-50 border-2 border-green-600 mt-4 rounded-md text-green-600 text-sm font-bold px-3 py-3"
            role="alert"
          >
            <p className="text-center">Successfully registered</p>
          </div>
        );
        setMessage(alert);
        setForm({
          name: "",
          email: "",
          password: "",
        });
      } else if (response?.status === 400) {
        const alert = (
          <div
            className="flex justify-center items-center rounded-md text-blue-600 border border-blue-600 text-sm font-bold px-4 py-3"
            role="alert"
          >
            <p>{response.message}</p>
          </div>
        );
        setMessage(alert);
        setForm({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      const alert = (
        <div
          className="flex justify-center items-center rounded-md mt-4 bg-red-900 bg-opacity-40 text-red-600 border border-red-600 text-sm font-bold px-4 py-3"
          role="alert"
        >
          <p>Register Failed. Try Again</p>
        </div>
      );
      console.log(error);
      setMessage(alert);
    }
  };
  return (
    <div>
      <div class="bg-brand-grey mr-40 rounded-lg">
        <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h1 class="text-white text-3xl font-bold">Register</h1>
          {message && message}
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <label htmlFor="name" class="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                required
                placeholder="Name"
                class="text-white bg-brand-grey-light  relative block w-full px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              />
              <label htmlFor="email" class="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
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
                value={password}
                onChange={handleChange}
                required
                placeholder="Password"
                class="text-white bg-brand-grey-light  relative block w-full px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              />
            </div>
            <button className="bg-brand-red text-white font-bold text-xl w-full px-3 py-1.5 rounded-md mt-10 mb-2 hover:bg-brand-red-hover ">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
