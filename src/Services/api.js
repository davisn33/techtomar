import axios from "axios"
axios.defaults.baseURL="https://vinaymishrapoet.com/newtech/public/api";
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


export function getCookies(lang){
    let form =new FormData();
    form.append("lang",lang);
    form.append("page_name","cookie");
    return axios.post("page",form);
}

export function getPolicy(lang){
    let form =new FormData();
    form.append("lang",lang);
    form.append("page_name","privacy");
    return axios.post("page",form,{
        headers: {
          'Access-Control-Allow-Origin': true,
        },
        });
}

export function getSlider(){
    return axios.get("user/getsliders");
}

export function getProducts(){
    return axios.get("user/getproducts");
}