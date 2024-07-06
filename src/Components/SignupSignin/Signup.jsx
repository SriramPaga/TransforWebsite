import React from "react";
import { useState } from "react";
import axios from 'axios'
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState();
  const [club, setClub] = useState("");

  async function handlesubmit(){

    const data = await axios.post('http://localhost:3001/auth/requestCRE',{name,email,password,phone,club},{

        withCredentials:true
    })
  }

  return (
    <>
      <form onSubmit={(e)=>{
        e.preventDefault()
        handlesubmit()
      }}>
        <h1>Request for Credentials</h1>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Dwanye Jhonson" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br />
        <br />

        <label htmlFor="email">email</label>
        <input type="email" placeholder="example@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <br />

        <label htmlFor="Password">Password</label>
        <input type="password" placeholder="*******" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <br />

        <label htmlFor="name">Phone Number</label>
        <input type="number" placeholder="0000000000" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <br />
        <br />

        <label htmlFor="name">club</label>
        <input type="text" placeholder="Transform" value={club} onChange={(e)=>setClub(e.target.value)}/>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
