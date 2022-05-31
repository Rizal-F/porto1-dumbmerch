import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import PrivateRoute from "./component/privateRoute";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/auth" element={<Auth />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Product />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/edit-profile" element={<EditProfile />} />
          <Route exact path="/complain" element={<Commplain />} />
          <Route exact path="/detail-product" element={<DetailProduct />} />
          <Route exact path="/product" element={<ProductAdmin />} />
          <Route exact path="/category-admin" element={<CategoryAdmin />} />
          <Route exact path="/edit-category" element={<EditCategory />} />
          <Route exact path="/edit-product" element={<EditProduct />} />
          <Route exact path="/complain-admin" element={<ComplainAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
