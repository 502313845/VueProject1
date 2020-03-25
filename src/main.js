//import app
import Vue from '../node_modules/vue/dist/vue.js'

//import app root
import app from './App.vue'


import vuere from 'vue-resource'

Vue.use(vuere)
//import router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//import router.js module
import router from './router.js'


//import minitui component
import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(mintui)

//import mui css style
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

var vm =new Vue({

    el:'#app',
    data:{
        
    },
   
    render:c=>c(app),
    router,
})
