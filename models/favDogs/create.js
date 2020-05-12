module.exports = knex => {
  return async params => {
    await knex("fav_dogs")
      .insert({
        id: params.id,
        url: params.url,
        name: params.name,
        temperament: params.temperament,
        lifeSpan: params.lifeSpan,
        height: params.height,
        weight: params.weight
      })
      .returning("id");
  };
};
