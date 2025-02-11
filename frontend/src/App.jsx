import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <header className="w-full bg-blue-600 text-white py-4">
          <h1 className="text-center text-2xl font-bold">Banking System</h1>
        </header>
        <main className="flex flex-col items-center justify-center mt-10">
          <Link to="/employee">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Employee Login
            </button>
          </Link>
          <Link to="/manager">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4">
              Manager Login
            </button>
          </Link>
        </main>
        <Routes>
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/manager" element={<ManagerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
