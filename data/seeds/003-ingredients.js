
exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredients: "Beard, Bugger, Tomatoes ", recipes_id: "1", quantity_id: "2" },
        {id: 2, ingredients: "Cheese, Meat", recipes_id: "2", quantity_id: "1" },
      ]);
    });
};
