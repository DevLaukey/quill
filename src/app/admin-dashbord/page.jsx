import React, { useState } from "react";

const Page = () => {
  const [roles, setRoles] = useState([]);
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");

  const handleRoleAssignment = (userId, role) => {
    // Logic to assign a role to a user
    // For demonstration, just console log the assignment
    console.log(`Assigning role ${role} to user ${userId}`);
    setRoles([...roles, { userId, role }]);
  };

  const handleFileUpload = (file) => {
    // Logic to upload a file
    // For demonstration, just console log the uploaded file
    console.log("Uploading file:", file);
    setFiles([...files, file]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{role.userId}</td>
              <td className="border px-4 py-2">{role.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Assign Roles</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRoleAssignment(userId, role);
          }}
        >
          <div className="mb-4">
            <label htmlFor="userId" className="block mb-1">
              User ID:
            </label>
            <input
              type="text"
              id="userId"
              className="border rounded-md px-4 py-2 w-full"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block mb-1">
              Role:
            </label>
            <input
              type="text"
              id="role"
              className="border rounded-md px-4 py-2 w-full"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Assign Role
          </button>
        </form>
      </div>

      {/* File upload section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Add Files</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="file"
            onChange={(e) => handleFileUpload(e.target.files[0])}
            className="mb-4"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Upload File
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
