import axios from "axios";


const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWRjOTFjMzcxMjYyZGFkMGMyYTNjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTYyNjgyOCwiZXhwIjoxNjc0MjE4ODI4fQ.-wK9ApY2PAAwgQnN7NXJJ3bF2k1kvli44uzfYTFavBk"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})