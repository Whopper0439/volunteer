// service统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

//创建了一个实例hyRequest = new HYRequest，可以有多个，可以分别有自己的配置
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //实例的拦截器
  interceptors: {
    requestInterceptor: (config) => {
      // 例子3：携带token的拦截
      const token = ''
      if (token) {
        if (!config.headers) {
          config.headers = {}
        }
        config.headers.Authorization = `Bearer ${token}`
      }

      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

export default hyRequest
