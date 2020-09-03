
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step: 'Put egg in water.', recipe_id: 1, step_number: 1},
        {id: 2, step: 'Boil for 10 minutes.', recipe_id: 1, step_number: 2},
        {id: 3, step: 'Cool down under rising water.', recipe_id: 1, step_number: 3},
        {id: 4, step: 'Put butter on a frying pan, warm up.', recipe_id: 2, step_number: 1},
        {id: 5, step: 'Mix eggs, milk and salt.', recipe_id: 2, step_number: 2},
        {id: 6, step: 'Pour in pan, cook for 10 minutes.', recipe_id: 2, step_number: 3},
        {id: 7, step: 'Mix eggs with sugar untill white foam.', recipe_id: 3, step_number: 1},
        {id: 8, step: 'Add flour and mix for 1-2 minutes.', recipe_id: 3, step_number: 2},
        {id: 9, step: 'Bake for 15 minutes.', recipe_id: 3, step_number: 3}
      ]);
    });
};
