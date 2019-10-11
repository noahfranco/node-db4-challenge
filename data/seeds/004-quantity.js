
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {id: 1, quantity: 23 },
        {id: 2, quantity: 12 },
      ]);
    });
};
