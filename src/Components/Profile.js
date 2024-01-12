import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SavedInfoPage from './SavedInfoPage';

const ProfilePage = () => {
  // State to store personal information
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  // State to track whether the data is being edited
  const [isEditing, setIsEditing] = useState(false);

  // State to store the image file
  const [imageFile, setImageFile] = useState(null);

  // Access the navigate function to programmatically navigate
  const navigate = useNavigate();

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];
      setImageFile(file);
    } else {
      setPersonalInfo({
        ...personalInfo,
        [name]: value,
      });
    }
  };

  // Function to handle save button click
  const handleSave = () => {
    console.log('Saving data:', personalInfo);

    if (imageFile) {
      console.log('Uploading image:', imageFile);
      // Perform image upload logic here
    }

    // Navigate to "/saved-info" after saving
    navigate('/saved-info', { state: { savedInfo: personalInfo } });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={imageFile ? URL.createObjectURL(imageFile) : ''}
        alt="User"
        style={{ borderRadius: '50%', width: '100px', height: '100px', marginBottom: '20px' }}
      />
      {!imageFile && (
        <input type='file' onChange={handleInputChange} />
      )}
      <h1>Profile Page</h1>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={personalInfo.firstName}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={personalInfo.lastName}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>
        <br />

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={personalInfo.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={personalInfo.password}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>
        <br />

        {isEditing ? (
          <button type="button" onClick={handleSave}>
            Save
          </button>
        ) : (
          <>
            <Link to="/saved-info">
              <button type="button">View Info</button>
            </Link>
            <button type="button" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;
