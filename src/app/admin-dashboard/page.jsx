"use client";
import React, { useEffect, useState } from "react";
import OrgModal from "./OrgModal";
import UserModal from "./UserModal";

function AddUser() {
  // Dummy users data with additional details including organization
  const dummyUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      title: "Engineer",
      department: "IT",
      organization: "Organization A",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      title: "Manager",
      department: "HR",
      organization: "Organization B",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      title: "Developer",
      department: "Engineering",
      organization: "Organization A",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      title: "Designer",
      department: "Design",
      organization: "Organization C",
    },
  ];

  // State to manage modal visibility for adding users
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  // State to manage modal visibility for adding organizations
  const [isOrgModalOpen, setIsOrgModalOpen] = useState(false);

  // Function to toggle modal visibility for adding users
  const toggleUserModal = () => {
    setIsUserModalOpen(!isUserModalOpen);
  };

  // Function to toggle modal visibility for adding organizations
  const toggleOrgModal = () => {
    setIsOrgModalOpen(!isOrgModalOpen);
  };

  // Function to add a new user
  const handleAddUser = () => {
    // Logic to add a new user
    console.log("Add new user");
  };

  // Function to add a new organization
  const handleAddOrganization = () => {
    // Logic to add a new organization
    console.log("Add new organization");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold mb-4">
              Add User to Organization
            </h1>
            <button
              onClick={toggleOrgModal}
              class="font-semibold bg-blackhover:bg-blue-700 text-black hover:cursor-pointer py-2 px-4 rounded"
            >
              Add Organization
            </button>
            <button
              class="font-semibold bg-blackhover:bg-blue-700 text-black hover:cursor-pointer py-2 px-4 rounded"
              onClick={toggleUserModal}
            >
              Add User
            </button>
          </div>

          <UserModal isOpen={isUserModalOpen} toggleModal={toggleUserModal} />
          <OrgModal isOpen={isOrgModalOpen} toggleModal={toggleOrgModal} />

          {/* Render users grouped by organization */}
          {dummyUsers.map((user) => (
            <div key={user.id} className="border border-gray-300 rounded mb-4">
              <h2 className="text-lg font-semibold mb-2 px-4 py-2 bg-gray-200">
                {user.organization}
              </h2>
              <div className="overflow-hidden">
                <table className="py-5 w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr
                      key={user.id}
                      className="cursor-pointer hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 whitespace-no-wrap">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        {user.title}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        {user.department}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AddUser;
