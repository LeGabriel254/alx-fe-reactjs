import React, { Suspense, useState, useEffect } from 'react';
import spaghetti from "./images/spaghetti.jpg"
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false)

  // Fetch the recipes from data.json when the component mounts
  useEffect(() => {
    async function fetchData( ) {
      setLoading(true)
      try {
        const response = await fetch("/public/data.json"); 
        const data = await response.json()          
        setRecipes([...data])
      } catch (error) {
        throw new Error(error)
      } finally {
        setLoading(false)
      }
    } 
    fetchData()
  }, [])
    
    return (
    <div className="container mx-auto py-10 md:p-8 ">
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       <Suspense fallback={<Loading />}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-700 mb-4">{recipe.summary}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all font-extralight">
                View Recipe
              </button>
            </div>
          </div>
        ))}
       </Suspense>
      </div>
    </div>
  );
};


const Loading = () => (
  <div className='text-sm'>Loaidng....</div>
)

export default HomePage;
