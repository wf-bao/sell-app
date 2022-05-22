import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入默认样式
import './assets/css/normalize.css'
import './assets/css/property.css'
import './assets/css/reset.css'

//引入flexible帮助转化 px to rem
import 'lib-flexible/flexible';

//引入van-ui的css样式
import 'vant/lib/index.css';
//按需引用组件
import { Button, NoticeBar, Tab, Tabs } from 'vant';
Vue.use(Button).use(NoticeBar).use(Tab).use(Tabs);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
