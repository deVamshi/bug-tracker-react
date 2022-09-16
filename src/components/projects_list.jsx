import React from "react";
import StatCard from "./stat_card";
import { Table, Button } from "flowbite-react";

import {
  FaCheckCircle,
  FaStopCircle,
  FaUsers,
  FaPlusCircle,
} from "react-icons/fa";

import { MdPendingActions } from "react-icons/md";

const ProjectList = () => {
  const createTable = () => {
    return (
      <div className="mt-8">
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Open Issues</Table.HeadCell>
            <Table.HeadCell>Resolved Issues</Table.HeadCell>
            <Table.HeadCell>Members Count</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Open</span>
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sitara
              </Table.Cell>
              <Table.Cell>18</Table.Cell>
              <Table.Cell>26</Table.Cell>
              <Table.Cell>22</Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Open
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Ikshayu
              </Table.Cell>
              <Table.Cell>59</Table.Cell>
              <Table.Cell>42</Table.Cell>
              <Table.Cell>11</Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Open
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Root Words
              </Table.Cell>
              <Table.Cell>59</Table.Cell>
              <Table.Cell>42 PC</Table.Cell>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Open
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold my-4">
        Overview of your organization
      </h1>
      <div className="stats flex  space-x-6 ">
        <StatCard
          title="Completed"
          value={11}
          icon={<FaCheckCircle size={48} className="" color="green" />}
        />
        <StatCard
          title="In Progress"
          value={3}
          icon={<MdPendingActions size={48} className="" color="amber" />}
        />
        <StatCard
          title="Not Started"
          value={5}
          icon={<FaStopCircle size={48} className="" color="red" />}
        />
        <StatCard
          title="Teams"
          value={12}
          icon={<FaUsers size={48} className="" color="brown" />}
        />
      </div>

      <h1 className="text-4xl font-semibold mt-12 mb-4">List of Projects:</h1>
      {createTable()}
      <div className="mt-10 flex w-ful justify-end">
        <div className="justify-self-end">
          <Button>
            <FaPlusCircle className="mr-2 h-5 w-5" />
            Add New Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
