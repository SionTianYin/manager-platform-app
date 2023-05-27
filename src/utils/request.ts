import axios from 'axios'
// @ts-igonre
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { serverUrl, getToken, setToken } from './tools'

const instance = axios.create({
  baseURL: serverUrl, // 网络请求的基础地址
  timeout: 5000,
  withCredentials: true, //
})

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers.token = getToken()
    NProgress.start()
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    NProgress.done()
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    NProgress.done()
    return Promise.reject(error)
  }
)

export const get = (url: string, params: any = {}) =>
  instance.get(url, { params }).then((res) => res.data)

export const post = (url: string, data: any = {}) =>
  instance.post(url, data).then((res) => res.data)

export const put = (url: string, data: any = {}) =>
  instance.put(url, data).then((res) => res.data)

export const patch = (url: string, data: any = {}) =>
  instance.patch(url, data).then((res) => res.data)

export const del = (url: string) => instance.delete(url)
