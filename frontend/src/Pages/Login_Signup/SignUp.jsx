import React, { useState } from "react";
import axios from "axios";
// import "./signup.css"
import styled from './Signup.module.css'
import {useNavigate} from "react-router-dom"

const SignUp = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  const handleSubmit = async () => {
    if (fName && lName && email && password) {
      console.log(fName,lName,email,password);
      await axios
        .post("http://localhost:8080/register", {
          fName: fName,
          lName: lName,
          email: email,
          password: password,
        })
        .then((res) => {
          if(res.data.message==="successfully registered"){
            alert("successfully registered")
            navigate("/login")
          }
          else if(res.data.message==="User already registered"){
            alert("User already registered")
          }
        })
        .catch((err) => console.log(err));
    }
    else{
      alert("Please enter all details")
    }
  };
  return (
    <div className={styled.main_div}>
      <h1 className={styled.heading}>Sign Up</h1>

      <div >
        <label className={styled.label}>First name</label>
        <br />
        <input
          type="text"
          className={styled.form_control}
          placeholder="First name"
          onChange={(e) => setfName(e.target.value)}
        />
      </div>

      <div >
        <label className={styled.label}>Last name</label>
        <br />
        <input
          type="text"
          className={styled.form_control}
          placeholder="Last Name"
          onChange={(e) => setlName(e.target.value)}
        />
      </div>

      <div >
        <label className={styled.label}>Email address</label>
        <br />
        <input
          type="email"
          className={styled.form_control}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div >
        <label className={styled.label}>Password</label>
        <br />
        <input
          type="password"
          className={styled.form_control}
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />

      <div >
        <button className={styled.signup_btn}
          onClick={handleSubmit}
          type="submit"
          
        >
          Sign Up
        </button>
      </div>
    <div>
    <p >
        Already registered <a href="/login">sign in?</a>
      </p>
    </div>
    </div>
  );
};

export default SignUp;