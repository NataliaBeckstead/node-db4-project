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

// router.get('/:id/shoppingList', (req, res) => {
//   const { id } = req.params;

//   Recipes.findById(id)
//   .then(scheme => {
//     if (scheme) {
//       res.json(scheme);
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id.' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get schemes' });
//   });
// });

// router.get('/:id/instructions', (req, res) => {
//   const { id } = req.params;

//   Recipes.findSteps(id)
//   .then(steps => {
//     if (steps.length) {
//       res.json(steps);
//     } else {
//       res.status(404).json({ message: 'Could not find steps for given scheme' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get steps' });
//   });
// });

module.exports = router;