const { ApolloServer, gql } = require('apollo-server');
const { RESTDataSource } = require('apollo-datasource-rest');

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
type AllDogs {
	id: ID
  name: String
	temperament: String
	lifeSpan: String
	height: String
	weight: String
}
type Query {
	favoriteDogs: [FavoriteDogs]
	getDogs: [AllDogs]
	getDog(id: Int): FavoriteDogs
}
type DeleteFavDog {
	ok: Boolean
}
type Mutation {
	editFavDog(id: ID!, newTemperament: String!): FavoriteDogs
	addNewFavDog(id: ID, name: String, temperament: String, lifeSpan: String, height: String, weight: String, url: String): [FavoriteDogs]
	deleteFavDog(id: ID!, name: String): DeleteFavDog
}
`;

class DogsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.thedogapi.com/v1/';
  }

  async getDogByBreed(id) {
		try {
			return this.get(`/images/search?include_breed-1&breed_id=${id}`);
		} catch (error) {
			console.error("CAN NOT FETCH THIS DOG", error);
		}
	}
	
	async getAllDogs() {
		try {
			const response = await this.get(`breeds`);
			return response;
		} catch (error) {
			console.error("CAN NOT FETCH DOGS", error);
		}
	}
}

const resolvers = {
	Query: {
		favoriteDogs: () => {
			return models.favDogs.list()
		},
		getDogs: async (_source, { id }, { dataSources }) => {
			const data = await dataSources.DogsAPI.getAllDogs();
			let result = [];
			data.forEach(dog => {
						result.push({
						"id": dog.id,
						"name": dog.name,
						"temperament": dog.temperament,
						"lifeSpan": dog.life_span,
						"height": dog.height.metric,
						"weight": dog.weight.metric
						})
			})
			return result;
    },
		getDog: async (_source, { id }, { dataSources }) => {
			const	[data] = await dataSources.DogsAPI.getDogByBreed(id);
			const {url, breeds} = data;
			const dogObj = {id,
				url, 
				name: breeds[0].name,
				temperament: breeds[0].temperament,
				lifeSpan: breeds[0].life_span,
				height: breeds[0].height.metric,
				weight: breeds[0].weight.metric
			}
      return dogObj;
    },
	},
	Mutation: {
		editFavDog: (_, args) => {
			let new_dog = knex("fav_dogs").where("id", "=", args.id).update({
        name: args.name,
        temperament: args.newTemperament,
				lifeSpan: args.life_span,
				height: args.height,
				weight: args.weight,
      });
			return new_dog;
		},
		addNewFavDog: (_, args) => {
			if (!args.id) {
			console.log("ARGS FOR ADD", args)
			const new_id = Math.floor(Math.random() * 10000)
			args["id"] = new_id;
			}
			models.favDogs.create(args);
			return models.favDogs.list();
		},
		deleteFavDog: (_, args) => {
			console.log("DELETING???", args.id)
			return knex("fav_dogs").del().where("id", "=", args.id);
		},
	}
};

const server = new ApolloServer({ 
	typeDefs, 
	resolvers, 
	dataSources: () => {
	return {
		DogsAPI: new DogsAPI() 
	} 
}});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});