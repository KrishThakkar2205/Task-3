import {useState} from 'react'
import  './App.css'
const App = function (){
  const [formData, setFormData] = useState([])

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  return(
    <>
      <form>
        <div>
        <label>Name : </label>
        <input type='text' placeholder='Name' name='Name' required onChange={handleChange}/>
        </div>
        <div>
          <label>E-mail : </label>
        <input type = 'email' placeholder='Email' name ='Email' required onChange={handleChange}/>
        </div>
        <div>
          <label>Gender : </label>
        <input type='radio'name='Gender' value='Male'onChange={handleChange}/><label>Male</label>
        <input type = 'radio' name='Gender' value='Female'onChange={handleChange}/><label>Female</label>
        </div>
        <div>
        <label>Education : </label>
        <select name = 'Education' required onChange={handleChange}>
          <option selected disabled>Select any One</option>
          <option value='10th'>10th Standard</option>
          <option value='12th'>12th Standard</option>
          <option value='Degree'>Degree</option>
        </select>
        </div>
        <div>
          <label>Discription : </label>
          <textarea name='Discription' placeholder='Enter your Discription' onChange={handleChange}></textarea>
        </div>
      </form>
      <h5>{JSON.stringify(formData)}</h5>
    </>
  )

  
}
export default App;