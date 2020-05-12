module.exports = function(knex) {
  return {
    favDogs: require("./favDogs")(knex)
  };
};
