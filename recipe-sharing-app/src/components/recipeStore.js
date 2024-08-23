import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));

const recipeStore = createStore((set) => ({
  recipes: [],
  updateRecipe: (recipeId, updatedRecipe) =>
    set({
      recipes: recipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, ...updatedRecipe } : recipe
      ),
    }),
  // ... other actions
}));
const deleteRecipe = createStore((set) => ({
  recipes: [],
  deleteRecipe: (recipeId) =>
    set({
      recipes: recipes.filter((recipe) => recipe.id !== recipeId),
    }),

}));

export default useRecipeStore;