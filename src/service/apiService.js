import { json } from "react-router-dom";
import axios from "../utils/axiosCustomize"

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

const postAddNewCar = () => {
    axios.defaults.withCredentials = true;
    return axios.post(`cars/create`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const postANewBooking = (carId, body) => {
    axios.defaults.withCredentials = true;
    return axios.post(`bookings/new-booking?carId=${carId}`, body, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const getSearchCarsPaginate = (pickupDate, dropoffDate, location, page, size) => {
    axios.defaults.withCredentials = true;
    return axios.get(`cars/search?startDate=${pickupDate}&endDate=${dropoffDate}&address=${location}&page=${page}&size=${size}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const postConfirmBooking = (bookingId, paymentMethod) => {
    axios.defaults.withCredentials = true;
    return axios.post(`bookings/confirm/${bookingId}?paymentMethod=${paymentMethod}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

const postConfirmBooking2 = (bookingId, bookingStatus) => {
    axios.defaults.withCredentials = true;
    return axios.post(`bookings/confirm2/${bookingId}?status=${bookingStatus}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

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
    postConfirmBooking2
};
