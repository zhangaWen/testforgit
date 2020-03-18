import Vue from 'vue'
import VueRouter from 'vue-router'
// vue-router的promise问题
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
import routes from './routes'
export default new VueRouter({
  mode: 'history',
  routes
})