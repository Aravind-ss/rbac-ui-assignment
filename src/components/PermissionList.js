import React from 'react';

const PermissionList = ({ permissions }) => {
  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">ID</th>
          <th className="p-2">Permission Name</th>
        </tr>
      </thead>
      <tbody>
        {permissions.map(permission => (
          <tr key={permission.id}>
            <td className="p-2">{permission.id}</td>
            <td className="p-2">{permission.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PermissionList;
