
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Boiled egg'},
        {id: 2, name: 'Omelette'},
        {id: 3, name: 'Biscuit cake base'}        
      ]);
    });
};
