<template>
  <div id="detail-common" v-if="Object.keys(detailCommon).length !== 0">
   <div class="common-title">
     <span class="common-name">用户评价</span>
     <span class="common-more">更多</span>
     <img src="~assets/img/detail/right_arrow.svg" class="arrow">
   </div>

    <div class="common-info">
      <div class="u-info">
      <img  :src="detailCommon.user.avatar">
      <span>{{detailCommon.user.uname}}</span>
      </div>
      <div class="common-content">
        <div class="content">{{detailCommon.content}}</div>
        <p class="content-info">
          {{detailCommon.created | dateShow}} {{detailCommon.style}}
        </p>
      </div>
    </div>

    <div class="common-reply" v-if="detailCommon.explain !== null">
      {{detailCommon.explain}}
    </div>

    <div class="common-img" v-if="detailCommon.images !== null">
     <img :src="item"
          v-for="(item,index) in detailCommon.images"
          :key="index">
    </div>


  </div>
</template>

<script>
  import {formatDate} from 'components/common/utils/util'
  export default {
    name: "DetailCommon",
    props:{
      detailCommon:{
        type:Object
      }
    },
    filters:{
      dateShow(value){
        const date = new Date(value*1000);
      return  formatDate(date,'yyyy-MM-dd')
      }
    }


  }
</script>

<style scoped>
  #detail-common{
    font-size: 14px;
    padding-top: 20px;
  }
  .common-title{
    position: relative;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.3);

  }
  .common-name{
    margin-left: 20px;
  }
  .common-more{
   position: absolute;
   top: 0;
   right: 20px;
  }
  .arrow{
    width: 15px;
    height: 15px;
    position: absolute;
    right: 7px;
  }
 .common-info{
   display: flex;
   padding: 15px 0;
 }
 .u-info img{

  border-radius: 50%;
   width: 80px;
   height: 80px;
   border: 1px solid rgba(128, 128, 128, 0.3);
 }
 .u-info span{
   margin-left: 3px;
   font-size: 5px;
 }
.content{
  color: #666;
  line-height: 14px;
  font-size: 12px;
}

  .common-reply{
    border-top: 1px solid rgba(128, 128, 128, 0.4);
    padding: 16px 0;
    color: darkslategray;
    line-height: 20px;
    font-size: 12px;
  }


.common-img img{
 width: auto;
  height: 200px;

}
</style>
