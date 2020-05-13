<template>
  <div id="homepage">
    <Header class="header" title="Select a dog"/>
    <select class="breed-select" @change="onChange()" v-model="dog">
        <option v-for="adog in getDogs" :key="adog.id" :value="adog" >
          {{ adog.name }}
        </option>
		</select>
    <p></p>
    <img id="dog-image" :src="selectedDog.url" v-bind:alt="selectedDog.name"></img>
    <p></p>
    <button class="button button1" @click="addToFav()">Add to Favorites</button>
    <dl id="dog-description">
      <dt>Name</dt><dd>{{ dog.name }}</dd>
      <dt>Temperament</dt><dd>{{ dog.temperament }}</dd>
	    <dt>Life span</dt><dd>{{ dog.lifeSpan }}</dd>
	    <dt>Height [cm]</dt><dd>{{ dog.height }}</dd>
	    <dt>Weight [kg]</dt><dd>{{ dog.weight }}</dd> 
    </dl>
  </div>
</template>

<script>
import Header from "./Header.vue"

import gql from 'graphql-tag'

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      dog: {},
      selectedDog: {name: "dog"}
    };
  },

  methods: {
    async onChange() {
      const selData = await this.$apollo.query({
        query: gql`query getDogs ($id:Int){
          getDog (id:$id) {
            id
            url
            name
            temperament
            lifeSpan
            height
            weight
          }
        }`,
        variables: {
          id: Number(this.dog.id),
        }
      });
      this.selectedDog = selData.data.getDog;
    },
    async addToFav() {
      await this.$apollo.mutate({
        mutation: gql`mutation (
          $id:ID,
          $name: String, 
          $temperament: String, 
          $lifeSpan: String, 
          $height: String, 
          $weight: String, 
          $url: String
          ){
          addNewFavDog (
            id:$id,
            name:$name, 
            temperament:$temperament, 
            lifeSpan:$lifeSpan, 
            height:$height, 
            weight:$weight, 
            url:$url
            ) {
            id
            url
            name
            temperament
            lifeSpan
            height
            weight
          }
        }`,
        variables: {
          id: Number(this.selectedDog.id),
          name: this.selectedDog.name, 
          temperament: this.selectedDog.temperament, 
          lifeSpan: this.selectedDog.lifeSpan, 
          height: this.selectedDog.height, 
          weight: this.selectedDog.weight, 
          url: this.selectedDog.url
        }
      });
    }
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    getDogs: gql`query {
      getDogs {
        id
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

<style scoped>

body {
	margin: 0;
	padding: 0;
	font-family: 'Dancing Script' cursive;
	display: flex;
	flex-direction: column;
	align-items: center;
}

#header {
	background: linear-gradient(
		45deg,
		#ae7ca2 0%,
		#b382a2 5%,
		#b584a4 6%,
		#dcadb3 28%,
		#deb4b8 30%,
		#e2bab8 35%,
		#e7c0bb 38%,
		#eac5bd 46%,
		#ebc6c0 46%,
		#ebc5c4 51%,
		#eac2c2 52%,
		#e7bfc0 54%,
		#e6bdc3 57%,
		#e2b3c3 60%,
		#dbaabf 65%,
		#d9a2c1 67%,
		#d299ba 71%,
		#d397bb 71%,
		#d092b9 72%,
		#d291bb 72%,
		#ca84b6 76%,
		#cb7eb6 78%,
		#c574af 80%,
		#c46bad 84%,
		#bc5ca4 88%,
		#bd56a5 90%,
		#b84b9e 94%,
		#ba439d 96%,
		#b8409a 100%
  );	
  text-align: center;
	color: #751c16;
	margin: 0;
	margin-bottom: 32px;
	padding: 16px 0;
	width: 100%;
}

.breed-select {
	width: 320px;
}

#homepage {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#dog-image {
	margin: 16px auto;
	object-fit: contain;
	width: 25%;
	cursor: pointer;
}

#dog-description {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

#dog-description dt {
	font-size: 12px;
	font-weight: 200;
	font-variant-caps: all-petite-caps;
}

#dog-description dd {
	margin: 8px 0;
	font-size: 15px;
	color: blue;
}

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
}

.button1:hover {
  background-color: #4CAF50;
  color: white;
}

</style>