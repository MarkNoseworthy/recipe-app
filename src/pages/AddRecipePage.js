import React, { useState } from 'react';

const AddRecipePage = ({ recipes, setRecipes }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new recipe object
        const newRecipe = {
            id: recipes.length + 1,
            name,
            description
        };

        // Add the new recipe to the list of recipes in state
        setRecipes([...recipes, newRecipe]);

        // Clear the form inputs
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Recipe</h2>
            <div>
                <label htmlFor="name">Recipe Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Recipe Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipePage;