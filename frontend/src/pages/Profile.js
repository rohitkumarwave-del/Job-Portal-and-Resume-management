import React, { useState, useEffect } from "react";

const Profile = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    skills: "",
    image: "",
    resume: null,
  });

  const [editMode, setEditMode] = useState(false);

  // 🔥 Load from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("userProfile");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser({
        name: "Rohit Kumar",
        email: "rohit@gmail.com",
        skills: "React, Node.js",
        image: "https://via.placeholder.com/150",
        resume: null,
      });
    }
  }, []);

  // 🔥 Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeUpload = (e) => {
    setUser({ ...user, resume: e.target.files[0]?.name });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(user));
    setEditMode(false);
    alert("Profile Saved Successfully ✅");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-6">

        <h2 className="text-2xl font-bold mb-4 text-center">
          My Profile
        </h2>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.image || "https://via.placeholder.com/150"}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
          />

          {editMode && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-2"
            />
          )}
        </div>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          readOnly={!editMode}
          className="w-full p-2 border rounded mb-2"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          readOnly={!editMode}
          className="w-full p-2 border rounded mb-2"
        />

        {/* Skills */}
        <textarea
          name="skills"
          value={user.skills}
          onChange={handleChange}
          readOnly={!editMode}
          className="w-full p-2 border rounded mb-2"
        />

        {/* Resume */}
        {editMode && (
          <input type="file" onChange={handleResumeUpload} />
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-6">

          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit Profile
          </button>

          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>

        </div>

      </div>
    </div>
  );
};

export default Profile;