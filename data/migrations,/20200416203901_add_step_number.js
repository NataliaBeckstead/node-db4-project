
exports.up = function(knex) {
    return knex.schema.alterTable('steps', tbl => {
        tbl.integer('step_number').notNullable().defaultTo(1);
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('steps', tbl => {
        tbl.dropColumn('step_number');
    })
};
