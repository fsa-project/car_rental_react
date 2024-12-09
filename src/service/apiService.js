import { json } from "react-router-dom";
import axios from "../utils/axiosCustomize";

const postLogin = (userEmail, userPassword) => {
  axios.defaults.withCredentials = true;
  return axios.post(
    `auth/login`,
    { username: userEmail, password: userPassword },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
const postRegister = (
  userEmail,
  userPassword,
  userName,
  userPhone,
  userRole
) => {
  return axios.post(`users/register`, {
    email: userEmail,
    name: userName,
    password: userPassword,
    phoneNo: userPhone,
    role: { name: userRole },
  });
};

const refreshToken = () => {
  axios.defaults.withCredentials = true;
  return axios.get(`auth/refresh`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getUserCars = () => {
  axios.defaults.withCredentials = true;
  return axios.get(`cars/user-cars`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getUserCarsPaginate = (page, size) => {
  axios.defaults.withCredentials = true;
  return axios.get(`cars/user-cars?page=${page}&size=${size}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const getUsersDetail = (userId) => {
  if (!userId) {
    throw new Error("userId is required to fetch car details");
  }

  try {
    axios.defaults.withCredentials = true;
    console.log(`users/${userId}`);
    const response = axios.get(`users/${userId}`, {
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });
    return response;
  } catch (error) {
    console.error("Error in getUserDetail:", error.message);
    throw error;
  }
};
const updateProfile = (userId, basicInfo, details, newPassword = null) => {
  const payload = {
    name: basicInfo.name,
    dateOfBirth: basicInfo.dateOfBirth,
    phoneNo: basicInfo.phoneNo,
    email: basicInfo.email,
    nationalIdNo: details.nationalIdNo,
    drivingLicense: details.drivingLicense,
    address: details.address,
  };

  if (newPassword) {
    payload.password = newPassword;
  }

  return axios.put(`users/update/${userId}`, payload);
};

export const updateCarDetail = (carId, basicInfo, details, status) => {
  const payload = {
    name: basicInfo.name,
    basePrice: basicInfo.basePrice,
    address: basicInfo.address,
    licensePlate: details.licensePlate,
    color: details.color,
    brand: details.brand,
    model: details.model,
    productionYears: details.productionYears,
    numberOfSeats: details.numberOfSeats,
    transmissionType: details.transmissionType,
    fuelType: details.fuelType,
    mileage: details.mileage,
    fuelConsumption: details.fuelConsumption,
    description: details.description,
    additionalFunctions: details.additionalFunctions,
    documents: details.documents,
    termsOfUse: details.termsOfUse,
    status: status,
  };

  return axios.put(`cars/update/${carId}`, payload);
};

const getUserCarsDetail = (carId) => {
  if (!carId) {
    throw new Error("carId is required to fetch car details");
  }

  try {
    axios.defaults.withCredentials = true;
    console.log(`cars/user-cars/${carId}`);
    const response = axios.get(`cars/user-cars/${carId}`, {
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });
    return response;
  } catch (error) {
    console.error("Error in getUserCarsDetail:", error.message);
    throw error;
  }
};
const getTransaction = (userId) => {
  if (!userId) {
    throw new Error("userId is required to fetch car details");
  }

  try {
    axios.defaults.withCredentials = true;
    console.log(`/users/transactions/${userId}`);
    const response = axios.get(`/users/transactions/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Error in getTransaction:", error.message);
    throw error;
  }
};
const cancelBooking = (bookingId) => {
  if (!bookingId) {
    throw new Error("bookingId is required to cancel booking");
  }
  try {
    axios.defaults.withCredentials = true;
    console.log(`/cancel/${bookingId}`);
    const response = axios.post(`bookings/cancel/${bookingId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (e) {
    console.error("Error in cancelBooking:", e.message);
    throw e;
  }
};

const postAddNewCar = (metadata, documents, images) => {
  axios.defaults.withCredentials = true;

  const formData = new FormData();
  const imagesArray = Object.values(images).filter((file) => file !== null);

  formData.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], {
      type: "application/json",
    })
  );
  console.log(JSON.stringify(metadata));

  if (Array.isArray(documents)) {
    documents.forEach((file) => {
      formData.append("documents", file);
      console.log("tao la document");
      console.log(file);
    });
  } else {
    console.error("carImages is not an array:", images);
    return;
  }

  if (Array.isArray(imagesArray)) {
    imagesArray.forEach((file) => {
      formData.append("images", file);
    });
  } else {
    console.error("carImages is not an array:", images);
    return;
  }

  return axios.post(`cars/create`, formData, {
    withCredentials: true,
  });
};

const postANewBooking = (carId, bookingInfo, renter, driver) => {
  axios.defaults.withCredentials = true;

  const formData = new FormData();
  console.log(carId);
  console.log(renter);
  console.log(driver);
  console.log(bookingInfo);

  formData.append(
    "bookingInfo",
    new Blob([JSON.stringify(bookingInfo)], {
      type: "application/json",
    })
  );

  formData.append(
    "renter",
    new Blob([JSON.stringify(renter)], {
      type: "application/json",
    })
  );

  formData.append(
    "driver",
    new Blob([JSON.stringify(driver)], {
      type: "application/json",
    })
  );

  return axios.post(`bookings/new-booking?carId=${carId}`, formData, {
    withCredentials: true,
  });
};

const getSearchCarsPaginate = (
  pickupDate,
  dropoffDate,
  location,
  page,
  size
) => {
  axios.defaults.withCredentials = true;
  return axios.get(
    `cars/search?startDate=${pickupDate}&endDate=${dropoffDate}&address=${location}&page=${page}&size=${size}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const postConfirmBooking = (bookingId, paymentMethod) => {
  axios.defaults.withCredentials = true;
  return axios.post(
    `bookings/confirm/${bookingId}?paymentMethod=${paymentMethod}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const postConfirmBooking2 = (bookingId, bookingStatus) => {
  axios.defaults.withCredentials = true;
  return axios.post(`bookings/confirm2/${bookingId}?status=${bookingStatus}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const getUsersBooking = () => {
  try {
    axios.defaults.withCredentials = true;

    const response = axios.get(`bookings/all-booking`, {});
    return response;
  } catch (error) {
    console.error("Error in getBooking:", error.message);
    throw error;
  }
};

export {
  postLogin,
  postRegister,
  getUserCars,
  refreshToken,
  postAddNewCar,
  getUserCarsDetail,
  getUsersDetail,
  updateProfile,
  getTransaction,
  postANewBooking,
  getUserCarsPaginate,
  getSearchCarsPaginate,
  postConfirmBooking,
  postConfirmBooking2,
  getUsersBooking,
  cancelBooking,
};
