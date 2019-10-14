
exports.seed = function(knex) {
  return knex("recipes").insert()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: "Burgers"},
        {id: 2, name: "Lasagna"},
      ]);
    });
};
