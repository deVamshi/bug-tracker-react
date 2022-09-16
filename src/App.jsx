import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppSiderBar from "./components/app_sidebar";
import ProjectsList from "./components/projects_list";
import ProjectDetails from "./components/project_details";

function App() {
  
  return (
    <div>
      <div className="flex m-h-screen bg-gray-100">
        <AppSiderBar />
        <div className="flex-grow">
          <div className=" bg-wh-500 p-4">
            <ProjectDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
