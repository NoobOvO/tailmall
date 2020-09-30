<template>
      <div class="home-recommend">
        <div v-for="res in recommends" class="home-recommend-item">
          <a :href="res.link">
            <img :src="res.image">
            <p>{{res.title}}</p>
          </a>
        </div>
      </div>


</template>

<script>
  export default {
    name: "HomeRecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .home-recommend{
    display: flex;
    text-align: center;
    padding: 5px;
    border-bottom: 10px solid #eee;
  }
  .home-recommend img{
    width: 80px;
    height: 80px;
    margin-bottom: 5px;
  }
  .home-recommend-item{
    flex: 1;
  }
</style>
