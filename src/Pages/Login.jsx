// Login.jsx
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
const {LoginUser}=useContext(AuthContext)
    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

      LoginUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log("Logged in user:", loggedUser);

                toast.success("Login successful!");
                navigate("/"); 
            })
            .catch((error) => {
                console.error(error.message);
                toast.error("Login failed: " + error.message);
            });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
        <SocialLogin></SocialLogin>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
