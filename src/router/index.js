import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:()=> import('../views/Home.vue'),
    // 存在token值不能访问登录页
    beforeEnter:(to,from,next)=>{
      if(sessionStorage.getItem("token")){
        next('/about')
      }else{
        next()
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    //没有token值不能访问首页
    beforeEnter: (to, from, next) => {
     if(sessionStorage.getItem("token")){
       next()
     }else{
       next('/')
     }
    },
    children:[
     {
       path:"index",
       name:"首页",
       component:()=>import('../components/index.vue')
     },
     {
       path:"shop",
       name:"商品",
       component:()=>import('../components/shop.vue')
     }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
