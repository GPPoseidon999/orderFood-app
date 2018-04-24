import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Admin from '../components/Admin.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import About from '../components/about/About.vue'
//二级路由
import Contact from '../components/about/Contact.vue'
import Delivery from '../components/about/Delivery.vue'
import History from '../components/about/History.vue'
import OrderingGuide from '../components/about/OrderingGuide.vue'


export const routes = [
  { path: '/', name: "homelink", components: {
      default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History
  } },
  { path: '/menu', name: "menulink", component: Menu },
  { path: '/admin', name: "adminlink", component: Admin,
  //beforeEnter:(to,from,next)=>{
  //路由独享守卫
  // alert("非登录状态,不能访问此页面！")

//  }
},
  { path: '/login', name: "loginlink", component: Login },
  { path: '/register', name: "registerlink", component: Register },
  {
    path: '/about', redirect: '/history', name: "aboutlink", component: About, children: [
      { path: '/about/contact', name: 'contactLink', component: Contact },
      { path: '/delivery', name: 'deliveryLink', component: Delivery },
      { path: '/history', name: 'historyLink', component: History },
      { path: '/orderingGuide', name: 'OrderingGuideLink', component: OrderingGuide }
    ]
  },
  { path: '*', redirect: '/' }  //redirect返回的路径
]
