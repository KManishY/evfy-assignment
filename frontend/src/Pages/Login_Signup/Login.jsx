import React, { useState } from "react"
import styled from './Login.module.css';
import axios from "axios"

import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (email && password) {
      console.log(email,password);
      await axios
        .post("http://localhost:8080/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if(res.data.message === "login successfull"){
            alert("login successfull")
            navigate("/breedList")
          }
          else if(res.data.message==='wrong password'){
            alert("wrong password")

          }
          else if(res.data.message==="user not registered"){
            alert("user not registered")
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
      <h3 className={styled.heading}>Sign In</h3>

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

      <div >
        <div >
          <input className={styled.checkbox}
         
            type="checkbox"
          
          />
          <label className={styled.label}>
            Remember me
          </label>
        </div>
        <br />
      </div>

      <div >
        <button className={styled.submit_btn} onClick={handleSubmit} type="submit" >
          Submit
        </button>
      </div>
      <p >
        New User 
        <a href="/">  Sign Up</a>
      </p>
    </div>
  );
};

export default Login;