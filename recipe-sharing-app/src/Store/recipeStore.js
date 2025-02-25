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
      recipes: recipe.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, ...updatedRecipe } : recipe
      ),
    }),
  // ... other actions
}));
const deleteRecipe = createStore((set) => ({
  recipes: [],
  deleteRecipe: (recipeId) =>
    set({
      recipes: recipe.filter((recipe) => recipe.id !== recipeId),
    }),

}));
const recipe = createStore((set) => ({
  recipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  SearchTerm: '',
  filteredRecipes: computed(() =>
    recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  ),
}));

 generateRecommendations: () => set(state => {
  const recommended = state.recipes.filter(recipe =>
    state.favorites.includes(recipe.id) && Math.random() > 0.5
  );
  return { recommendations: recommended };
})

export default useRecipeStore;