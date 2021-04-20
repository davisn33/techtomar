import axios from "axios"
axios.defaults.baseURL="https://vinaymishrapoet.com/newtech/public/api";


export function getCookies(lang){
    let form =new FormData();
    form.append("lang",lang);
    form.append("page_name","cookies");
    return axios.post("page",form);
}

export function getPolicy(lang){
    let form =new FormData();
    form.append("lang",lang);
    form.append("page_name","privacy");
    return axios.post("page",form);
}

export function getSlider(){
    return axios.get("user/getsliders");
}

export function getProducts(){
    return axios.get("user/getproducts");
}