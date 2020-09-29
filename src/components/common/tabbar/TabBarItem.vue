<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isOnlyColor"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot> </div>
    <div :style="whatthisStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      isStyleActive:{
        type:String,
        default:'red'
      },
      path:{
        type: String
      }
    },
    data(){
      return {

      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    },
    computed:{
      //只有一个分类又颜色
      isOnlyColor(){
        //如果当前的路由包含当前的属性值里的路由 就说明他们是同一个路由
       return this.$route.path.indexOf(this.path) !== -1
      },
      whatthisStyle(){
        return this.isOnlyColor ? {color:this.isStyleActive}:{}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
      flex: 1;
      height: 49px;
      text-align: center;
      font-size: 14px;

  }

  .tab-bar-item img{
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-bottom: 3px;
    margin-top: 2px;

  }


</style>
