import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <h2>Please login first</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {user.role}!</h1>

      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>

      <br /><br />

      {user.role === "seeker" && (
        <>
          <button onClick={() => navigate("/jobs")}>Browse Jobs</button>
          <br /><br />
          <button onClick={() => navigate("/resume")}>Upload Resume</button>
        </>
      )}

      {user.role === "employer" && (
        <>
          <button onClick={() => navigate("/post-job")}>Post Job</button>
          <br /><br />
          <button onClick={() => navigate("/applications")}>
            View Applications
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;