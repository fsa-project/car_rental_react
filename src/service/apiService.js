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

const postAddNewCar = (metadata, documents, images) => {
    axios.defaults.withCredentials = true;

    const formData = new FormData();
    const imagesArray = Object.values(images).filter((file) => file !== null);


    formData.append(
        "metadata",
        new Blob([JSON.stringify(metadata)], {
            type: "application/json"
        }));
    console.log(JSON.stringify(metadata));

    if (Array.isArray(documents)) {
        documents.forEach((file) => {
            formData.append("documents", file);
            console.log("tao la document");
            console.log(file)
        });
    } else {
        console.error("carImages is not an array:", images);
        return;
    }

    if (Array.isArray(imagesArray)) {
        imagesArray.forEach((file) => {
            formData.append("images", file);
            console.log("tao la file");
            console.log(file)
        });
    } else {
        console.error("carImages is not an array:", images);
        return;
    }

    return axios.post(`cars/create`, formData, {
        withCredentials: true
    });
}


const postNewBooking = (carId, bookingInfo) => {
    return axios.post(`bookings/new-booking`, bookingInfo, {
        params: { carId: carId },
    });
}



const initiateVnpayPayment = (amount) => {
    if (!amount || amount <= 0) {
        throw new Error("Amount is required and must be greater than 0");
    }

    return axios.post(`payment/vnpay`, { amount });
};
export { postLogin, postRegister, getUserCars, refreshToken, postAddNewCar, getUserCarsDetail, initiateVnpayPayment }