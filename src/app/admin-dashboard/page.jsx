"use client";
import React, { useEffect, useState } from "react";
import OrgModal from "./OrgModal";
import UserModal from "./UserModal";

function AddUser() {
  const [users, setUsers] = useState([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isOrgModalOpen, setIsOrgModalOpen] = useState(false);

  const toggleUserModal = () => {
    setIsUserModalOpen(!isUserModalOpen);
  };

  const toggleOrgModal = () => {
    setIsOrgModalOpen(!isOrgModalOpen);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();

      // Set users as an array
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold mb-4">
              Add User to Organization
            </h1>
            <div className="flex w-full justify-between items-center  ">
              <button
                onClick={toggleOrgModal}
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Add Organization
              </button>
              <button
                type="button"
                className="font-semibold bg-blackhover:bg-blue-700 text-black hover:cursor-pointer py-2 px-4 rounded"
                onClick={toggleUserModal}
              >
                Add User
              </button>
            </div>
          </div>

          <UserModal isOpen={isUserModalOpen} toggleModal={toggleUserModal} />
          <OrgModal
            isOpen={isOrgModalOpen}
            toggleModal={toggleOrgModal}
            users={users}
          />

          {/* Render users grouped by organization */}
          {Object.entries(users).map(([organization, userList]) => (
            <div
              key={organization}
              className="border border-gray-300 rounded mb-4"
            >
              <h2 className="text-lg font-semibold mb-2 px-4 py-2 bg-gray-200">
                {organization !== "null" ? organization : "No Organization"}
              </h2>
              <div className="overflow-hidden">
                <table className="py-5 w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Last Name
                      </th>
                      <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        City
                      </th>
                      <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {userList.map(
                      (
                        user // Corrected mapping here
                      ) => (
                        <tr
                          key={user.id}
                          className="cursor-pointer hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 whitespace-no-wrap">
                            {user.firstName}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap">
                            {user.lastName}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap">
                            {user.address}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap">
                            {user.city}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap">
                            {user.email}
                          </td>
                        </tr>
                      )
                    )}
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
