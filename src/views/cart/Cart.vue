<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{$store.state.cartList.length}})</div>
    </nav-bar>
    <cart-list/>
    <cart-bottom/>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComponent/CartList'
  import CartBottom from './childComponent/CartBottom'
  export default {
    name: "Cart",
    components:{
      CartBottom,
      NavBar,
      CartList

    }
  }
</script>

<style scoped>
  .cart-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
  #cart{
    height: 100vh;
  }

</style>
