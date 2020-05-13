import Vue from 'vue'
import Router from "vue-router"
import Home from "../components/Home"
import FavDogTable from "../components/FavDogTable"

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: "/",
    name: "Home",
    component: Home,
    },
    {
    path: "/fav-dogs",
    name: "FavDogTable",
    component: FavDogTable
    }
  ]
})
