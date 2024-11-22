import React from 'react';

const UserList = ({ users }) => {
  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">ID</th>
          <th className="p-2">Name</th>
          <th className="p-2">Email</th>
          <th className="p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td className="p-2">{user.id}</td>
            <td className="p-2">{user.name}</td>
            <td className="p-2">{user.email}</td>
            <td className="p-2">{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
