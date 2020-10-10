<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"
                    @jumpIndex="jumpIndex"
                    ref="nav"
    ></detail-nav-bar>
    <scroll class="scroll-detail"
            ref="scroller"
            @scrollContent="scrollContent"
    >
      <detail-swiper :topImages="topImg"  ></detail-swiper>
      <detail-goods  :goods="goods" ></detail-goods>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :goodsInfo="goodsInfo" @detailLoad="detailLoad" />
      <detail-param-info :paramInfo="paramInfo"  ref="params" ></detail-param-info>
      <detail-common :detail-common="detailCommon" ref="comment"/>
      <goods-list :goods="recommend"  ref="recommend" :class="{down:true}"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isbackTopshow"></back-top>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from './childComponent/DetailNavBar'
  import DetailSwiper from './childComponent/DetailSwiper'
  import DetailGoods from './childComponent/DetailGoods'
  import DetailShopInfo from './childComponent/DetailShopInfo'
  import DetailGoodsInfo from './childComponent/DetailGoodsInfo'
  import DetailParamInfo from './childComponent/DetailParamInfo'
  import DetailCommon from './childComponent/DetailCommon'
  import DetailBottomBar from './childComponent/DetailBottomBar'

  import BackTop from 'components/contents/backtop/BackTop'

  import GoodsList from 'components/contents/homegoods/GoodsList'

  import Scroll from 'components/common/scroll/Scroll'

  import {debounce} from 'components/common/utils/util'

  import {getDetailData,Goods,Shop,ParamInfo,getRecommend} from 'network/detail.js'
  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailGoods,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommon,
      DetailBottomBar,
      Scroll,
      GoodsList,
      BackTop
    },
    data(){
      return{
        iid:null,
        data:null,
        topImg:[],
        goods:{},
        shop:{},
        goodsInfo:{},
        paramInfo:{},
        detailCommon:{},
        recommend:[],
        jumpItem:[],
        currentIndex:0,
        currentY:0,
        isbackTopshow:false
      }
    },
    created(){
      this.iid= this.$route.params.iid
      //商品详情页
      getDetailData(this.iid).then(res=>{
        //console.log(res);
        const data=res.result;

        //轮播图
        this.topImg=data.itemInfo.topImages

        //轮播图下的商品信息
        this.goods=new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        )

        //店铺信息
        this.shop=new Shop(
          data.shopInfo
        )

        //一大堆图片
       this.goodsInfo=data.detailInfo


        //商品详情信息 尺寸 规格
        this.paramInfo=new ParamInfo(data.itemParams.info,data.itemParams.rule);

        //评论信息
        if(data.rate.cRate !== 0){
          this.detailCommon=data.rate.list[0]
        }



      })

      //商品的推荐信息(在商品详情页里)
      getRecommend().then(res=>{
       // console.log(res)
        this.recommend=res.data.list
      })

    },
    mounted() {





    },
    updated(){
      const refresh=debounce(this.$refs.scroller.imgLoadF);
      refresh();




    },
    methods:{
      detailLoad(){
        this.$refs.scroller.scroller.refresh();

          const jump =  debounce(()=>{
            this.jumpItem=[]
            this.jumpItem.push(0);
            this.jumpItem.push(this.$refs.params.$el.offsetTop);
            this.jumpItem.push(this.$refs.comment.$el.offsetTop);
            this.jumpItem.push(this.$refs.recommend.$el.offsetTop);
          },100)
          jump();



      },
      jumpIndex(index){
        //跳到相应的位置
        this.$refs.scroller.backTop(0,-this.jumpItem[index],100)
      },
      scrollContent(postion){
        //console.log(postion.y);
        //滚动时 nav会根据高度变亮
        this.currentY=-postion.y;
        for (let i = 0; i <this.jumpItem.length ; i++) {
          if( (this.currentIndex!=i&&i<this.jumpItem.length-1&&this.currentY>=this.jumpItem[i]&&this.currentY<=this.jumpItem[i+1])
            ||(this.currentIndex!=i&&i==this.jumpItem.length-1&&this.currentY>=this.jumpItem[i]) ){
           // console.log(i);
            this.currentIndex=i;
            this.$refs.nav.currentIndex=this.currentIndex;
          }
        }
        //backTop是否显示
        this.isbackTopshow = -(postion.y)>1000


      },
      backTop(){
        this.$refs.scroller.backTop(0,0,300);
      },
      addCart(){
        const product={};
        product.topimg  = this.topImg[0];
        product.desc=this.goodsInfo.desc;
        product.title=this.goods.title;
        product.realPrice=this.goods.lowNowPrice;
        product.iid=this.iid;


        //this.$store.commit('addCart',product)    mutation
        //this.$store.dispatch('addCart',product)  //actions
        this.$store.dispatch('addCart',product).then(res=>{
          this.$toast.show(res,1500)
        })
      }


    }
  }
</script>

<style scoped>
  .detail{
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .scroll-detail{
    height: calc(100% - 44px - 49px);
  }
  .detail-nav{
    position: relative;
    z-index: 10;
    background-color: white;
  }
  .down{
    padding-top: 50px !important;
  }
</style>
