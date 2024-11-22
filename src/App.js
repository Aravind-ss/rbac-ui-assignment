import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import RolesPage from './pages/RolesPage';
import PermissionsPage from './pages/PermissionsPage';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center">RBAC Admin Dashboard</h1>
        <div className="mt-4">
          <Switch>
            <Route path="/users" component={UsersPage} />
            <Route path="/roles" component={RolesPage} />
            <Route path="/permissions" component={PermissionsPage} />
            <Route exact path="/" component={UsersPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
