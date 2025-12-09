import React from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true; // Replace with real auth logic
    if (!isAuthenticated) return <div>Please login</div>;
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
