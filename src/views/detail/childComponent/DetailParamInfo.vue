<template>
  <div id="detail-param-info">
    
    <table class="rule">
      <tbody>
         <tr v-for="(item,index) in paramInfo.sizes"
             :key="index"
             v-if="item[1] !== '-'"
         >
           <th>{{item[0]}}</th>
           <td
           v-for="(tditem,tdindex) in item.length-1"
           :key="tdindex"
           >{{item[tditem]}}</td>
         </tr>
      </tbody>
    </table>

    <table class="set">
      <tbody>
      <tr v-for="(item,index) in paramInfo.info" :key="index">
        <th>{{item.key}}</th>
        <td class="set-span">{{item.value}}</td>
      </tr>
      </tbody>
    </table>


    <div class="info-img" v-if="paramInfo.img !== ''">
      <img :src="paramInfo.img" >
    </div>
    
    
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      paramInfo:{
        type:Object
      }
    }
  }
</script>

<style scoped>
  #detail-param-info{
    font-size: 14px;
    padding: 10px 10px;
    border: 1px solid rgba(128,128,128,0.02);
  }

 .rule,.set{
   border-bottom: 1px solid rgba(128, 128, 128, 0.5);
   border-collapse: collapse; /* 可以合并邻近的边框，且可以让tr显示出边框 */
   margin: 0 auto;
   margin-bottom: 10px;
   width: 300px;
 }
  .rule tr,.set tr{
    border-bottom: 1px solid rgba(128, 128, 128, 0.5);
  }
  .rule th{
    text-align: left;
    padding-right: 10px;
  }
 .rule td{
   padding: 7px;
 }
  .set th{
    text-align: left;
    padding:5px 3px 3px  0;
    width: 40px;
  }
 .set td{
  color: var(--color-high-text);
   padding: 7px;
 }
.set-span{

}



  .info-img img{
    width: 100%;
  }
</style>
