const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipe => {
            res.json(recipe);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
});

router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
  .then(list => {
    if (list) {
      res.json(list);
    } else {
      res.status(404).json({ message: 'Could not find shopping list with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get shopping list' });
  });
});

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
  .then(steps => {
    if (steps.length) {
      res.json(steps);
    } else {
      res.status(404).json({ message: 'Could not find steps for given recipe' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get steps' });
  });
});

module.exports = router;