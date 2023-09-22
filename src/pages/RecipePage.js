import { useState } from "react";
import recipes from './recipes.json';


const RecipePage = () => {
    const [recipeData, setRecipeData] = useState(recipes);

    return (
        <>
            <h1>Recipes</h1>
            { recipeData &&
            recipeData.map(({name, ingredients, directions, description, image}) => (
                <div>
                    <h2>{name}</h2>
                    <img src={image} alt={name}/>
                    <p>{description}</p>
                    <h3>Ingredients</h3>
                    <p>{ingredients}</p>
                    <h3>Directions</h3>
                    <p>{directions}</p>
                </div>
            ))}
        </>
    );
}

export default RecipePage;