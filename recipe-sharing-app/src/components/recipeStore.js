import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));


const deleteRecipe = create((set) => ({
  recipes: [],
  deleteRecipe: (recipeId) =>
    set({
      recipes: deleteRecipe.filter((recipe) => recipe.id !== recipeId),
    }),

}));
export const recipe = create((set, get) => ({
  recipes: [],
  searchTerm: "", // Fixed casing: should be lowercase
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Computed: Filter recipes based on search term
  filteredRecipes: () => {
    const { recipes, searchTerm } = get(); // Get current state
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));
 generateRecommendations: () => set(state => {
  const recommended = state.recipes.filter(recipe =>
    state.favorites.includes(recipe.id) && Math.random() > 0.5
  );
  return { recommendations: recommended };
})
