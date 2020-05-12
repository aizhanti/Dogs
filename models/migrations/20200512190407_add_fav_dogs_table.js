exports.up = function(knex, Promise) {
  return knex.schema.createTable("fav_dogs", t => {
    t.integer("id")
      .index()
      .unique(); // index this column

    t.string("url");

    t.string("name")
      .notNullable()
      .index();

    t.string("temperament");
    t.string("lifeSpan");
    t.string("height");
    t.string("weight");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("fav_dogs");
};
