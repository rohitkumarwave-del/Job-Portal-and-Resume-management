import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function ApplyJob() {

const { state } = useLocation();
const navigate = useNavigate();

const job = state?.job || {
title: "Unknown Job",
company: "Unknown",
location: "Unknown"
};

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [resume,setResume] = useState(null);
const [coverLetter,setCoverLetter] = useState("");
const [message,setMessage] = useState("");

const handleSubmit = async (e)=>{
e.preventDefault();

if(!resume){
alert("Please upload resume");
return;
}

try{

await axios.post("http://localhost:5000/apply-job",{
name,
email,
job:job.title
});

setMessage(`Application submitted for ${job.title} at ${job.company}`);

setName("");
setEmail("");
setPhone("");
setResume(null);
setCoverLetter("");

}catch(err){

alert("Application failed");

}

};

return(

<div className="flex justify-center items-center min-h-[80vh]">

<div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

<h2 className="text-2xl font-bold text-center mb-2">
Apply for {job.title}
</h2>

<p className="text-center text-gray-500 mb-6">
{job.company} • {job.location}
</p>

{message && (
<div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
{message}
</div>
)}

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border p-3 rounded"
required
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border p-3 rounded"
required
/>

<input
type="text"
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="w-full border p-3 rounded"
/>

<input
type="file"
accept=".pdf,.doc,.docx"
onChange={(e)=>setResume(e.target.files[0])}
className="w-full border p-3 rounded"
required
/>

<textarea
placeholder="Cover Letter (optional)"
rows="4"
value={coverLetter}
onChange={(e)=>setCoverLetter(e.target.value)}
className="w-full border p-3 rounded"
></textarea>

<button
className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
>
Submit Application
</button>

</form>

<div className="text-center mt-4">

<button
onClick={()=>navigate("/jobs")}
className="text-blue-500 hover:underline"
>
Back to Jobs
</button>

</div>

</div>

</div>

);

}

export default ApplyJob;