import React, {useState, useEffect} from 'react'



const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the recipe data from the data.json file
    fetch("https://via.placeholder.com/150")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, [url]);

  return (
   <>return (
    <div className="recipe-container">
      {recipes.map((recipe) => (
        <div className="card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <p>{recipe.summary}</p>
        </div>
      ))}
    </div>
  );</>
  );
};

export default HomePage;
