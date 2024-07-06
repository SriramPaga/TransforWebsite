import React from "react";
import { useState } from "react";
import axios from 'axios'
export default function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  async function handlesubmit(){

    const data = await axios.post('http://localhost:3001/auth/signin',{email,password},{

        withCredentials:true
    })
  }

  return (
    <>
      <form onSubmit={(e)=>{
        e.preventDefault()
        handlesubmit()
      }}>
        <h1>Sign In</h1>
        
        <label htmlFor="email">email</label>
        <input type="email" placeholder="example@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <br />

        <label htmlFor="Password">Password</label>
        <input type="password" placeholder="*******" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <br />

        
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
