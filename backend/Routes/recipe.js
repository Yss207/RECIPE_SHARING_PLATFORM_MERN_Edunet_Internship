import express from 'express';
import { create, getAllRecipe, getRecipeById, getRecipeByUserId, getSavedRecipe, saveRecipeById } from '../Controllers/RecipeController.js';
import { Authenticate } from '../Middleware/Auth.js';

const router = express.Router();

// create recipe
router.post('/create', Authenticate, create);

// get all recipe
router.get('/', getAllRecipe);

// get saved recipe
router.get("/saved", getSavedRecipe);

//get recipe by id
router.get('/:id', getRecipeById);

//get recipe by user id
router.get('/user/:id', getRecipeByUserId);

// saved Recipe by Id
router.post("/save/:id", saveRecipeById);

export default router;
