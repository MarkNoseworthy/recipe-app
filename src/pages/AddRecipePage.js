import React, { useState } from 'react';

const AddRecipePage = ({ recipes, setRecipes }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [directions, setDirections] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = {
            id: recipes.length + 1,
            name,
            description,
            ingredients,
            directions
        };

        setRecipes([...recipes, newRecipe]);

        setName('');
        setDescription('');
        setIngredients('');
        setDirections('');
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
            <div>
                <label htmlFor="ingredients">Recipe Ingredients:</label>
                <textarea
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                ></textarea>
            </div>
            <div>
                <label htmlFor="directions">Recipe Directions:</label>
                <textarea
                    id="directions"
                    value={directions}
                    onChange={(e) => setDirections(e.target.value)}
                ></textarea>
            </div>
            <input type="file"  accept=".jpg, .png, .jpeg" />

            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipePage;