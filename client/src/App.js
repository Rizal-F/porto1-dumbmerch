import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";

import Auth from "./pages/auth";
// import PrivateRoute from "./component/privateRoute";
import Product from "./pages/product";
import Commplain from "./pages/complain";
import ProductAdmin from "./pages/productAdmin";
import CategoryAdmin from "./pages/categoryAdmin";
import EditCategory from "./pages/editCategory";
import EditProduct from "./pages/editProduct";
import Profile from "./pages/profile";
import DetailProduct from "./pages/detailProduct";
import ComplainAdmin from "./pages/complainAdmin";
import EditProfile from "./pages/editProfile";
import AddProduct from "./pages/addProduct";
import AddCategory from "./pages/addCategory";

import { API, setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  console.log(state);

  useEffect(() => {
    //Redirect Auth
    if (!state.isLogin) {
      navigate("/auth");
    } else {
      if (state.user.status === "admin") {
        navigate("/product");
      } else if (state.user.status === "customer") {
        navigate("/");
      }
    }
    // eslint-disable-next-line
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      //if the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      //get user data
      let payload = response.data.data.user;
      //get token from local storage
      console.log(payload);
      payload.token = localStorage.token;

      //send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/complain" element={<Commplain />} />
      <Route path="/detail-product/:id" element={<DetailProduct />} />
      <Route path="/product" element={<ProductAdmin />} />
      <Route path="/category-admin" element={<CategoryAdmin />} />
      <Route path="/edit-category/:id" element={<EditCategory />} />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/complain-admin" element={<ComplainAdmin />} />
    </Routes>
  );
}

export default App;
