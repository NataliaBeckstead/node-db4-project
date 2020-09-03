const db = require('../data//db-configs');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db("recipes");
}

function getShoppingList(id) {
	return db("recipe_ingregients")
		.join("ingregients", "ingregients.id", "recipe_ingregients.ingredient_id")
		.select("ingregients.name_of_ingredient", "recipe_ingregients.quantity")
		.where({ id });
}

function getInstructions(id) {
	return db("steps").where({ id }).orderBy("step_number");
}