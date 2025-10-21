import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/pages/Login';
import UserLayout from '@/layouts/UserLayout';
// import AdminLayout from '@/layouts/AdminLayout';

// A component to protect routes that require authentication
const ProtectedRoute = ({ children, allowedUserType }) => {
  const isLoggedIn = !!localStorage.getItem('access_token');
  const userType = localStorage.getItem('user_type');

  if (!isLoggedIn) {
    // If not logged in, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  if (allowedUserType && userType !== allowedUserType) {
    // If logged in user has the wrong type, redirect to a default page
    return <Navigate to="/" replace />;
  }

  return children;
};

export default function AppLayout() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />

      {/* User Routes */}
      <Route
        path="/*"
        element={
          <ProtectedRoute allowedUserType="user">
            <UserLayout />
          </ProtectedRoute>
        }
      />

      {/* Fallback for logged-out users or unmatched routes */}
       {/* <Route path="/*" element={<LandingLayout />} /> */}

    </Routes>
  );
}