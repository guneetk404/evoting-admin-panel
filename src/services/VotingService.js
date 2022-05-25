import axios from "./AxiosInstance";


export function electionresultslist(){
    return axios.get(`${process.env.REACT_APP_HOST_URL_LINK}/voting/getelectionresultlist/`)
}

export function electionresults(election){
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/voting/getelectionresultlist/`,election)
}

export function createprofile(user){
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/adminvoting/createvoter/`,user)
}

export function updateprofile(user){
    return axios.put(`${process.env.REACT_APP_HOST_URL_LINK}/adminvoting/createvoter/`,user)
}

export function deleteprofile(user){
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/adminvoting/deletevoter/`,user)
}

export function searchprofile(user){
    return axios.patch(`${process.env.REACT_APP_HOST_URL_LINK}/adminvoting/createvoter/`,user)
}