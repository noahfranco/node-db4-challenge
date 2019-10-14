
exports.seed = function(knex) {
  return knex("instructions").insert()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        {id: 1, instructions: "put into over and cook for 20 min",  recipes_id: 2 },
        {id: 2, instructions: "put into grill and cook as needed",  recipes_id: 1 },
      ]);
    });
};
