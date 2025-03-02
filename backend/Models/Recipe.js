import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ist: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array, // Storing ingredients as an array
        required: true,
    },
    img: {
        type: String,
        default: null, // Make it optional by setting default to null
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
});

export const Recipe = mongoose.model("recipe", recipeSchema);
