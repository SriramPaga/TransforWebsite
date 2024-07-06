import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { auth, signInWithGoogle ,logInWithEmailAndPassword} from "../Utils/Firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
//   useEffect(() => {
//     if (loading) {
//       // maybe trigger a loading screen
//       return;
//     }
//     if (user) navigate("/dashboard");
//   }, [user, loading]);
  return (
    <div className="flex justify-center items-center h-lvh w-full bg-slate-50">
      <div className="bg-white border-slate-300 border rounded-md flex flex-col w-[325px] min-h-[300px] p-5 shadow-md">
        <h1 className="text-3xl p-3 mb-3">LOGIN</h1>
        <input
          type="text"
          className="border border-slate-200 rounded-md py-2 px-5 mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="border border-slate-200 rounded-md py-2 px-5 mb-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="py-2 shadow px-5 bg-slate-900 text-white rounded-md mb-2"
        //   onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button 
        // className="py-2 shadow bg-blue-700 text-white rounded-md mb-8" onClick={signInWithGoogle}
        >
          Login with Google
        </button>
        <div className="text-slate-800">
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div className="text-slate-800">
          Don't have an account? <Link to="/register" className="text-blue-800">Register Now</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;