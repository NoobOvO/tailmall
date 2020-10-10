<template>
  <div class="goods-item">
    <img :src="showImg" @load="imgLoad" @click="toDetail">
    <div class="goods-info">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collet">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      item:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showImg(){
        return  this.item.image || this.item.show.img
      }
    },
    methods:{
      imgLoad(){
          this.$bus.$emit('imgLoad')

      },
      toDetail(){
        this.$router.push('/detail/'+this.item.iid)

      }
    }
  }
</script>

<style scoped>
  .goods-item{
    padding-bottom: 40px;
    width: 48%;
    position: relative;

  }
img{
  width: 100%;
  border-radius: 5px;
  border: 3px solid var(--color-tint);
}
p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.price{
  margin-right: 20px;
  color: var(--color-high-text);
}
.goods-info{
  text-align: center;
}
  .goods-info .collet{
    position: relative;
  }

  .goods-info .collet::before{
  content: '';
  position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
;

}

</style>
