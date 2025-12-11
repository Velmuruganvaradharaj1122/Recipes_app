const Recipe = require('../models/Recipe');


exports.createRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } 
        );
        if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
        res.status(200).json(updatedRecipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};