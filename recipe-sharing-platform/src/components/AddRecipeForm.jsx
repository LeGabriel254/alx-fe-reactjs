import React, {useState} from 'react'

const AddRecipeForm = () => {
const [title, setTittle]= useState("");
const [ingredients, setIngredient]= useState("");
const [steps, setSteps] = useState("");

// Handling form submssion
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
    </div>
  )
}

export default AddRecipeForm