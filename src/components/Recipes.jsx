import { useState, useEffect } from 'react';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes() {
    const results = await fetch("https://api.sampleapis.com/recipes/recipes");
    const json = await results.json();
    setRecipes(json);
  }

  useEffect(() => {
    fetchRecipes();

    
    return () => {
      console.log('Unmounted');
    };
  }, []);

  const handleClick = (title) => {
    document.title = title;
  }
  
  
    return (
        <div className="recipe-container">
            {recipes.map(recipe => (
                <div key={recipe.id}  className="recipe" onClick={(() => handleClick(recipe.title))}>
                    <h2>{recipe.title}</h2>
                    <p><strong>Description:</strong>{recipe.description}</p>
                <   p><strong>Ingredients:</strong>{recipe.ingredients}</p>
                <   p><strong>Directions:</strong>{recipe.directions}</p>
                </div>))}
        </div>
    );
}

export default Recipes;