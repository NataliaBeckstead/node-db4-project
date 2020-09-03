
exports.up = function(knex) {
  return(
      knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('id');
            tbl.string('name').notNullable().unique().index();
        })

        .createTable('ingregients', tbl => {
            tbl.increments('id');
            tbl.string('name_of_ingredient').notNullable().unique().index();
            tbl.string('units').notNullable();
        })

        .createTable('recipe_ingregients', tbl => {
            tbl.increments('id');

            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');

            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingregients')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');

            tbl.unique(['recipe_id', 'ingredient_id']);

            tbl.float('quantity').notNullable();
        })

        .createTable('steps', tbl => {
            tbl.increments('id');
            tbl.text('step').notNullable();

            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
  )
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('steps')
        .dropTableIfExists('recipe_ingregients')
        .dropTableIfExists('ingregients')
        .dropTableIfExists('recipes');
};
