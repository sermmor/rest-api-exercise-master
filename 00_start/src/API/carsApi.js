import "babel-polyfill"; // Solution found for use async/await with Parcel.
import axios from 'axios';

const baseUrl = 'http://localhost:3050';

const UrlCarsAPI = `${baseUrl}/api/cars`;

export const getAllCars = async () => {
    const result = await axios.get(UrlCarsAPI);
    return await result.data;
}

export const getCarById = async (id) => {
    const result = await axios.get(`${UrlCarsAPI}/${id}`);
    return await result.data;
}

export const addCar = async (car) => {
    return await axios.post(UrlCarsAPI, car);
};