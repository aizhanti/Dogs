import Vue from 'vue'
import App from './App.vue'
import FavDogTable from './components/FavDogTable'

import ApolloClient  from 'apollo-boost'
import VueApollo from 'vue-apollo'
import router from './router'

Vue.use(VueApollo)
const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/"
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false
new Vue({
  apolloProvider,
  router,
  render: h => h(App),
}).$mount('#app')