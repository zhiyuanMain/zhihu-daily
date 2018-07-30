import axios from 'axios';
const Util = {
    imgPath: 'http://127.0.0.1:8081/img/',
    apiPath: 'http://127.0.0.1:8080'
}

Util.ajax = axios.create({
    baseURL: Util.apiPath
})

// 设置返回拦截器
Util.ajax.interceptors.response.use((res) => {
    return res.data
})

export default Util;