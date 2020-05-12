const { ApolloServer, gql } = require("apollo-server");
const { RESTDataSource } = require("apollo-datasource-rest");

const config = require("../models/knexfile");
const knex = require("knex")(config);
const models = require("../models")(knex);

const typeDefs = gql`
  type FavoriteDogs {
    id: ID!
    url: String
    name: String
    temperament: String
    lifeSpan: String
    height: String
    weight: String
  }
  type Query {
    favoriteDogs: [FavoriteDogs]
    getDog(id: Int): FavoriteDogs
  }
  type Mutation {
    editFavDog(id: ID!, newTemperament: String!): FavoriteDogs
    addNewFavDog(
      name: String
      temperament: String
      lifeSpan: String
      height: String
      weight: String
      url: String
    ): [FavoriteDogs]
    deleteFavDog(id: ID!, name: String): [FavoriteDogs]
  }
`;

class DogsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.thedogapi.com/v1/";
  }

  async getDogByBreed(id) {
    return this.get(`/images/search?include_breed-1&breed_id=${id}`);
  }
}

const resolvers = {
  Query: {
    favoriteDogs: () => {
      return models.favDogs.list();
    },
    getDog: async (_source, { id }, { dataSources }) => {
      const [data] = await dataSources.DogsAPI.getDogByBreed(id);
      const { url, breeds } = data;
      const dogObj = {
        id,
        url,
        name: breeds[0].name,
        temperament: breeds[0].temperament,
        lifeSpan: breeds[0].life_span,
        height: breeds[0].height.metric,
        weight: breeds[0].weight.metric
      };
      return dogObj;
    }
  },
  Mutation: {
    editFavDog: (_, args) => {
      let new_dog;
      favoriteDogsDB.forEach(dog => {
        if (dog.id == args.id) {
          new_dog = { ...dog, temperament: args.newTemperament };
          return new_dog;
        }
      });
      return new_dog;
    },
    addNewFavDog: (_, args) => {
      const new_id = Math.floor(Math.random() * 10000);
      args["id"] = new_id;
      models.favDogs.create(args);
      return models.favDogs.list();
    },
    deleteFavDog: (_, args) => {
      for (i = 0; i < favoriteDogsDB.length; i++) {
        if (
          favoriteDogsDB[i].id == args.id ||
          favoriteDogsDB[i].name == args.name
        ) {
          favoriteDogsDB.splice(i, 1);
          return favoriteDogsDB;
        }
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      DogsAPI: new DogsAPI()
    };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
