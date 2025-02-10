import React, { useState } from "react";

function ManagerDashboard() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Manager Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="text-lg font-bold">Total Employees</h3>
          <p className="text-2xl">45</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="text-lg font-bold">Active Projects</h3>
          <p className="text-2xl">12</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="text-lg font-bold">Pending Tasks</h3>
          <p className="text-2xl">8</p>
        </div>
      </div>
      <div className="mt-8">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={toggleDetails}
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>
        {showDetails && (
          <div className="mt-4 bg-white p-4 shadow-md rounded">
            <h3 className="text-lg font-bold">Management Options</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Approve Employee Requests</li>
              <li>Generate Reports</li>
              <li>Assign Tasks</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManagerDashboard;
