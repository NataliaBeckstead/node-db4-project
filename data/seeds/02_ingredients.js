
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingregients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingregients').insert([
        {id: 1, name_of_ingredient: 'eggs', units: " "},
        {id: 2, name_of_ingredient: 'milk', units: "cup"},
        {id: 3, name_of_ingredient: 'salt', units: "dash"},
        {id: 4, name_of_ingredient: 'butter', units: "tbsp"},
        {id: 5, name_of_ingredient: 'sugar', units: "tbsp"},
        {id: 6, name_of_ingredient: 'flour', units: "cup"}
      ]);
    });
};
