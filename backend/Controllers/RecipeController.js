import { Recipe } from "../Models/Recipe.js";
import { SavedRecipe } from "../Models/SavedRecipe.js";

export const create = async (req, res) => {
    try {
        const { title, ist, ingredients, user } = req.body;

        // Ensure ingredients is an array
        const parsedIngredients = typeof ingredients === "string" ? JSON.parse(ingredients) : ingredients;

        const recipe = await Recipe.create({
            title,
            ist,
            ingredients: parsedIngredients,
            img: req.file ? req.file.path : null, // Changed imgurl to img
            user,
        });

        res.json({ message: "Recipe Created Successfully..!", recipe });
    } catch (error) {
        console.error("Error creating recipe:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

export const getAllRecipe = async (req, res) => {
    const recipe = await Recipe.find();
    res.json({ recipe })
};

export const getRecipeById = async (req, res) => {
    const id = req.params.id
    try {
        let recipe = await Recipe.findById(id)

        if (!recipe) res.json({ message: 'recipe not exist' })

        res.json({ message: "recipe by id", recipe })

    } catch (error) {
        res.json({ message: error })
    }
};

export const getRecipeByUserId = async (req, res) => {
    const userId = req.params.id;
    try {
        let recipe = await Recipe.find({ user: userId });

        if (!recipe) res.json({ message: "recipe not exist" });

        res.json({ message: "recipe by userId", recipe });
    } catch (error) {
        res.json({ message: error });
    }
};

export const saveRecipeById = async (req, res) => {
    const id = req.params.id

    let recipe = await SavedRecipe.findOne({ recipe: id })

    if (recipe) return res.json({ message: "recipe already saved" })

    recipe = await SavedRecipe.create({ recipe: id })

    res.json({ message: "Recipe saved Successfully..!" })
};

export const getSavedRecipe = async (req, res) => {
    const recipe = await SavedRecipe.find()
    res.json({ recipe })
};
