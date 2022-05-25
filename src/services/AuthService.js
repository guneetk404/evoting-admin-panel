import axios from "axios";



export function login(user) {
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/accounts/blo/`, user)
}


export function loginotp(user) {
    return axios.put(`${process.env.REACT_APP_HOST_URL_LINK}/accounts/voter/`, user)
}

export function signup(user) {
    return axios.put(`${process.env.REACT_APP_HOST_URL_LINK}/voting/login/`, user)
}