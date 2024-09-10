import React, { Suspense, useState, useEffect } from 'react';
import spaghetti from "./images/spaghetti.jpg"
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false)

  // Fetch the recipes from data.json when the component mounts
  useEffect(() => {
    async function fetchData( ) {
      setLoading(true)
      try {
        const response = await fetch("/data.json"); 
        if (response.status === "ok") {
          // INFO: use this is used if you wan to persiste the data
          // if (recepies.length > 0) {
          //   // spread the existing data
          //   setRecipes([...recepies, ...response.json()])
          // } 
            setRecipes([...response.json()])
        }

      } catch (error) {
        // alert("Something happened")
        // only in dev mode
        console.log(error)
        throw new Error(error)
      } finally {
        setLoading(false)
      }
    } 
    fetchData()
    }, [
      // trigger to watch when something changes to reload the recepies.
    ]);

  return (
    <div className="container mx-auto py-10 md:p-8 ">
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       <Suspense fallBack={<Loading />}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={spaghetti} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-700 mb-4">{recipe.summary}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">
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
  <div>Loaidng....</div>
)

export default HomePage;
