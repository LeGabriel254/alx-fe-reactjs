import React, { useState, useEffect } from 'react';
import image from  "./images "
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch the recipes from data.json when the component mounts
  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-700 mb-4">{recipe.summary}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
