// // RecipeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../public/data.json';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  // Fetch recipe details when component mounts
  useEffect(() => {
    const selectedRecipe = data.recipes.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
    console.log(data)
  }, [id]);
  
  // If recipe is not found, show an error message
  if (!recipe) {
    return <div className='font-bold'>Recipe not found!</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title}   className="rounded-lg shadow-lg w-full h-auto"/>
      <h2 className='font-medium'>Ingredients:</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-2" >
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Cooking Instructions:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}
