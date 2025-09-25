"use client";
import axios from "axios";

export default function Signup() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="bg-gray-400 shadow-lg rounded-2xl p-8 w-96 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">Sign In</h1>
        <p className="text-center text-gray-500 text-sm">Welcome back! Please sign in to your account</p>

        <input
          type="usernamr"
          placeholder="Username"
          
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button onClick={() => {
          alert("Sign In clicked");
        }}
        
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300">
          Sign In
        </button>

      </div>
    </div>  
  );
}
