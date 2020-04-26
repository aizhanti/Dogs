exports.up = function(knex, Promise) {
	return knex.schema.createTable('fav_dogs', (t) => {
		t.increments() // auto-incrementing id column
			.index(); // index this column

		t.string('name')
			.notNullable()
			.index();

		t.string('temperament');
		t.string('life_span');
		t.string('height');
		t.string('weight');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('fav_dogs');
};
