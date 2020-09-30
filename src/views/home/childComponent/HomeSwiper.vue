<template>
  <swiper>
    <swiper-item v-for="ban in banners">
      <a :href="ban.link">
        <img :src="ban.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    components:{
      Swiper,SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }

      }
    }
  }
</script>

<style scoped>

</style>
