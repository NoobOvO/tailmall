<template>
  <div  ref="wrapper" class="wrapper">
    <div class="real">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'


  //better-scroll 让移动端滚轮体验更好 局部滚动
  export default {
    name: "Scroll",
    data(){
      return {
        scroller:null
      }
    },
    props:{
     probeType:{
       type:Number,
       default(){
         return 0;
       }
     },
      isPullUpload:{
       type:Boolean,
        default : true
      }
    },
    mounted(){
     this.scroller= new BScroll(this.$refs.wrapper,{
       click:true,
       probeType:this.probeType,
       pullUpLoad:this.isPullUpload
     })
      this.scroller.on('scroll',(position)=>{
        //1.监听滚动的位置
        //监听位置 根据位置让backTop是否显示或隐藏
        this.$emit('scrollContent',position)
      })
       //2.监听上拉的事件
      this.scroller.on('pullingUp',()=>{
          this.$emit('pullingUp')

      })



    },
    methods:{
      backTop(x,y,time=300){
        this.scroller.scrollTo(x,y,time)
      },
      finishLoad(){
        this.scroller.finishPullUp();
      },
      //解决图片加载不了的问题
      //为什么会出这种状况 搞得我一天一宿没睡觉亲耗子 因为better-scroll会对item高度提前计算,但图片资源那时候还没加载过来,导致scrollerheight很低
      //如何解决 用的事件总线  在goodsitem的图片 每onload一次 就让scroller.refresh一次
      imgLoadF(){
        //console.log('refresh了几次');
        this.scroller.refresh();
      },
      //保存Scroll的当前Y的位置
      currentY(){
        return this.scroller.y
      }

    }
  }
</script>

<style scoped>

</style>
