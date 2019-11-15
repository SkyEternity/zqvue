// 对axios进行封装
import axios from 'axios'
import QS from 'qs' //将对象序列化成URL
import router from '../router'
import commonJs from '../commonJS/Toast'
// let x = {
//     name: 1,
//     age:19
// }


// status init 状态码初始化
const statusError = (status, other) => {
    switch (status) {
        case 401:
            //为登陆状态或token过期
            commonJs.MessageInfo('请登陆', 'error')
            // 跳转到登陆界面 清空storage
            router.push({path: '/login'})
            localStorage.clear()
            breack;
        case 404:
            commonJs.MessageInfo('请求不存在', 'error')
            breack;
        case 500:
            commonJs.MessageInfo('服务器出错', 'error')
            breack;
        case 502:
            commonJs.MessageInfo('请检查网络', 'error')
            breack
        case 503:
            commonJs.MessageInfo('服务器不可用', 'error')
            breack;
        default:
            console.log(other)
    }
}


// https://wxapi.iduoha.com/v1/content/${this.$route.query.alias}
//https://api.idongde.com/miniapp/v4/content/info/028Da5E9406bF5eA/v2
//对axios进行初始化
const instance = axios.create({timeout: 30000, baseURL: 'https://wxapi.iduoha.com/v1/'}) //timeout 请求超过1分钟自动断开

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 每此请求前都需要对token进行判断
    const token = localStorage.getItem('token')
    token && (config.headers.Authorization = token);   
    return config;
  }, function (error) {
    //   console.log(error);
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    console.log(error);
    // const {response} = error
    statusError(error.response.status, error.response.data.message)
    // if(response) {
    //     statusError(response.status, response.data.message)
    // }else{

    // }
    return Promise.reject(error);
  });

export default instance
