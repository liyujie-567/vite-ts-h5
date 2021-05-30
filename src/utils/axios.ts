import axios from 'axios'
import { Toast } from 'vant'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // api配置
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8;'
  }
})

// 发起请求拦截
instance.interceptors.request.use(request => {
  // 如果有token 就携带tokon
  // const token = window.localStorage.getItem("accessToken");
  // if (token) {
  //   request.headers.common.Authorization = token;
  // }
  return request
}, error => {
  return Prosime.reject(error)
})

// 响应拦截
instance.interceptors.response.use(response => {
  // 处理鉴权，响应状态码
  return response
}, error => {
  // 处理错误状态码
  Toast.fail(showStatus(error.response.status))
  return Prosime.reject(error)
})

// 处理错误状态码
const showStatus = (status: number) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)！'
      break
    case 401:
      message = '未授权，请重新登录(401)！'
      break
    case 403:
      message = '拒绝访问(403)！'
      break
    case 404:
      message = '请求出错(404)！'
      break
    case 408:
      message = '请求超时(408)！'
      break
    case 500:
      message = '服务器错误(500)！'
      break
    case 501:
      message = '服务未实现(501)！'
      break
    case 502:
      message = '网络错误(502)！'
      break
    case 503:
      message = '服务不可用(503)！'
      break
    case 504:
      message = '网络超时(504)！'
      break
    case 505:
      message = 'HTTP版本不受支持(505)！'
      break
    default:
      message = `连接出错(${status})！`
  }
  return `${message}，请检查网络或联系管理员！`
}

export default instance
