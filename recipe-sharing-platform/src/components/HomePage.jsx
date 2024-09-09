import React, {useState, useEffect} from 'react'
import data from "../data.json"


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const onClick = (e) => {
    e.preventDefault();
    // Perform API request here
  };


  useEffect(() => {
    fetch('https://via.placeholder.com/150')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
 


  return (
     <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md p-4 rounded">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover mb-2" />
            <h3 className="text-xl font-semibold mb-1">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
      <div className="meal-search-box">
        <input type="text" className='searchBar'  placeholder='Enter an ingredient'/>
        <button type='submit'>
          <i className='fas fa-search' id='search-btn'></i>
        </button>
      </div>
      </>
    )
};

export default HomePage;
