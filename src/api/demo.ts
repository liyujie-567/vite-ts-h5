import request  from '../utils/request'

export const getUserInfo = (data: object) => {
  return request({
    method: 'get',
    url: '/api/profile',
    data,
    config: {}
  })
}
