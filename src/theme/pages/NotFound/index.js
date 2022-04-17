import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="wrapper">
      <h1 style={{ color: 'red', fontSize: 100 }}>404</h1>
      <h3>Page Not Found</h3>
      <br />
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </div>
  );
}

export default NotFound;
