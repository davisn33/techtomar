import axios from "axios"
axios.defaults.baseURL="https://techtomarback.herokuapp.com/api"


export function getCookies(){
    return axios.get("user/getcookies")
}

export function getPolicy(){
    return axios.get("user/getpolicy")
}

export function getSlider(){
    return axios.get("user/getsliders");
}