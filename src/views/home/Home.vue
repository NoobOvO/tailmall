<template>
  <div class="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommed-view :recommends="recommends"></home-recommed-view>



  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultiData} from 'network/home.js'
 import HomeSwiper from './childComponent/HomeSwiper'
  import HomeRecommedView from './childComponent/HomeRecommendView'

  export default {
    name: "Home",
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommedView
    },
  created(){
    getHomeMultiData().then(res=>{
      console.log(res)
      //轮播图的列表信息
      this.banners = res.data.banner.list
      //详情列表信息
      this.recommends= res.data.recommend.list

    })



  }
  }
</script>

<style scoped>
.home-nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-size: 20px;
}




</style>
