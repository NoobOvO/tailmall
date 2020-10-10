import {
  ADD_CART,ADD_COUNT
}from './mutation-types'
export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      //判断购物车里是否有旧商品 有数量加1 没有数量变成1
      let  oldProduct=  context.state.cartList.find(item=>{
        return item.iid===payload.iid
      })
      if(oldProduct){
        //oldProduct.count+=1;
        context.commit(ADD_COUNT,oldProduct)
        resolve('当前商品数量+1')

      }else {
        payload.count=1;
        context.commit(ADD_CART,payload)
        resolve('添加了一个新的商品')
      }
    })

  }

}
