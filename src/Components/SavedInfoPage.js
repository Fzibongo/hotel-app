import React from 'react';
import { useLocation } from 'react-router-dom';
import protea from '../Assets/Protea-hotel-group.webp';

const SavedInfoPage = () => {
  const location = useLocation();
  const savedInfo = location.state?.savedInfo;

  if (!savedInfo) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Personal Details</h1>
      <div>
        <h2>Saved Info:</h2>
        <p>Name: {savedInfo.firstName} {savedInfo.lastName}</p>
        <p>Email: {savedInfo.email}</p>
        <p>Phone: {savedInfo.phone}</p>
        {/* You may choose not to display the password for security reasons */}
      </div>
    </div>
  );
};

export default SavedInfoPage;
