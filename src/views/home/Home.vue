<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control :title="['流行','刺激','精选']"
                 class="tb-control"
                 @tabClick="PtabClick"
                 ref="tabControl1"
                 :class="{tabControl:this.isTabControl}"
                 v-show="this.isTabControl"

    />
      <scroll class="content" ref="scroll"
              :probeType="3"
              @scrollContent="backTopshow"
              :is-pull-upload="true"
              @pullingUp="loadMore"
      >
          <home-swiper :banners="banners" @imgLoad="imgLoad"></home-swiper>
          <home-recommed-view :recommends="recommends"></home-recommed-view>
          <home-feature-view/>
          <tab-control :title="['流行','刺激','精选']"
                       class="tb-control"
                       @tabClick="PtabClick"
                       ref="tabControl2"
          ></tab-control>
          <goods-list :goods="showGoods"/>
      </scroll>
     <back-top @click.native="backTop" v-show="isbackTopshow"></back-top>


  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/contents/tabcontrol/TabControl'

  import GoodsList from 'components/contents/homegoods/GoodsList'
  import GoodsListItem from 'components/contents/homegoods/GoodsListItem'

  import HomeSwiper from './childComponent/HomeSwiper'
  import HomeRecommedView from './childComponent/HomeRecommendView'
  import HomeFeatureView from './childComponent/HomeFeatureView'

  import {getHomeMultiData,getHomeGoodsData} from 'network/home.js'

  import BackTop from 'components/contents/backtop/BackTop'

  import Scroll from 'components/common/scroll/Scroll'

  import {debounce} from 'components/common/utils/util'
  export default {
    name: "Home",
    data(){
      return{
        banners:[],
        recommends:[],
        //商品详情 流行 刺激 精选
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isbackTopshow:false,
        saveY:0,
        isTabControl:false,
        tabY:0

      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommedView,
      HomeFeatureView,
      TabControl,
      GoodsList,
      GoodsListItem,
      Scroll,
      BackTop

    },
  created(){
      //轮播图和列表详情页
     this.getHomeMultiDataMethod();
     //首页商品列表 pop new cell 流行 刺激 精选
     this.getHomeGoodsDataMethod('pop');
    this.getHomeGoodsDataMethod('new');
    this.getHomeGoodsDataMethod('sell');




  },
  mounted(){
      const refresh=debounce(this.$refs.scroll.imgLoadF);
    //解决better-scroll图片加载不了的bug
    this.$bus.$on('imgLoad',()=>{
      refresh();
    });
  },
    //一般在vue对象存活时,也就是keep-live下使用       可用于初始化页面数据等
    activated(){
      //回到页面时 自动跳到上次首页的位置
      this.$refs.scroll.scroller.scrollTo(0,this.saveY,0);
      this.$refs.scroll.imgLoadF()
    },
    deactivated(){
      //切换页面时 保持首页的当前状态
        this.saveY = this.$refs.scroll.currentY();
    },
  methods:{

      //事件监听
    PtabClick(index){
     switch (index) {
       case 0:
        this.currentType='pop';
         break;
       case 1:
         this.currentType='new';
         break;
       case 2:
         this.currentType='sell';
         break;
     }
     //让两个tabControl的index同步 吸顶效果
    this.$refs.tabControl1.currentIndex=index;
    this.$refs.tabControl2.currentIndex=index;
    },
    //图片加载后的吸顶效果
    imgLoad(){
        //计算tabControl到home顶端的距离
      this.tabY=this.$refs.tabControl2.$el.offsetTop
    },
    backTopshow(position){
      //backTop是否显示
      this.isbackTopshow = -(position.y)>1000
      //吸附效果
      this.isTabControl =-(position.y)>this.tabY;
    },
    backTop(){
      this.$refs.scroll.backTop(0,0,300);
    },
    loadMore(){
      //每到下一页就加载一次
      this.getHomeGoodsDataMethod(this.currentType);
    },



    getHomeMultiDataMethod(){
      getHomeMultiData().then(res=>{
        //console.log(res);
        //轮播图的列表信息
        this.banners = res.data.banner.list
        //详情列表信息
        this.recommends= res.data.recommend.list
      })
    },
    getHomeGoodsDataMethod(type){
      //相当于 一次性获得所有页码的数据 放进数组
      const page=this.goods[type].page+1;
      getHomeGoodsData(type,page).then(res=>{
       // console.log(res)
        //在数组里填充数据
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1;

        //每请求完一页 重新上拉加载 不写跳不到下一页
       this.$refs.scroll.finishLoad();

      })
    }



  }
  }
</script>

<style scoped>
  #home{
   padding-top: 44px;
   position: relative;
    height: 100vh;
  }
.home-nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-size: 20px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}


.content{
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

}
/*.content{
  margin-top: 44px;
  height: calc(100% - 93px);
  overflow: hidden;
}*/
.tabControl{
  position: relative;
  z-index: 10;

}
</style>
