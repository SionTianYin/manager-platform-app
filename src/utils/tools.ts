import logo from '../assets/logo.jpg'

export const defaultImg = logo

// 服务器地址
export const serverUrl = 'http://localhost:3000'

//设置token
export const setToken = (token: string) =>
  sessionStorage.setItem('token', token)

//获取token
export const getToken = () => sessionStorage.getItem('token')
