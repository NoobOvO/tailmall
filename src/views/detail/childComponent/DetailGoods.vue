<template>
  <div class="detail-goods" v-if="Object.keys(goods).length !== 0">
    <div class="title">
       {{goods.title}}
    </div>
    <div class="info">
      <span class="n_price">￥{{goods.lowNowPrice}}</span>
      <span class="o_price">{{goods.oldPrice}}</span>
      <span class="discount" :style="{ backgroundColor:goods.discountBgColor}">{{goods.discountDesc}}</span>

    </div>
    <div class="columns" >
  <span v-for="(item,index) in goods.columns"  :key="index">
    {{item}}
  </span>
    </div>
    <div class="services">
      <div
      v-for="(item,index) in goods.services"
      v-if="showIcon(item)"
      :key="index"
      >
       <img :src="item.icon" alt="">
       <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoods",
    props:{
      goods:{
        type:Object,
        default:{}
      }
    },
    computed:{
      showIcon(){
       return function (item) {
         return item.icon && item.name !== '72小时发货'
       }
      }
    }
  }
</script>

<style scoped>
  .detail-goods{
    color: #999;
    margin-top: 15px;
    padding: 0 8px;
    border-bottom: 5px solid #f2f5f8;
  }
.title{
  color: #222;
  font-size: 13px;
}
.info{
  margin-top: 10px;
}
.info .n_price{
  font-size: 24px;
  color: var(--color-high-text);
}
.info .o_price{
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info .discount{
font-size: 13px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 5px;
  margin-left: 5px;


}
.columns{
display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-top: 15px;
  line-height: 30px;
  border-bottom: 1px solid rgba(100,100,100,.1);

}
.services{
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
  .services img{
   height: 14px;
   width: 14px;
    position: relative;
    top: 2px;

  }
  .services span{
  font-size: 13px;
  color: #333;

  }

</style>
