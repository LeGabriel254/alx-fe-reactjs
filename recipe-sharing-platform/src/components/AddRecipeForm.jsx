import React, { useState } from 'react';

const RecipeForm = () => {
  // State variables to store form data
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  // State variables for validation messages
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    // Validate title (must not be empty and at least 3 characters)
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters long';
    }

    // Validate ingredients (must not be empty)
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    }

    // Validate steps (must not be empty)
    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }

    return newErrors;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      setErrors({}); // Clear errors
      const recipeData = {
        title,
        ingredients,
        steps
      };
      console.log('Recipe Submitted: ', recipeData);
      // You can send the recipeData to an API or backend here.
      setTitle('');
      setIngredients('');
      setSteps('');
    }
  };

  return (
    <div>
      <h1>Submit Your Recipe</h1>

      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div>
          <label htmlFor="title">Recipe Title:</label><br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
        </div><br />

        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients">Ingredients:</label><br />
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="6"
            cols="50"
            placeholder="List ingredients here..."
            required
          />
          {errors.ingredients && <p style={{ color: 'red' }}>{errors.ingredients}</p>}
        </div><br />

        {/* Preparation Steps */}
        <div>
          <label htmlFor="steps">Preparation Steps:</label><br />
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="8"
            cols="50"
            placeholder="List the steps here..."
            required
          />
          {errors.steps && <p style={{ color: 'red' }}>{errors.steps}</p>}
        </div><br />

        {/* Submit Button */}
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
