import apis from '../api'
import http from '../http'
// 获取例子接口
export const onLogin = (params = {}) => http.post(apis.onLogin, params) 