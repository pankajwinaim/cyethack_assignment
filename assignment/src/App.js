import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import List from './pages/List';
import Details from './pages/Details';
import Login from './pages/Login';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="list"
              element={
                <PrivateRoute>
                  <List />
                </PrivateRoute>
              }
            />
            <Route
              path="list/details"
              element={
                <PrivateRoute>
                  <Details />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
  );
};

export default App;
