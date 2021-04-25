import Vue from 'vue'
import Router from 'vue-router';
import Home from "../pages/home.vue"

Vue.use(Router)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{layout:"white-logo", class:'home'}
    },
]
export default new Router({
    routes,
    mode:"history"
})