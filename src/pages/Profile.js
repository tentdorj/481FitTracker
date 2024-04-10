import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    
  const navigate = useNavigate();
  const userToken = localStorage.getItem('userToken');
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    age: '',
    height: '',
    weight: '',
    nickname: ''
  });
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleChangePassword = () => {
    // Assuming the user's current password is stored in userInfo under the 'password' field
    if (passwords.currentPassword !== userInfo.password) {
      alert('Error 1: The current password is incorrect.');
    } else if (passwords.newPassword !== passwords.confirmPassword) {
      alert('Error 2: New passwords do not match.');
    } else {
      // Assuming you want to save the new password in the same place as userInfo
      const updatedUserInfo = { ...userInfo, password: passwords.newPassword };
      localStorage.setItem(userToken, JSON.stringify(updatedUserInfo));
      setUserInfo(updatedUserInfo); // Update the state with the new user info
      setShowChangePasswordModal(false); // Close the modal
      alert('Success: Your password has been changed.');
    }
  };
  // Load user information from localStorage when the component mounts
  React.useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem(userToken));
    if (storedUserInfo) {
      setUserInfo(prev => ({ ...prev, ...storedUserInfo }));
    }
  }, [userToken]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem(userToken, JSON.stringify(userInfo));
    setShowEditModal(false);
    alert('Profile updated successfully.');
  };

  const handleSignOut = () => {
    alert('Signing out...');
    localStorage.removeItem('userToken');
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };


  const containerStyle = {
    
    border: '2px solid #CBD5E0',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '300px',
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#4FD1C5',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  };

  const textStyle = {
    fontStyle: 'italic',
    color: '#1A202C',
    fontFamily: "'Lato', sans-serif"
  };

  const flexProfileStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-start', // Align items to the start of the container
    justifyContent: 'center',
    marginBottom: '20px',
    fontFamily: "'Lato', sans-serif",
  };
  const flexContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  };
  const modalContentStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack the inputs vertically
    alignItems: 'center', // Center-align the content
    justifyContent: 'center',
    gap: '10px', // Space out the inputs and buttons
  };
  
  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Align label and input in a column
    width: '100%', // Full width of the modal content area
  };
  
  const labelStyle = {
    textAlign: 'left',
    marginBottom: '5px', // Give some space between the label and the input
  };
  
  const inputStyle = {
    padding: '10px',
    margin: '0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%', // Input should fill the width of the input container
  };
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    zIndex: 10,
    transition: 'all 0.3s ease-out',
  };
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9,
    transition: 'all 0.3s ease-out',
  };
  const saveButtonStyle = {
    ...buttonStyle, // Reuse your existing button styles
    backgroundColor: '#4CAF50', // Green color for save
  };
  
  const cancelButtonStyle = {
    ...buttonStyle, // Reuse your existing button styles
    backgroundColor: '#f44336', // Red color for cancel
  };
  
  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: '10px' }}>
      <div style={textStyle}>{userInfo.nickname ? `Welcome ${userInfo.nickname}` : `Welcome User ${userToken}`}</div>
      </div>
      <div style={flexProfileStyle}>
        <span style={textStyle}>Age: {userInfo.age}</span>
        <span style={textStyle}>Weight: {userInfo.weight} Kg</span>
        <span style={textStyle}>Height: {userInfo.height} cm</span>
      </div>
<button onClick={() => setShowChangePasswordModal(true)} style={buttonStyle}>
        Change Password
      </button>
      <button style={buttonStyle} onClick={() => setShowEditModal(true)}>
        Edit Profile
      </button>
      <div style={flexContainerStyle}>
        <button style={{ ...buttonStyle, width: '48%' }} onClick={handleSignOut}>
          Sign Out
        </button>
        <button style={{ ...buttonStyle, width: '48%' }} onClick={() => navigate('/')}>
          Go to main
        </button>
      </div>

      {showEditModal && (
        <div style={backdropStyle} onClick={() => setShowEditModal(false)}>
            <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <h2>Edit Profile Information</h2>
            <div style={modalContentStyle}>
                <div style={inputContainerStyle}>
                    <label style={labelStyle} htmlFor="nickname">Name:</label>
                    <input style={inputStyle} name="nickname" value={userInfo.nickname} onChange={handleInputChange} />
                </div>
                <div style={inputContainerStyle}>
                <label style={labelStyle} htmlFor="age">Age:</label>
                <input style={inputStyle} name="age" value={userInfo.age} onChange={handleInputChange} />
                </div>
                <div style={inputContainerStyle}>
                <label style={labelStyle} htmlFor="weight">Weight:</label>
                <input style={inputStyle} name="weight" value={userInfo.weight} onChange={handleInputChange} />
                </div>
                <div style={inputContainerStyle}>
                <label style={labelStyle} htmlFor="height">Height:</label>
                <input style={inputStyle} name="height" value={userInfo.height} onChange={handleInputChange} />
                </div>
                <div>
                <button style={saveButtonStyle} onClick={handleSave}>Save Changes</button>
                <button style={cancelButtonStyle} onClick={() => setShowEditModal(false)}>Cancel</button>
                </div>
            </div>
            </div>
        </div>
      )}
      {showChangePasswordModal && (
        <div style={backdropStyle} onClick={() => setShowChangePasswordModal(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h2>Change Password</h2>
            <div style={modalContentStyle}>
              {/* Input for current password */}
              <div style={inputContainerStyle}>
                <label style={labelStyle} htmlFor="currentPassword">Current Password:</label>
                <input
                  style={inputStyle}
                  name="currentPassword"
                  type="password"
                  value={passwords.currentPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              {/* Input for new password */}
              <div style={inputContainerStyle}>
                <label style={labelStyle} htmlFor="newPassword">New Password:</label>
                <input
                  style={inputStyle}
                  name="newPassword"
                  type="password"
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              {/* Input for confirm new password */}
              <div style={inputContainerStyle}>
                <label style={labelStyle} htmlFor="confirmPassword">Confirm New Password:</label>
                <input
                  style={inputStyle}
                  name="confirmPassword"
                  type="password"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              {/* Save and Cancel buttons */}
              <div>
                <button style={saveButtonStyle} onClick={handleChangePassword}>Save Changes</button>
                <button style={cancelButtonStyle} onClick={() => setShowChangePasswordModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
