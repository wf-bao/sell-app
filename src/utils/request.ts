// 导入axios
import axios from 'axios';

// 配置默认地址
// 配置超时事件
const instance = axios.create({
    baseURL: '',
    timeout: 10000
});

//请求拦截器
instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

//配置响应拦截器
instance.interceptors.response.use(response => {
    return response
}, err => {
    return Promise.reject(err)
})

//导出配置好的axios工具函数
export default instance