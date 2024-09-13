import React, {useState} from 'react'

const AddRecipeForm = () => {
const [title, setTitle]= useState("");
const [ingredients, setIngredient]= useState("");
const [steps, setSteps] = useState("");

// Handling form submision
const handleSubmit = () =>
e.preventDefault();

const recipeDetails ={
  title,
  ingredients,
  steps
};
console.log('Recipe Submitted:' , recipeDetails) /* one can send recipeDetails to an API  */
  return (
    <div>
 <h1>Submit Your Recipe </h1>

 <form onSubmit={handleSubmit}>
 {/* /*Recipe title  */}
  <div>
    <label htmlFor="title">Recipe title</label> <br />
    <input type="text" id='title' value= {title} onChange={(e) => setTitle(e.target.value)} required/> 
  </div><br />
   {/* //Ingredient */}
   <div>
    <label htmlFor="ingredients">Ingredien</label>
   <textarea id="Ingredients" cols="50" rows="6" value={ingredients}  onChange={(e)=> setIngredient(e.target.value)} placeholder='List ingredient here..' Required/>
   </div><br />

   {/* //Preparation steps */}
   <div>
    <label htmlFor="steps">Preparation Steps</label> <br />
    <textarea  id="steps" cols="50" rows="8" value={steps}  onChange={(e) => setSteps(e.target.value)} placeholder='List the steps here ...' Required />
   </div>
   {/* sumitButton */}
   <button type="submit">Submit Recipe</button>
 </form>
    </div>
  )
}

export default AddRecipeForm