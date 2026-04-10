import React, { useState } from "react";
import axios from "axios";

function Register() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("Job Seeker");

const submit = async (e) => {
  e.preventDefault();

  try {

    await axios.post("http://localhost:5000/register", {
      name,
      email,
      password,
      role
    });

    alert("Registered Successfully");

  } catch (err) {

    alert("Registration Failed");

  }
};

return (

<div className="flex justify-center items-center min-h-[80vh]">

<div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

<h2 className="text-2xl font-bold text-center mb-6">
Register
</h2>

<form onSubmit={submit} className="space-y-4">

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
/>

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
>

<option>Job Seeker</option>
<option>Recruiter</option>

</select>

<button
className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
>
Register
</button>

</form>

</div>

</div>

);

}

export default Register;