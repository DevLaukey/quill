"use client"

import React, { useState } from "react";
import Modal from "./Modal";

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

  // State to hold selected user
  const [selectedUser, setSelectedUser] = useState(null);
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle user selection
  const handleUserClick = (user) => {
    setSelectedUser(user);
    // Here you can implement the logic to add the selected user to the organization
    console.log("Selected user:", user);
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Get unique organizations
  const organizations = Array.from(
    new Set(dummyUsers.map((user) => user.organization))
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold mb-4">
              Add User to Organization
            </h1>

            {/* Button to toggle modal */}
            <button
              onClick={toggleModal}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2"
            >
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Add a new organization
            </button>
          </div>

          {/* Render users grouped by organization */}
          {organizations.map((org) => (
            <div key={org} className="border border-gray-300 rounded mb-4">
              <h2 className="text-lg font-semibold mb-2 px-4 py-2 bg-gray-200">
                {org}
              </h2>
              <div className="overflow-hidden">
                <table className=" py-5 w-full">
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
                    {dummyUsers
                      .filter((user) => user.organization === org)
                      .map((user) => (
                        <tr
                          key={user.id}
                          onClick={() => handleUserClick(user)}
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
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Modal for adding organization */}
          <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
      </main>
    </div>
  );
}

export default AddUser;
