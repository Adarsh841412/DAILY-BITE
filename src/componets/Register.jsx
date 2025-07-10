import { useState } from "react";
import Login from "./Login"
import { Link } from "react-router-dom";

export default function Register() {


  const[userDetails,setUserDetails]= useState({
    name:"",
    email:"",
    password:"",
    age:""
  })

  function handleInput(event){

   // console.log(event.target.name);  //* it will give the name 
   // console.log(event.target.value);  //* it will give name value

    setUserDetails((prevState)=>{
      return {...prevState,[event.target.name]:event.target.value}
    })
  }



  function handleSubmit(event){
    event.preventDefault();
   console.log(userDetails);

    setUserDetails({name:"",email:"",age:"",password:""});
  }


  return (
    <section className="container">
      <form className="form"  onSubmit={handleSubmit} >
        <h1>Start you Fitness</h1>

        <input
          className="inp"
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={handleInput}
            value={userDetails.name}
        />
        <input
          className="inp"
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleInput}
          value={userDetails.email}
        />
        <input
          className="inp"
          type="password"
          placeholder="Enter password "
          name="password"
           onChange={handleInput}
             value={userDetails.password}
        />
        <input
          className="inp"
          type="number"
          placeholder="Enter age"
          name="age"
           onChange={handleInput}
             value={userDetails.age}
        />


<button className="btn" onClick={handleSubmit}>Join</button>

<p>Already Registered ? <Link to="/login">Login </Link></p>

      </form>
    </section>
  );
}
