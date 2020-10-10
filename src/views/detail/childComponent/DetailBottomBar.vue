<template>
  <div id="detail-bottom">
<div class="left">

   <div class="service">
     <i class="icon"></i>
     <span>客服</span>
   </div>

    <div class="shop">
      <i class="icon"></i>
      <span>店铺</span>
    </div>

    <div class="collect">
      <i class="icon"></i>
      <span>收藏</span>
    </div>

</div>


<div class="right">
  <div class="cart" @click="addCart">
   加入购物车
  </div>
  <div class="buy">
    购买
  </div>
</div>

  </div>
  
</template>

<script>
  //底部
  export default {
    name: "DetailBottomBar",
    methods:{
      addCart(){
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  #detail-bottom{
    height: 49px;
    position: relative;
    background-color: #fff;
    display: flex;
  }
 .left{
   display: flex;
   flex: 1;
   justify-content: space-around;
 }
 .icon{
   display: block;
   background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
   width: 22px;
   height: 22px;
   margin: 10px auto 3px;
 }
.service .icon{
   background-position: 0 -54px;

}
.left div span{
  display: block;
  margin-top: -2px;
}


.shop .icon{
  background-position:0 -98px ;
  }

  .right{
    display: flex;
    flex: 1;
    justify-content: space-around;
  }
  .cart{
    line-height: 49px;
    background-color: rgb(255, 174, 0);
    color: #000;
  }
  .buy{
    line-height: 49px;
    background-color: var(--color-tint);
    width: 50%;
    color: white;
    text-align: center;
  }
</style>
