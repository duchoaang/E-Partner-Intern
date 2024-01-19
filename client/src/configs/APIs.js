import axios from "axios";

const SERVER = import.meta.env.VITE_SERVER_URL + "/api"

export const endpoints = {
    "users": `/v1/users/`,
    "user_by_id": (id) => `/v1/user/${id}/`,
}


export default axios.create({
    baseURL: SERVER
})  