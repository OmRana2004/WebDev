"use client";

import axios from "axios";
import { useState } from "react";


export default function Signup() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="bg-gray-400 shadow-lg rounded-2xl p-8 w-96 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">Sign Up</h1>
        <p className="text-center text-gray-500 text-sm">Create your account</p>

        <input
          type="text"
          placeholder="Username"
          onChange={e => {
            setUsername(e.target.value);
          }}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => {
            setPassword(e.target.value);
          }}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button onClick={() => {
          console.log(username, password);
          axios.post("http://localhost:3000/api/v1/signup", {
            username,
            password
          })

        }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300">
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
