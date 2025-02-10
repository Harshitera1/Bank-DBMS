import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate(); // Hook to navigate between routes

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-blue-600 text-white py-4">
        <h1 className="text-center text-2xl font-bold">Banking System</h1>
      </header>
      <main className="flex flex-col items-center justify-center mt-10">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => navigate("/employee-dashboard")} // Navigate to Employee Dashboard
        >
          Employee Login
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
          onClick={() => navigate("/manager-dashboard")} // Navigate to Manager Dashboard
        >
          Manager Login
        </button>
      </main>
    </div>
  );
}

export default App;
