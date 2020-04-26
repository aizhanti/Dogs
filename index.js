module.exports = function (knex) {
	return {
		main: require('./main')(knex),
	};
};
