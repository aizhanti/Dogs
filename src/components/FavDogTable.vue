<template>
  <div id="favDogTable" v-bind="onChange()" >
  <h1>My Favorite Dogs</h1>
    <table id="dog-description" >
      <tr>
      <th>Action</th>
      <th>Name</th>
      <th>Temperament</th>
      <th>Life span</th>
      <th>Height [cm]</th>
      <th>Weight [kg]</th>
      <th>Image</th>
      </tr>
      <tr v-for="dog in this.dogs" :key="dog.id">
      <td>
        <button class="button change_btn" @click="changeFav(dog)">Change</button>
        <button class="button delete_btn" @click="deleteFav(dog)">Delete</button>
      </td>
      <td>{{ dog.name }}</td>
      <td>{{ dog.temperament }}</td>
      <td>{{ dog.lifeSpan }}</td>
      <td>{{ dog.height }}</td>
      <td>{{ dog.weight }}</td> 
      <td><img id="dog-image" :src="dog.url" v-bind:alt="dog.name"></img></td>
      </tr>
    </table>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: "FavDogTable",
  data() {
    return {
      dogs: [],
      selectedDog: {name: "dog"}
    };
  },
  methods: {
    async onChange() {
      const getFavDogsData = await this.$apollo.query({
        query: gql`query favoriteDogs {
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
      });
      this.dogs = getFavDogsData.data.favoriteDogs;
    },
    async changeFav(thisDog) {
      this.selectedDog = thisDog;
      // await this.$apollo.mutate({
      //   mutation: gql`mutation (
      //     $id:ID,
      //     $name: String, 
      //     $temperament: String, 
      //     $lifeSpan: String, 
      //     $height: String, 
      //     $weight: String, 
      //     $url: String
      //     ){
      //     editFavDog (
      //       id:$id,
      //       name:$name, 
      //       temperament:$temperament, 
      //       lifeSpan:$lifeSpan, 
      //       height:$height, 
      //       weight:$weight, 
      //       url:$url
      //       ) {
      //       id
      //       url
      //       name
      //       temperament
      //       lifeSpan
      //       height
      //       weight
      //     }
      //   }`,
      //   variables: {
      //     id: Number(this.selectedDog.id),
      //     name: this.selectedDog.name, 
      //     temperament: this.selectedDog.temperament, 
      //     lifeSpan: this.selectedDog.lifeSpan, 
      //     height: this.selectedDog.height, 
      //     weight: this.selectedDog.weight, 
      //     url: this.selectedDog.url
      //   }
      // });
    },
    async deleteFav(thisDog) {
      this.selectedDog = thisDog;
      // console.log(this.selectedDog)
      await this.$apollo.mutate({
        mutation: gql`mutation (
          $id:ID!,
          ){
          deleteFavDog (
            id:$id,
            ) {
                ok
          }
        }`,
        variables: {
          id: Number(this.selectedDog.id)
        }
      });
      this.onChange();
    }
}
}
</script>

<style scoped>
#dog-image {
  margin: 16px auto;
	object-fit: contain;
	width: 10%;
	cursor: pointer;
}

table, {
  float:center;
  border: 1px solid black;
  border-collapse: collapse;
}
td, th {
float:center;
 white-space: nowrap;
}
</style>