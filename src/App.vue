<template>
  <div id="app">
    <router-link class="homelink" to="/">Home</router-link>
    <router-link class="dogslinks" to="/fav-dogs">Go to My Favorite Dogs</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import Home from "./components/Home"
import FavDogTable from "./components/FavDogTable"


export default {
  name: "App",
  components: {
    Home,
    FavDogTable,
  },
}
</script>

<style>
.homelinks {
  position: absolute;
  left: 50px;
  cursor: pointer;
}

.dogslinks {
  position: absolute;
  right: 50px;
  cursor: pointer;
}
</style>