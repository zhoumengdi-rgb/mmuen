import axios from "axios";

//request就是axios的本身  axios.create 对基本地址做一些处理(配置)(全局)
let request = axios.create({  
    //基本路径 到底是线上环境还是开发环境
    //production线上环境 
    //development开发环境   区分线上开发:--save线上环境(axios element-ui swiper) --save-dev开发环境(sass label eslint gulp)
   // baseURL:process.env.NODE_ENV === "production"?"":"", //process(node里的进程)env(当前环境的检测) 线上环境的话"" 开发环境"/api"
    // httpAgent: //客户端类型
    // timeout: //设置超时时间.
});

//对当前请求的响应做拦截
request.interceptors.request.use((config)=>{ //回调的形式config请求的时候做一些配置
    config.headers.authorization = `Bearer ${window.localStorage.getItem("token")}`; //配置头部的token 本地存储取token
    return config;
},(err)=>{
    console.error(err); 
});
//响应
request.interceptors.response.use((response) =>{
    return response.data;
},(err)=>{
    console.error(err)
})


let get = (url) => request.get(url)
let post = (url,params) => request.post(url,params||{})

export {
    get,
    post
}