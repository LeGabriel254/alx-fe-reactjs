import React, {useState, useEffect} from 'react'



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
   <>return (
    <div className="recipe-container" onClick={onClick}>
      {recipes.map((recipe) => (
        <div className="card" key={recipes.id}>
          <img src={recipe.image} alt={recipes.title} />
          <h2>{recipes.title}</h2>
          <p>{recipes.summary}</p>
          <input type="search" name="search" id={recipes.title} value={search} onChange={(e) => setSearch(e.target.value)}  />
        </div>
      ))}
    </div>
  );</>
  );
};

export default HomePage;
