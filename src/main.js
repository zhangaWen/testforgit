import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from './router'
//引入elemnt
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueUeDitor from './components/pages/VueUEDitor'
Vue.use(ElementUI)
// css样式是否有效
//引入  ueditor组件容器
import VueUeditorWrap from 'vue-ueditor-wrap'
Vue.component('VueUeditorWrap',VueUeditorWrap)
Vue.use(VueUeDitor)
//取消vue的提示
Vue.config.productionTip = false
//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
