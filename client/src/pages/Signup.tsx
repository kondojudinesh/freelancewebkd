import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userType, setUserType] = useState("freelancer");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        emailRedirectTo: "https://freelancewebkd.netlify.app/login", // 👈 change to your domain
        data: {
          full_name: formData.fullName,
          role: userType,
        },
      },
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Confirmation email sent! Please check your inbox.");
      console.log("Signed up user:", data.user);
      // Optionally redirect to login after signup
      navigate("/login");
    }
  };

  const handleGoogleSignup = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://freelancewebkd.netlify.app/dashboard", // 👈 change to your domain
      },
    });

    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-6 border rounded-lg"
        />

        <div className="flex justify-between mb-6">
          <label>
            <input
              type="radio"
              name="userType"
              value="freelancer"
              checked={userType === "freelancer"}
              onChange={() => setUserType("freelancer")}
            />{" "}
            Freelancer
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="client"
              checked={userType === "client"}
              onChange={() => setUserType("client")}
            />{" "}
            Client
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </button>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Sign Up with Google
        </button>
      </form>
    </div>
  );
};

export default Signup;
