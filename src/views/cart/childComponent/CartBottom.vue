<template>
  <div id="cart-bottom">
    <div class="cart-left">
      <check-button :is-checked="isSelectAll" @click.native="allClick"></check-button>
      <span class="cart-all">全选</span>
    </div>
    <div class="cart-center">
     <span> 合计: ￥{{totalPrice}}</span>
    </div>
    <div class="cart-right">
      <span>全计算: {{sumCount}}</span>
    </div>

  </div>
</template>

<script>
  import CheckButton from 'components/contents/checkbutton/CheckButton'
  export default {
    name: "CartBottom",
    components:{
      CheckButton
    },
    computed:{
      totalPrice(){
        return this.$store.state.cartList.filter(item =>{
          return item.checked
        }).reduce((pre,item)=>{
         return  pre + item.realPrice*item.count
        },0).toFixed(2)

      },
      sumCount(){
        return this.$store.state.cartList.filter(item=>{
          return item.checked
        }).length
      },
      isSelectAll(){
        //改变全选按钮的状态
        if(this.$store.state.cartList.length === 0 )return false;
       for(let item of this.$store.state.cartList){
         if(!item.checked){
           return false
         }
       }
        return true
      }

    },
    methods:{
      allClick(){
        //全选按钮点击功能
        if(this.isSelectAll){ //全部选中时 变为 全不选中
          this.$store.state.cartList.filter(item=>{item.checked=false})
        }else{ //其他情况 一律全选中
          this.$store.state.cartList.filter(item=>{item.checked=true})
        }

      }
    }
  }
</script>

<style scoped>
  #cart-bottom{
    height: 40px;
    background-color: #ccc;
    display: flex;
    border-top: solid 1px rgba(188,188,188,.09);

  }
  .cart-left{
    width: 60px;
    display: flex;
    align-items: center;
    margin-left: 5px;
  }
  .cart-all{
    margin-left: 5px;
  }
  .cart-center{
    flex: 1;
  }
  .cart-right{
    width: 80px;
    line-height: 40px;
    background-color: red;
    color: #fff;
    text-align: center;
  }
  .cart-center{
    line-height: 40px;
    text-align: center;
    background-color: orange;

  }
</style>
