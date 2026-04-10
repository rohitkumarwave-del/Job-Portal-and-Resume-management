import React, { useState } from "react";
import axios from "axios";

function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const submit = async (e) => {
  e.preventDefault();

  try {

    const res = await axios.post("http://localhost:5000/login", {
      email,
      password
    });

    alert("Login successful");

  } catch (err) {
    alert("Invalid login");
  }
};

return (

<div className="flex justify-center items-center min-h-[80vh]">

<div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

<h2 className="text-2xl font-bold text-center mb-6">
Login
</h2>

<form onSubmit={submit} className="space-y-4">

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>

<button
className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
>
Login
</button>

</form>

</div>

</div>

);

}

export default Login;