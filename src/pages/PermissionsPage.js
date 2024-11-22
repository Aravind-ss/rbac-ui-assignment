import React, { useState, useEffect } from 'react';
import PermissionList from '../components/PermissionList';

const PermissionsPage = () => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/permissions')
      .then(response => response.json())
      .then(data => setPermissions(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">Permissions</h2>
      <PermissionList permissions={permissions} />
    </div>
  );
};

export default PermissionsPage;
