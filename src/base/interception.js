import {
    API_BASE_URL
} from './config/dev'
import axios from 'axios'
import handleError from './catchError'
import qs from 'qs'
//取消请求
let CancelToken = axios.CancelToken
// 超时时间
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// http请求拦截器
axios
    .interceptors
    .request
    .use(config => {
        let requestName
        config.url = API_BASE_URL + config.url
        config.params = Object.assign({}, config.params)
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            //预发和正式环境下不允许跨域访问，因为需要服务端支持。
            'Access-Control-Allow-Origin': '*'
        }
        if (config.method == 'post') {
            console.log("config", config.data.requestName)
            config.data = qs.stringify(config.data);
            if (config.data && config.data.requestName) {
                requestName = config.data.requestName
            } else {
                requestName = new Date().getTime()
            }
        } else {
            console.log("config", config.params.requestName)
            if (config.params && config.params.requestName) {
                requestName = config.params.requestName
            } else {
                requestName = new Date().getTime()
            }
        }
        // 判断，如果这里拿到的参数中的 requestName 在上一次请求中已经存在，就取消上一次的请求
        if (requestName) {
            if (axios[requestName] && axios[requestName].cancel) {
                axios[requestName].cancel()
            }
            config.cancelToken = new CancelToken(c => {
                axios[requestName] = {}
                axios[requestName].cancel = c
            })
        }
        return config
    }, error => {
        console.log("reject");
        return Promise.reject(error)
    })
// http响应拦截器
axios
    .interceptors
    .response
    .use(res => {
        let data = res.data
        if (data.code === 200) {
            return data
        } else {
            handleError(res)
            return Promise.reject(res)
        }
    })

export default axios