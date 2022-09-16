import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppSiderBar from "./components/app_sidebar";
import ProjectsList from "./components/projects_list";
import ProjectDetails from "./components/project_details";
import TicketDetails from "./components/ticket_details";

function App() {
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        <AppSiderBar />
        <div className="flex-grow overflow-scroll">
          <div className=" bg-wh-500 p-4">
            <TicketDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
