<template>
  <div id="app">
    <Header title="Select a dog"/>
    <select v-model="dog">
        <option v-for="favDog in favoriteDogs" :key="favDog.id" :value="favDog" >
          {{ favDog.name }}
        </option>
		</select>
    <p></p>
    <dl id="dog-description">
      <dt>Name</dt><dd>{{ dog.name }}</dd>
      <dt>Temperament</dt><dd>{{ dog.temperament }}</dd>
	    <dt>Life span</dt><dd>{{ dog.lifeSpan }}</dd>
	    <dt>Height [cm]</dt><dd>{{ dog.height }}</dd>
	    <dt>Weight [kg]</dt><dd>{{ dog.weight }}</dd> 
    </dl>
    <img id="dog-image" :src="dog.url" alt="This is a picture of a dog"></img>
    <button>Add to Favorites</button>

  </div>
</template>

<script>
import Header from "./components/Header.vue"
import gql from 'graphql-tag'

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      dog: {}
    };
  },

  methods: {
    // async editFavDog() {
    //   // Call to the graphql mutation
    //   const result = await this.$apollo.mutate({
    //     // Query
    //     mutation: gql`mutation ($id: ID, , newTemperament: String) {
    //       editFavDog(id: $id) {
    //         id
    //         label
    //       }
    //     }`,
    //     // Parameters
    //     variables: {
    //       label: this.newTag,
    //     },
    //   })
    // }
  },

  apollo: {
    // Simple query that will update the 'hello' vue property
    favoriteDogs: gql`query {
      favoriteDogs {
        id
        url
        name
        temperament
        lifeSpan
        height
        weight
      }
    }`,
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width:20%;
}
</style>