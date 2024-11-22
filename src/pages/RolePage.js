import React, { useState, useEffect } from 'react';
import RoleList from '../components/RoleList';

const RolesPage = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/roles')
      .then(response => response.json())
      .then(data => setRoles(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">Roles</h2>
      <RoleList roles={roles} />
    </div>
  );
};

export default RolesPage;
