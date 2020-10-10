<template>
  <div id="goodsList">
    <goods-list-item v-for="(item,index ) in goods" :item="item" :key="index" ></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from 'components/contents/homegoods/GoodsListItem'
  export default {
    name: "GoodsList",
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
  #goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 2px;

  }
</style>
