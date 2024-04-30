import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Passwordinput from "../../components/input/Passwordinput";
import {Link} from "react-router-dom"
import { validateEmail } from "../../utils/helper";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name){
      setError("Please Enter Your Name");
      return;
    }

    if(!validateEmail(email)){
      setError("Please enter a valid email address")
      return;
    }

    if(!password){
      setError("Please enter the password")
      return;
    }
    setError("")

    //Signup API

  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28 ">
        <div className="w-90 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7">SignUp</h4>

            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Passwordinput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="btn-primary">
              Create Account
            </button>

            <p className="text-sm text-center mt-4">
              Already have an Account?{" "}
              <Link to="/login" className="font-medium text-primary underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
