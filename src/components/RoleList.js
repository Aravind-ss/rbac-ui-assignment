import React from 'react';

const RoleList = ({ roles }) => {
  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">ID</th>
          <th className="p-2">Role Name</th>
        </tr>
      </thead>
      <tbody>
        {roles.map(role => (
          <tr key={role.id}>
            <td className="p-2">{role.id}</td>
            <td className="p-2">{role.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoleList;
