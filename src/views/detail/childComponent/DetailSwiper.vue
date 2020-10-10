<template>
  <swiper>
    <swiper-item class="swiper-item"  v-for="(item,index) in topImages" :key="item">
      <img :src="item" @load="imgLoad" >
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'


  export default {
    name: "DetailSwiper",
    data(){
     return{
       res:null,
       isLoad:false
     }
    },
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImages:{
        type:Array,
        default:[]
      }
    },
    created(){


    },
    methods:{
      imgLoad(){
        //获取一次就行了 用来获取tabcotrol的高度
        if(!this.isLoad){
          this.$emit('imgLoad');
          this.isLoad = true;
        }

      }


      }




  }
</script>

<style scoped>
.swiper-item{
   height: 300px;
  overflow: hidden;
}
</style>
