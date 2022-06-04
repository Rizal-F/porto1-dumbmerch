import React, { useContext, useEffect, useState } from "react";
// import NavbarAdmin from "../component/navbar/navbar";
import imgBlank from "../assets/default-user.png";
import { UserContext } from "../context/userContext";
import { API } from "../config/api";
import { useNavigate } from "react-router-dom";
import NavbarAll from "../component/auth/navbar";

const EditProfile = () => {
  const title = "Profile";
  document.title = "Dumbmerch | " + title;

  const [state] = useContext(UserContext);
  let navigate = useNavigate();

  // console.log(state.user.id);

  const [preview, setPreview] = useState(null);
  // const [profile, setProfile] = useState({});
  const [form, setForm] = useState({
    image: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
  });

  const getProfile = async () => {
    try {
      const response = await API.get("/user/" + state.user.id);
      setPreview(response.data.data.users.image);
      setForm({
        ...form,
        name: response.data.data.users.name,
        email: response.data.data.users.email,
        phone: response.data.data.users.phone,
        gender: response.data.data.users.gender,
        address: response.data.data.users.address,
      });
      // console.log(response.data.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };
  console.log(form);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      // console.log(formData);
      const formData = new FormData();
      if (form.image) {
        formData.set("image", form.image[0], form.image[0].name);
      }
      formData.set("name", form.name);
      formData.set("email", form.email);
      formData.set("phone", form.phone);
      formData.set("gender", form.gender);
      formData.set("address", form.address);

      const response = await API.patch("/profile", formData, config);
      console.log(response.data);
      console.log(formData);

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black">
      <NavbarAll title={title} />
      <div>
        <h1 className="text-white text-2xl font-bold ml-32 mb-10 ">
          Edit Profile
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mx-32">
            <div className=" flex-col w-3/5">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={form?.name}
                onChange={handleChange}
                class="text-white bg-brand-grey-light w-full px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={form?.email}
                onChange={handleChange}
                class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              />
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={form?.phone}
                onChange={handleChange}
                class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              />
              <select
                name="gender"
                id="gender"
                onChange={handleChange}
                className="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              >
                <option value="Man">Select Gender</option>
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
              </select>
              <textarea
                name="address"
                id="address"
                placeholder="Address"
                value={form?.address}
                onChange={handleChange}
                cols="144"
                rows="2"
                class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              ></textarea>

              <button className="bg-green-600 hover:bg-green-800 my-2 w-full px-3 py-2 rounded-md text-white font-semibold">
                Save
              </button>
            </div>
            <div className="flex flex-col items-center">
              {/* <img src={imgBlank} alt="" className="w-72 rounded-md" /> */}
              {preview && (
                <div>
                  <img
                    src={preview}
                    className="rounded-md"
                    style={{
                      maxWidth: "300px",
                      maxHeight: "300px",
                      objectFit: "cover",
                    }}
                    alt="preview"
                  />
                </div>
              )}
              <div class="flex items-center justify-between">
                <label class="block cursor-pointer">
                  <span class="sr-only cursor-pointer">Profile Photo</span>
                  <input
                    type="file"
                    id="upload"
                    name="image"
                    hidden
                    onChange={handleChange}
                    class="block w-full my-1 cursor-pointer text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-brand-red file:text-white
                        hover:file:bg-brand-red-hover file:cursor-pointer
                        "
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
