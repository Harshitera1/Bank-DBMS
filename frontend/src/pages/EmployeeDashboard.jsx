import React, { useEffect, useState } from "react";
import axios from "axios";

function EmployeeDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Store error messages

  useEffect(() => {
    console.log("Fetching employee data..."); // Debugging Log
    axios
      .get("http://localhost:5000/api/employees") // Ensure this matches your backend route
      .then((response) => {
        console.log("Response received:", response.data); // Debugging Log
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-blue-500">Loading employee data...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Employee Dashboard</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="border-b py-2">
              {user.name} - {user.role}
            </li>
          ))
        ) : (
          <p>No employees found.</p>
        )}
      </ul>
    </div>
  );
}

export default EmployeeDashboard;
