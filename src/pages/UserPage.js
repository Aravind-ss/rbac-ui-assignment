import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">Users</h2>
      <UserList users={users} />
    </div>
  );
};

export default UsersPage;
