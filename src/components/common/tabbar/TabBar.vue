<template>
  <div id="tab-bar">
    <slot>
    </slot>
  </div>
</template>

<script>
  import TabBarItem from "./TabBarItem";
  export default {
    name: "TabBar",
    components: {TabBarItem},
    component: {
      TabBarItem
    }
  }
</script>

<style scoped>
  #tab-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background-color: #f6f6f6;
    box-shadow: 0px -3px 1px rgba(100,100,100,.08);
  }



</style>
