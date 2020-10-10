<template>
  <div class="detail-shop" v-if="Object.keys(shop).length !==0">
<div class="shop-name">
  <img :src="shop.logo">
  <span>{{shop.name}}</span>
</div>
<div class="score-info">
  <div class="left" >
  <div class="score-sell">
    <div>{{sellValue}}万</div>
    <div style="font-size: 13px">总销量</div>
  </div>
    <div class="score-item">
      <div>{{shop.goods}}</div>
      <div style="font-size: 13px">全部宝贝</div>
    </div>

  </div>
  <div class="right">
    <table>
      <tr v-for="(item,index) in shop.score" :key="index">
       <td>{{item.name}}</td>
        <td :style="{ color: item.isBetter? 'red':'green'}">{{item.score}}</td>
        <td
          style="color: white"
          :style="{ backgroundColor: item.isBetter? 'red':'green'}"
        >{{item.better ? '高':'低'}}</td>
      </tr>
    </table>
  </div>

</div>

<div class="come-shop">进店逛逛</div>

  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type:Object
      }
    },
    computed:{
      sellValue() {
        return Math.round((this.shop.sells / 10000) * 10) / 10;
      }
    }
  }
</script>

<style scoped>
  .detail-shop{
    font-size: 14px;
    padding:0 4px;

  }


.shop-name img{
  width: 80px;
  height: 80px;
  border:1px solid rgba(100,100,100,.09);
  border-radius:50%;
}

  .shop-name span {
    margin-left: 10px;
    position: relative;
    top: -30px;
    font-size: 14px;
  }

.score-info{
  display: flex;
  padding: 0 50px;
}
.right,.left{
  flex: 1;
}
  .left{
    display: flex;
    position: relative;
    left: -20px;

  }
  .left>div{
    flex: 1;
  }
   .right{
     position: relative;
     right: -30px;
   }
  .score-sell,
  .score-item {
    text-align: center;
  }
  .score-item {
  position: relative;
    left: 10px;
  }
  .score-right > table {
    margin: 0 auto;
    font-size: 14px;
  }


  .come-shop {
    width: 100px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 5px;
    background-color: rgba(128, 128, 128, 0.3);
    margin: 0 auto;

  }

</style>
