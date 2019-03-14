import "babel-polyfill"; // Solution found for use async/await with Parcel.
import axios from 'axios';

const data = [
    {
        "car_id": 1,
        "name": "ABX",
        "brand": "Tokiota",
        "year_release": "1999"
    },
    {
        "car_id": 2,
        "name": "AZE",
        "brand": "Tokiota",
        "year_release": "1995"
    },
];

const UrlCarsAPI = 'http://localhost:3050/api/cars';

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