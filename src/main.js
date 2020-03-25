//import app
import Vue from '../node_modules/vue/dist/vue.js'

//import app root
import app from './App.vue'

import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(mintui)
import './lib/mui/css/mui.css'

var vm =new Vue({

    el:'#app',
    data:{
        
    },
   
    render:c=>c(app)
})
