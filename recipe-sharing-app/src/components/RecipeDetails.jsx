import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === recipeId));

  return (
    <div>
      {recipe && (
        <>
          <h1>{recipe.name}</h1>
          {/* Display other recipe details */}
        </>
      )}
    </div>
  );
}
export default RecipeDetails;