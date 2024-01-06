import { useState } from "react";
import styled from "styled-components"

function FormLogin() {

  const initialFormState = {
    username: '',
    password: '',
  }
  const [formData, setFormData] = useState(initialFormState);

  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    setIsLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        const data = await response.json();
        setIsLoading(false);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data));
        window.location.replace('/');
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  return (
    <StyledFormLogin>
      <h1>Login</h1>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Username</label>
        <input type="text" name="username" onChange={handleChange} value={formData.username}/>
        <label htmlFor="">Password</label>
        <input type="password" name="password" onChange={handleChange} value={formData.password}/>
        {
          !isLoading ?
          <button type="submit" className="submit-btn">Submit</button>
          :
          <button type="submit" className="submit-btn" disabled>Loading...</button>
        }
      </form>
    </StyledFormLogin>
  )
}

const StyledFormLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid #c4bcbc;
  border-radius: 4px;
  padding: 20px;
  h1{
    text-align: center;
    margin-bottom: 10px;
  }
  form{
    width: 100%;
    input{
      margin-top: 5px;
      margin-bottom: 20px;
      border-radius: 4px;
      padding: 10px 15px;
      width: 100%;
      height: 40px;
      font-size: 15px;
      border: 1px solid #c4bcbc;
    }
  }
  .submit-btn{
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 15px;
    border: none;
    background-color: #0075ff;
    font-size: 20px;
    color: white;
    cursor: pointer;
  }
  button:disabled{
    cursor: not-allowed;
  }
  @media (max-width: 500px){
    width: 100%;
  }
`

export default FormLogin