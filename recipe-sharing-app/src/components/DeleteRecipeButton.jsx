import { useDispatch } from 'zustand/hooks';
import { recipeStore } from './path/to/your/store';

function DeleteRecipeButton({ recipe }) {
  const dispatch = useDispatch(recipeStore);

  const handleDelete = () => {
    dispatch.deleteRecipe(recipe.id);
  };

  return <button onClick={handleDelete}></button>
};