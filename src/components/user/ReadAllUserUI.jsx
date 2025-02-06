import React from 'react';

const ReadAllUserUI = ({ handleView, handleUpdate, handleDelete, users }) => {
  return (
    <div style={styles.container}>
      {users.map((item) => (
        <div key={item._id} style={styles.card}>
          <p style={styles.name}>Name: {item.name}</p>
          <p style={styles.email}>Email: {item.email}</p>
          <div style={styles.buttonGroup}>
            <button
              onClick={handleView(item._id)}
              style={{ ...styles.button, ...styles.viewButton }}
            >
              View
            </button>
            <button
              onClick={handleUpdate(item._id)}
              style={{ ...styles.button, ...styles.updateButton }}
            >
              Update
            </button>
            <button
              onClick={handleDelete(item._id)}
              style={{ ...styles.button, ...styles.deleteButton }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    textAlign: 'center',
    transition: 'transform 0.2s ease',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: '14px',
    color: '#555',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '15px',
  },
  button: {
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    padding: '10px 15px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  viewButton: {
    backgroundColor: '#007bff',
  },
  updateButton: {
    backgroundColor: '#28a745',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
  },
};

export default ReadAllUserUI;
