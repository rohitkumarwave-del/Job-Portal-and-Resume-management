import React, { useState } from "react";
import { Link } from "react-router-dom";

import google from "../assets/logos/google.png";
import amazon from "../assets/logos/amazon.png";
import microsoft from "../assets/logos/microsoft.png";
import meta from "../assets/logos/meta.png";
import tcs from "../assets/logos/tcs.png";
import infosys from "../assets/logos/infosys.png";
import wipro from "../assets/logos/wipro.png";
import accenture from "../assets/logos/accenture.png";
import ibm from "../assets/logos/ibm.png";

function Jobs() {

const [search,setSearch] = useState("");

const jobs = [

{
id:1,
title:"Frontend Developer",
company:"Google",
location:"Remote",
salary:"10 LPA",
logo:google
},

{
id:2,
title:"Backend Developer",
company:"Amazon",
location:"Bangalore",
salary:"12 LPA",
logo:amazon
},

{
id:3,
title:"Full Stack Developer",
company:"Microsoft",
location:"Hyderabad",
salary:"15 LPA",
logo:microsoft
},

{
id:4,
title:"React Developer",
company:"Meta",
location:"Remote",
salary:"11 LPA",
logo:meta
},

{
id:5,
title:"Node.js Developer",
company:"TCS",
location:"Delhi",
salary:"8 LPA",
logo:tcs
},

{
id:6,
title:"Software Engineer",
company:"Infosys",
location:"Pune",
salary:"7 LPA",
logo:infosys
},

{
id:7,
title:"Java Developer",
company:"Wipro",
location:"Chennai",
salary:"9 LPA",
logo:wipro
},

{
id:8,
title:"Python Developer",
company:"Accenture",
location:"Mumbai",
salary:"10 LPA",
logo:accenture
},

{
id:9,
title:"DevOps Engineer",
company:"IBM",
location:"Remote",
salary:"12 LPA",
logo:ibm
}

];

const saveJob = (job)=>{

let saved = JSON.parse(localStorage.getItem("savedJobs")) || [];

/* prevent duplicates */

const alreadySaved = saved.find(j => j.id === job.id);

if(alreadySaved){
alert("Job already saved ⭐");
return;
}

saved.push(job);

localStorage.setItem("savedJobs",JSON.stringify(saved));

alert("Job Saved ⭐");

};

return(

<div className="max-w-6xl mx-auto px-4 py-10">

<h2 className="text-3xl font-bold text-center mb-6">
Latest Jobs
</h2>

{/* SEARCH BAR */}

<div className="max-w-2xl mx-auto mb-8">

<input
type="text"
placeholder="Search job, company..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full border p-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

</div>

{/* JOB GRID */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{jobs
.filter(job =>
job.title.toLowerCase().includes(search.toLowerCase()) ||
job.company.toLowerCase().includes(search.toLowerCase())
)
.map(job =>(

<div
key={job.id}
className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
>

{/* LOGO + TITLE */}

<div className="flex items-center gap-3 mb-3">

<img
src={job.logo}
alt={job.company}
className="w-12 h-12 object-contain bg-white p-1 rounded shadow"
onError={(e)=>{e.target.src="/logo192.png"}}
/>

<div>

<h3 className="text-lg font-semibold text-gray-800">
{job.title}
</h3>

<p className="text-blue-600 font-medium">
{job.company}
</p>

</div>

</div>

{/* LOCATION */}

<p className="text-gray-600">
📍 {job.location}
</p>

{/* SALARY */}

<p className="text-green-600 font-medium mt-1">
💰 {job.salary}
</p>

{/* BUTTONS */}

<div className="flex gap-2 mt-4">

<Link
to="/apply-job"
state={{ job }}
className="w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
>
Apply
</Link>

<button
onClick={()=>saveJob(job)}
className="bg-yellow-400 px-3 rounded-lg hover:bg-yellow-500"
>
⭐
</button>

</div>

</div>

))}

</div>

</div>

)

}

export default Jobs;