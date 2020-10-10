<template>
  <div class="cart-item" >
   <div class="items" v-for="item in cartList">
     <div class="item-selector">
       <check-button  @click.native="item.checked = !item.checked" :is-checked="item.checked"></check-button>
     </div>
     <div class="item-img">
         <img :src="item.topimg" alt="图片">
     </div>
     <div class="item-info">
          <div class="item-span">
            <div class="item-title">{{item.title}}</div>
            <div class="item-desc">{{item.desc}}</div>
          </div>
        <div class="info-item">
         <div class="item-price left">￥{{item.realPrice}}</div>
         <div class="item-count">数量:{{item.count}}</div>
        </div>
     </div>
   </div>
  </div>
</template>

<script>
   import CheckButton from 'components/contents/checkbutton/CheckButton'


  export default {
    name: "CartItem",
    components: {CheckButton},
    props:{
      cartList:{
        type:Array
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
.items{
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

  .item-selector{
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.item-img{
  padding: 5px;

}
.item-img img{
  width: 80px;
  height: 100px;
  border-radius: 5px;
  display: block;
}
.item-title,.item-desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info{
  margin-top: 7px;
  width: 70%;

}


.item-desc{
  font-size: 14px;
  color: #ccc;
  margin-top: 15px;

}

.item-price{
  color: orange;
 margin-top: 20px;
}
  .item-count{
  margin-left: 150px;
   position: relative;
    top: 20px;
  }
</style>
