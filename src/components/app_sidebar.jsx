import React from "react";
import reactLogo from "../assets/react.svg";

import { Sidebar } from "flowbite-react";

import { FaBug, FaCog, FaBolt, FaRocket, FaSignOutAlt } from "react-icons/fa";
import { BsFillChatSquareDotsFill, BsFillBarChartFill } from "react-icons/bs";

function AppSiderBar() {
  return (
    <div className="p-4 sticky top-0 rounded-md max-h-screen">
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo href="#" img={reactLogo} imgAlt="Flowbite logo">
          Resolver
        </Sidebar.Logo>
        <Sidebar.Items className="bg-blue-200 p-10 " colo>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              className="bg-black"
              href="#"
              icon={BsFillBarChartFill}
            >
              Overview
            </Sidebar.Item>
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={FaBolt}>
              Projects
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaBug}>
              Issues
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaCog}>
              Settings
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaSignOutAlt}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default AppSiderBar;
