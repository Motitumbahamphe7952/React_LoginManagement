import React from 'react';

const UserDetailsUI = ({ user }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User Details</h2>
      <div style={styles.userDetailsBox}>
        <p style={styles.userDetail}><strong>Name:</strong> {user.name}</p>
        <p style={styles.userDetail}><strong>Email:</strong> {user.email}</p>
        <p style={styles.userDetail}><strong>Password:</strong> {user.password}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    fontSize: '22px',
    marginBottom: '20px',
    fontWeight: '600',
    color: '#333',
  },
  userDetailsBox: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px 20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '280px',
  },
  userDetail: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#555',
  }
};

export default UserDetailsUI;
