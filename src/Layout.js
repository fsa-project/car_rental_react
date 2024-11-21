import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import User from "./components/User/User";

import App from "./App";
import TermOfUse from "./pages/TermOfUse";
import GuestPage from "./pages/GuestPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import OwnerPage from "./pages/OwnerPage/OwnerPage";
import ForgotPass from "./components/Auth/ForgotPass";
import ResetPass from "./components/Auth/ResetPass";
import ListCar from "./components/Car/ListCar";
import AuthPage from "./pages/AuthPage";
import CarDetails from "./components/Car/CarDetails";
import EditProfile from "./components/User/EditProfile";
import SearchCar from "./pages/SearchCar";
import BookingPage from "./pages/BookingPage";
import BookingDetail from "./components/Booking/BookingDetail";
import MyBooking from "./components/Booking/MyBooking";
import RateTrip from "./components/Booking/RateTrip";
import MyWallet from "./components/Walet/MyWallet";
import MyReport from "./components/User/MyReport";
import AddCarPage from "./pages/AddCarPage";
import OwnerListCarPage from "./pages/OwnerListCar/OwnerListCarPage";
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
          <Route path="/list-car" element={<ListCar />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/car-details" element={<CarDetails />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/search-car" element={<SearchCar />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/test" element={<BookingDetail />} />
          <Route path="/my-booking" element={<MyBooking />} />
          <Route path="/rate" element={<RateTrip />} />
          <Route path="/wallet" element={<MyWallet />} />
          <Route path="/report" element={<MyReport />} />
          <Route path="/add-car" element={<AddCarPage />} />
          <Route path="/owner-list-car" element={<OwnerListCarPage />} />
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
        theme="light"
      />
    </>
  );
};

export default Layout;
