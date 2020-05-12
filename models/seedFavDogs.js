const config = require("./knexfile");
const knex = require("knex")(config);
const models = require("../models")(knex);

const data = require("../data/favoriteDogsDB");

data.favoriteDogsDB.forEach(dog => {
  // models.favDogs.create(dog);
});
