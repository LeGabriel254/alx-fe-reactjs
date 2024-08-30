import {useState  } from "react";
// <!- -->
const RegistrationForm = () => {
  const[formData,setFormData]=useState({name: '',email: ''});
const handleChange = (e) =>{
  const {name,value} = e.target;
  setFormData(prevState => ({ ...prevState,[name]: value}))
};
const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(formData)
};
return (
  <Form onSubmit={handleSubmit}>
   <label>
    Name:
   <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
     />
   </label>
  
    <label>
      Email:
    <input
     type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
    />
    </label>
   
     <button type="submit">Submit</button>
  </Form>
)}
export default RegistrationForm;