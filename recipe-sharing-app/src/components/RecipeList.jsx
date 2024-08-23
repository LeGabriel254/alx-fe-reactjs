 // RecipeList component
 import { useRecipeStore } from '.component/recipeStore';

 const RecipeList = () => {
   const recipes = useRecipeStore(state => state.recipes);
   return (
     <div>
       {recipes.map(recipe => (
         <div key={recipe.id}>
           <h3>{recipe.title}</h3>
           <p>{recipe.description}</p>
           <h1>Recipe List</h1>
      <ul>
          <li key={recipe.id}>
            {/* Using Link instead of anchor tag */}
            <Link to={`/recipes/${recipe.id}`}>
              <h2>{recipe.title}</h2>
            </Link>
            <p>{recipe.description}</p>
          </li>
      </ul>
         </div>
       ))}

     </div>
   );
 };

 export default RecipeList;