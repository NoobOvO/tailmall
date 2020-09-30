import {request} from './require'

export function getHomeMultiData() {
    return request({
      url:'/home/multidata'
    })
}
