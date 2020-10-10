import axios from 'axios'

export function request(config) {

const instance=axios.create({
  //baseURL:'http://123.207.32.32:8000',
  //学习的人多 服务器必爆炸
  baseURL:'',
  timeout:5000
})
  //请求拦截器
instance.interceptors.request.use(
     config=>{return config},
    err=>{

  })
  //响应拦截器
instance.interceptors.response.use(res=>{
  return res.data
},
  err=>{
console.log(err)
  }
  )

return instance(config)
}
