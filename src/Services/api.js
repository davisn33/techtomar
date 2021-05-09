import axios from "axios"
axios.defaults.baseURL="https://vinaymishrapoet.com/newtech/public/api";


export function getCookies(lang){
    let form =new FormData();
    form.append("lang",lang);
    form.append("page_name","cookie");
    return axios.post("page",form);
}

export function getDisclaimer(lang){
    let form =new FormData();
    form.append("lang",lang);
    form.append("page_name","disclaimer");
    return axios.post("page",form);
}
export function getCustomize(lang){
    let form =new FormData();
    form.append("lang",lang);
    form.append("page_name","customise");
    return axios.post("page",form);
}

export function getPolicy(lang){
    let form =new FormData();
    form.append("lang",lang);
    form.append("page_name","privacy");
    return axios.post("page",form);
}


export function getProducts(lang){
    let form =new FormData();
    form.append("lang",lang);
    return axios.post("/product",form);
}

export function getAbout(lang){
    let form =new FormData();
    form.append("lang",lang);
    return axios.post("/about-us",form);
}

export function getHome(lang){
    let form =new FormData();
    form.append("lang",lang);
    return axios.post("/home",form);
}

export function getCareerList(lang){
    let form =new FormData();
    form.append("lang",lang);
    return axios.post("/career",form);
}

export function getCareerDetail(lang,id){
    let form =new FormData();
    form.append("lang",lang);
    form.append("id",id);
    return axios.post("/career-detail",form);
}

export function getServices(lang){
    let form =new FormData();
    form.append("lang",lang);
    return axios.post("/service",form);
}
export function getServiceDetail(lang,id){
    let form =new FormData();
    form.append("lang",lang);
    form.append("id",id);
    return axios.post("/service-detail",form);
}