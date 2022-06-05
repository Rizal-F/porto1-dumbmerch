import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import NavbarAdmin from "../component/navbar/navbarAdmin";
import NavbarAll from "../component/auth/navbar";
import { API } from "../config/api";

const EditCategory = () => {
  const title = "Category Admin";
  document.title = "DumbMerch | " + title;

  let navigate = useNavigate();
  const { id } = useParams();

  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const response = await API.get("/category/" + id);
      setCategory(response.data.data.detailCategory);
      console.log(response.data.data.detailCategory);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCategory({
      ...category,
      name: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          Authorization: "Basic " + localStorage.token,
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(category);

      // Insert category data
      const response = await API.patch("/category/" + id, body, config);

      navigate("/category-admin");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory(id);
  }, []);

  return (
    <div className="bg-black">
      <NavbarAll title={title} />
      <div>
        <h1 className="text-white text-2xl font-bold ml-32 ">Edit Category</h1>
        <div className="flex justify-center">
          <div className=" flex-col w-4/5">
            <form onSubmit={handleSubmit}>
              <input
                type="category"
                id="category"
                name="category"
                onChange={handleChange}
                value={category.name}
                placeholder="Category"
                class="text-white bg-brand-grey-light w-full my-10 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              />
              <button className="bg-green-600 hover:bg-green-800 w-full px-3 py-2 rounded-md text-white font-semibold">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
