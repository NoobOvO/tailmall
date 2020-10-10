<template>
  <div id="toast" v-show="isShow">
   <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      message:{
        type:String
      },
      isShow:{
        type: Boolean,
        default:false
      }
    },
    methods:{
      show(res,duration){
        this.message=res;
        this.isShow=true;
        setTimeout(()=>{
          this.message='';
          this.isShow=false;
        },duration)
      }
    }
  }
</script>

<style scoped>
  #toast{
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 8px 10px;
    color:#fff;
    background-color: rgba(0,0,0,.75);
    transform: translate(-50%,-50%);
    z-index: 30;
  }

</style>
