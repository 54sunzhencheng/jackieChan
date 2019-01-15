//全局配置rem  px --> rem
import('./utils/rem')

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
/* Mint ui */

/* 1.全局的 */
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css' 
Vue.use(Mint)

Vue.config.productionTip = false
/* 引入全局的sass文件 */
import('./stylesheets/main.scss')
/* eslint-disable no-new */

//配置全局的axios
import axios from 'axios'
//将axios这个对象挂在vue身上
Vue.prototype.$http = axios
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
