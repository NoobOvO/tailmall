import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//懒加载
const Home = ()=>import('views/home/Home');
const Profile = ()=>import('views/profile/Profile');
const Category = ()=>import('views/category/Category');
const Cart = ()=>import('views/cart/Cart');



const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
   path:'/category',
   component:Category
  },
  {
   path:'/profile',
   component:Profile
  },
  {
   path:'/cart',
   component:Cart
  },
]
const router=new Router({
  routes,
  mode:'history'
})

export default router;
