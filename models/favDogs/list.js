module.exports = knex => {
  return async params => {
    let output = await knex("fav_dogs").select();
    return output;
  };
};
