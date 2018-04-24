import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router/index'
import axios from 'axios'
import {store} from './store/store.js'

Vue.use(VueRouter)

axios.defaults.baseURL='https://wd5436035796wuzosa.wilddogio.com/'
//配置Vue原(在任何组件中都可以正常使用axios)
Vue.prototype.$axios=axios
const router = new VueRouter({
  routes,
  mode: 'history',
  // 滚动行为
  scrollBehavior(to,from,savedPosition){
    // return {x:0,y:100}
    // return { selector:'.btn'}
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  }
})

//全局守卫
// router.beforeEach((to, from, next) =>{
//   // alert("还没有登录,请先登录!");
//   // next();
//   //console.log(to)

//   if(to.path=='/login'||to.path=='/register'){
//     next();
//   }else{
//     alert("还没有登录,请先登录!");
//     next('/login');
//   }
// })

//后置勾子
// router.afterEach((to, from) => {
   // alert(after Each)
// })


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
