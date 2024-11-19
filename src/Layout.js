import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import User from "./components/User/User";

import Login from "./components/Auth/Login";
import App from "./App";
import TermOfUse from "./pages/TermOfUse";
import GuestHomePage from "./components/Home/Guest/GuestHomePage";
import GuestPage from "./pages/GuestPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import OwnerPage from "./pages/OwnerPage/OwnerPage";
import ForgotPass from "./components/Auth/ForgotPass";
import ResetPass from "./components/Auth/ResetPass";
import ListCar from "./components/Car/ListCar";
import ListCar1 from "./components/Car/ListCar1";
import AuthPage from "./pages/AuthPage";
import CarDetails from "./components/Car/CarDetails";
import EditProfile from "./components/User/EditProfile";
import SearchCar from "./pages/SearchCar";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<GuestPage />} />
          <Route path="/users" element={<User />} />
          <Route path="/terms" element={<TermOfUse />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/owner" element={<OwnerPage />} />
          <Route path="/forgot" element={<ForgotPass />} />
          <Route path="/reset" element={<ResetPass />} />
          <Route path="/listCar" element={<ListCar />} />
          <Route path="/listCar1" element={<ListCar1 />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/carDetails" element={<CarDetails />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/searchCar" element={<SearchCar />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </>
  );
};

export default Layout;
