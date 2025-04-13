import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/users"); 
    } catch (error) {
      console.error("Login failed", error);
      setErrorMsg("Invalid email or password");
    }
  };

  return (
    <div className="cntaner min-h-screen w-full flex flex-col lg:flex-row">
      <div className="box bg-white w-full lg-w-1/2 rounded-none lg-rounded-1-md flex justify-center items-center">
        <div className="box1 w-full max-w-md rounded-l-md">
          <header className="m-4">
            <h2 className="mb-2 text-3xl font-bold">Sign In</h2>
            <p className="text-gray-700">Enter your email and password to sign in!</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

            <div className="space-y-2">
              <label className="block text-lg">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[48px] px-4 border rounded-l"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-lg">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full h-[48px] px-4 border rounded-l"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-[48px] bg-black text-white rounded-l font-semibold"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center text-sm space-y-2">
            <p>Forgot your password</p>
            <p>
              Don't have an account?{" "}
              <Link to="/create-user" className="text-blue-500 underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="box2 w-full lg-w-1/2 flex items-center justify-center">
        <img
          src="./public/asset/Image.png"
          alt="Image"
          className="w-full h-[100vh] object-cover"
        />
      </div>
    </div>
  );
}
export default Login;
