<template>
  <div id="detailNav">
    <nav-bar class="detailNav">
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center" class="detailItem">
       <span class="detailItemTitle"
             v-for="(item,index) in title"
             :class="{active:currentIndex===index}"
             @click="getItem(index)"
       > {{item}}</span>
      </div>
    </nav-bar>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'


  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return{
        title:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    created(){

    },
    methods:{
        //点哪哪亮
    getItem(index){
       this.currentIndex=index;
      //跳转至对应的位置(4个选项卡)
      this.$emit('jumpIndex',index);
    },
      //返回上一页
     back(){
      this.$router.back();
     }

    }
  }
</script>

<style scoped>

 .detailItem{
  display: flex;
   font-size: 14px;
 }
  .detailItemTitle{
    flex: 1;
  }
  .back img{
    margin-top: 10px;
  }
  .active{
    color: var(--color-tint);
  }
</style>
