import React from "react";
import NavbarAdmin from "../component/navbar/navbarAdmin";
import imgContact from "../assets/blank-profile.png";
import sendIco from "../assets/send.png";

const ComplainAdmin = () => {
  const title = "Complain Admin";
  return (
    <div className="h-screen bg-black">
      <NavbarAdmin title={title} />
      <div className="flex w-full items-end ">
        <div className="flex justify-start items-start border-r-2 border-r-brand-grey-light h-vh80 w-full basis-1/3 cursor-pointer">
          <img
            src={imgContact}
            alt=""
            className="w-14 rounded-full ml-6 mr-2"
          />
          <div className="text-white mr-16">
            <ul>
              <li>Customer 1</li>
              <li className="text-brand-grey-light">Hallo Admin</li>
            </ul>
          </div>
        </div>
        <div className="space-y-2 flex flex-col w-full basis-2/3">
          <div className="flex ">
            <img
              src={imgContact}
              alt="pict"
              className="w-14 rounded-full ml-2 mr-2"
            />
            <div className="text-white bg-brand-dark-grey mr-40 ml-2 p-4 text-sm rounded-md rounded-bl-none self-start">
              <div> Hallo Admin </div>
            </div>
          </div>
          <div className="text-white bg-brand-grey-light ml-40 mr-2 p-4 text-sm rounded-md rounded-br-none self-end">
            <div> Yes, is there anything I can help </div>
          </div>
          <div className="flex items-center">
            <img
              src={imgContact}
              alt="pict"
              className="w-14 rounded-full ml-2 mr-2"
            />
            <div className="text-white bg-brand-dark-grey mr-40 ml-2 p-4 text-sm rounded-md rounded-bl-none self-start">
              <div>
                I want to ask Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Ullam officiis ut debitis nam numquam
                assumenda quo et dolores reprehenderit optio, qui vitae eaque?
                Omnis assumenda modi quos officia, sapiente totam?
              </div>
            </div>
          </div>
          <div className="p-5 flex items-center">
            <label htmlFor="message" class="sr-only">
              Message
            </label>
            <input
              type="message"
              id="message"
              name="message"
              placeholder="Send Message"
              class="text-white bg-brand-grey-light  relative block w-full px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10 "
            />

            <img src={sendIco} alt="" className="w-10 ml-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplainAdmin;
