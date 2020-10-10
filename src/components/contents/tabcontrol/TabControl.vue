<template>
  <div id="tab-control">
    <div class="tab-control-item" v-for="(item,index) in title" :class="{active:index==currentIndex}" @click="itemClick(index)" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemClick(index) {
        this.currentIndex=index;
        //传到父组件 供父组件使用
        this.$emit('tabClick',index);
      }
    },
    props:{
      title:{
        type:Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style scoped>
      #tab-control{
        display: flex;
        text-align: center;
        font-size: 14px;
        background-color: #fff;
        height: 22px;
      }
      .tab-control-item{
        flex: 1;
      }
      .active{
        color: #ff5777;

      }
      .active span{
        border-bottom: 3px solid #ff5777;
        padding: 5px;
      }

</style>
