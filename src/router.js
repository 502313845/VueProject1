import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/Home.vue'
import MemberContainer from './components/tabbar/Members.vue'
import ShoppingContainer from './components/tabbar/Shopping.vue'
import SearchContainer from './components/tabbar/Search.vue'

var router= new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopping',component:ShoppingContainer},
        {path:'/search',component:SearchContainer}

    ],

    linkActiveClass:'mui-active'






})

export default router