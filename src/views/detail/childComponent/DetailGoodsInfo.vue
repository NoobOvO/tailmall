<template>
  <div id="detail-goods-info" v-if="Object.keys(goodsInfo).length !== 0">

    <div class="goods-info-desc">
      <div style="float:left" class="line">
        <i class="dot left"></i>
      </div>
      <div class="desc-text">{{goodsInfo.desc}}</div>
      <div style="float: right" class="line">
        <i class="dot right"></i>
      </div>
    </div>

    <div class="goods-info-key">
         {{goodsInfo.detailImage[0].key}}
    </div>

    <div class="goods-img" v-for="(item,index) in goodsInfo.detailImage[0].list" :key="item">
      <img :src="item" @load="imgload">
    </div>




  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      goodsInfo:{
        type:Object
      }
    },
    methods:{
      imgload(){
        this.$emit('detailLoad')
      }
    }
  }
</script>

<style scoped>
#detail-goods-info{
  font-size: 12px;
}

.goods-info-desc{
  padding: 60px 40px;
}
.dot{
position: absolute;
width: 5px;
height: 5px;
background-color: black;
border-radius: 50%;
display: block;
top: -5px;

}
.line{
  width: 100px;
  height: 2px;
  background-color: black;
  position: relative;

}
.dot.right{
  right: 0px;
  top: -1px;
}
.dot.left{
  top: -2px;
}
.desc-text{
  color: deeppink;
}
.goods-info-key{
  text-align: center;
}
.goods-img img{
  width: 100%;
}
</style>
