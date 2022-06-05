import React, { Fragment, useRef, useState, useEffect } from "react";
import imgEmpty from "../assets/empty.svg";

// import NavbarAdmin from "../component/navbar/navbarAdmin";
import NavbarAll from "../component/auth/navbar";
import dataProduct from "../dummyData/category";
import { Link, useNavigate } from "react-router-dom";

import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

import { API } from "../config/api";

const CategoryAdmin = () => {
  let navigate = useNavigate();

  const title = "Category Admin";
  document.title = "DumbMerch | " + title;

  // Variabel for store category data
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await API.get("/categories");
      // Store categories data to useState variabel
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleUpdate = (id) => {
    navigate("/edit-category/" + id);
  };

  const [idDelete, setIdDelete] = useState(null);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleDelete = (id) => {
    setIdDelete(id);
    setOpen(!open);
  };

  const deleteById = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };

      await API.delete(`/category/${id}`, config);
      getCategories();
    } catch (error) {
      console.log(error);
    }
  };

  // Call function for handle close modal and execute delete data with useEffect here ...
  useEffect(() => {
    if (confirmDelete) {
      // Close modal confirm delete data
      // execute delete data by id function
      deleteById(idDelete);
      setConfirmDelete(null);
    }
  }, [confirmDelete]);

  const deleteData = () => {
    setOpen(!open);
    setConfirmDelete(true);
  };
  return (
    <div>
      <div className="bg-black">
        <NavbarAll title={title} />
        <h1 className="text-brand-white font-bold text-2xl mx-32 my-2">
          List Category
        </h1>
        <Link to="/add-category">
          <button className="bg-green-700 mx-40 mt-12 py-2 px-3 rounded-md mr-2 text-white font-semibold">
            Add Category
          </button>
        </Link>
        {categories.length !== 0 ? (
          <div className="mb-20">
            <table class="border-collapse md:w-9/12 md:m-auto md:mt-12 ">
              <thead>
                <tr>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    No
                  </th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Category Product
                  </th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Action
                  </th>
                </tr>
              </thead>
              {categories.map((items, index) => (
                <tbody key={index}>
                  <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                      <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        No
                      </span>
                      {items.id}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Category Product
                      </span>
                      {items.name}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static">
                      <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Action
                      </span>

                      <button
                        onClick={() => {
                          handleUpdate(items.id);
                        }}
                        className="bg-green-600 hover:bg-green-800 px-8 py-1 rounded-md mr-2 text-white font-semibold"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(items.id);
                        }}
                        className="bg-brand-red-hover hover:bg-red-800 px-7 py-1 rounded-md text-white font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        ) : (
          <div className="pt-5 flex flex-col items-center pb-20">
            <img className="w-2/5" src={imgEmpty} alt="empty" />
            <div className="mt-3 text-white">No data product</div>
          </div>
        )}
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900"
                        >
                          Delete Data
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to delete this data?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-9 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      No
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-8 py-2 bg-green-600 hover:bg-green-800 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={deleteData}
                      ref={cancelButtonRef}
                    >
                      Yes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default CategoryAdmin;
