import { post } from '../utils/request'

//管理后台登录接口
type LoginData = {
  username: string
  password: string
}
//调用接口
export const loginAPI = (data: LoginData) => post('/auth/admin_login', data)
