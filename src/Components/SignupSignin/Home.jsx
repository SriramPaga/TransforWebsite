import React from "react";
import { useAuth } from "../../utils/UserContext";
import Signin from "./Signin";
import Signup from "./Signup";
import { useState } from "react";
import UserContext from "../../utils/UserContext";
export default function Home() {
  const user = useAuth();
//   console.log(user)
  const [toggle, setToggle] = useState(false);
  return (
    <UserContext>
      {(!user && toggle) && <Signin />}
       {(!user && !toggle) && <Signup />}

      {user && <h1>Home Page</h1>}
    </UserContext>
  );
}
