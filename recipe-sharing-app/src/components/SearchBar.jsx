const recipeStore = createStore((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: computed(() =>
    recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  ),
  setSearchTerm: (term) => set({ searchTerm: term }),
 
}));