"use client"
import React, { useState } from "react";

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

  // Function to handle user selection
  const handleUserClick = (user) => {
    setSelectedUser(user);
    // Here you can implement the logic to add the selected user to the organization
    console.log("Selected user:", user);
  };

  // Function to add a new organization
  const addOrganization = () => {
    // Here you can implement the logic to add a new organization
    console.log("Adding a new organization");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-2xl font-bold mb-4">Add User to Organization</h1>

          {/* Button to add a new organization */}
          <button
            onClick={addOrganization}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
            Add Organization
          </button>

          <div className="overflow-hidden border border-gray-300 rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Select User</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
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
                    <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Organization
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {dummyUsers.map((user) => (
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
                      <td className="px-6 py-4 whitespace-no-wrap">
                        {user.organization}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddUser;
