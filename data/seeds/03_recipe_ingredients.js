
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingregients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingregients').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, quantity: 1}, //egg for boiled egg
        {id: 2, recipe_id: 2, ingredient_id: 1, quantity: 2}, //omelette egg
        {id: 3, recipe_id: 2, ingredient_id: 2, quantity: 1.5}, //o milk
        {id: 4, recipe_id: 2, ingredient_id: 3, quantity: 1}, //o salt
        {id: 5, recipe_id: 2, ingredient_id: 4, quantity: 0.5}, //o butter
        {id: 6, recipe_id: 3, ingredient_id: 1, quantity: 2}, //b eggs
        {id: 7, recipe_id: 3, ingredient_id: 5, quantity: 5}, //b sugar
        {id: 8, recipe_id: 3, ingredient_id: 6, quantity: 4}, //b flour
      ]);
    });
};
