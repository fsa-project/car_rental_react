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
const getUsersDetail = (carId) => {
  if (!carId) {
    throw new Error("carId is required to fetch car details");
  }

  try {
    axios.defaults.withCredentials = true;
    console.log(`cars/user-cars/${carId}`);
    const response = axios.get(`cars/user-cars/${carId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Error in getUserCarsDetail:", error.message);
    throw error;
  }
};

const getUserCarsDetail = (carId) => {
  if (!carId) {
    throw new Error("carId is required to fetch car details");
  }

  try {
    axios.defaults.withCredentials = true;
    console.log(`cars/user-cars/${carId}`);
    const response = axios.get(`cars/user-cars/${carId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Error in getUserCarsDetail:", error.message);
    throw error;
  }
};

const postAddNewCar = () => {
  axios.defaults.withCredentials = true;
  return axios.post(`cars/create`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export {
  postLogin,
  postRegister,
  getUserCars,
  refreshToken,
  postAddNewCar,
  getUserCarsDetail,
};
