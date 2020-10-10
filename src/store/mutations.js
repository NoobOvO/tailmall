import {
  ADD_CART,ADD_COUNT
}from './mutation-types'


export default {
  //mutations的唯一目的就是修改state中的状态
  [ADD_COUNT](state,payload){
    payload.count++;
  },
  [ADD_CART](state,payload){
    //payload就是传过来的product
    //没有这个商品 就添加在数组里

    //修改商品选中状态 一定要在模型里改
    payload.checked=true;
    state.cartList.push(payload);
  }



}
