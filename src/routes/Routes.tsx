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
import Checkout from "../pages/Checkout/Checkout";
import CreditCard from "../pages/CreditCard/CreditCard";
import Address from "../pages/Address/Address";
import Client from "../pages/Client/Client";
import UserAddresses from "../pages/UserAddresses/UserAddresses";
import UserCreditCards from "../pages/UserCreditCards/UserCreditCards";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userAddresses" element={<UserAddresses />} />
        <Route path="/userCreditCards" element={<UserCreditCards />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/client" element={<Client />} />
        <Route path="/address" element={<Address />} />
        <Route path="/creditCard" element={<CreditCard />} />
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
