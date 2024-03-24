import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";
import Orders from "../pages/UserOrders/UserOrders";
import Login from "../pages/Login/Login";
import Coupons from "../pages/Coupons/Coupons";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Product from "../pages/Product/Product";
import AllOrders from "../pages/AllOrders/AllOrders";
import Stock from "../pages/Stock/Stock";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/products" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/allOrders" element={<AllOrders />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
