<template>
  <div id="cart-list">
   <scroll
     class="content"
     ref="scroll"
   >
     <cart-item :cartList="cartList" />
   </scroll>
  </div>
</template>

<script>
  import CartItem from './CartItem'
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "CartList",
    components:{
      CartItem,
      Scroll
    },
    data(){
      return{
        cartList:[]
      }
    },
    computed:{

    },
    created(){
      this.cartList=this.$store.state.cartList;
    },
    activated(){
      //解决购物车内容不能滚动问题
      this.$refs.scroll.imgLoadF();
    }
  }
</script>

<style scoped>
   #cart-list{
     height: calc(100% - 44px - 49px - 40px);
   }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
