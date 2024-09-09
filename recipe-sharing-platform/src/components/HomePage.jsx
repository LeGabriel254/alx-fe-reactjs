import React, {useState, useEffect} from 'react'
import data from "../data.json"


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState('')
  const onClick = e => {
    e.preventDefault()

  }

  useEffect(() => {
    // Fetch the recipe data from the data.json file
    fetch('https://via.placeholder.com/150', { mode: 'no-cors' })
  .then((response) => {
    // You'll get an opaque response, no status or body
    console.log(response);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });
  
  })

  return (
     (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md p-4 rounded">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover mb-2" />
            <h3 className="text-xl font-semibold mb-1">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    )
  );
};

export default HomePage;
