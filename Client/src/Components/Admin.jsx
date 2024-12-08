// import React from 'react';

import { useState } from "react";
import AdminBlog from "./AdminBlog";
import AdminService from "./AdminService";
import AdminTeam from "./AdminTeam";

const Admin = () => {
    const [activeSection, setActiveSection] = useState("blog");

  const renderSection = () => {
    switch (activeSection) {
      case "blog":
        return <AdminBlog/>
      case "service":
        return <AdminService/>
      case "team":
        return <AdminTeam/>
    }
};

return (
    <div className="flex flex-col md:flex-row md:h-screen">
      {/* Sidebar */}
      <div className="md:w-1/4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold text-center py-4">Admin Dashboard</h1>
        <ul className="space-y-4 px-6">
          <li
            className={`cursor-pointer hover:bg-gray-700 p-2 ${
              activeSection === "blog" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveSection("blog")}
          >
            Blogs
          </li>
          <li
            className={`cursor-pointer hover:bg-gray-700 p-2 ${
              activeSection === "service" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveSection("service")}
          >
            Services
          </li>
          <li
            className={`cursor-pointer hover:bg-gray-700 p-2 ${
              activeSection === "team" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveSection("team")}
          >
            Teams
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-6">
        {renderSection()}
      </div>
    </div>
  );
};

export default Admin;