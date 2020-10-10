<template>
  <div >
    <img src="../../../assets/img/cart/tick.svg" :class="{active:isChecked}" class="check-button" >
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
  .check-button{
    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .active{
    border-color: red;
    background-color: red;
  }
</style>
