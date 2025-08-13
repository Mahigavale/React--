import React, { useState } from 'react';

function AdminStudentData() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const fetchData = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter username and password');
      return;
    }

    const url = 'http://localhost:8080/admin/get-all-students';
    const basicAuth = 'Basic ' + btoa(username + ':' + password);

    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: basicAuth,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
        setError(null);
      })
      .catch((err) => {
        setError('Failed to fetch student data. Check your credentials.');
        setStudents([]);
        console.error(err);
      });
  };

  return (
    <div
      style={{
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '900px',
        margin: '40px auto',
        backgroundColor: '#fefefe',
        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
        borderRadius: '8px',
      }}
    >
      <h2 style={{ marginBottom: '20px', color: '#333' }}>
        Admin - Fetch Students Data
      </h2>

      <form onSubmit={fetchData} style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label
            style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}
          >
            Username:
          </label>
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter email"
            style={{
              padding: '8px',
              width: '100%',
              maxWidth: '350px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '1em',
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label
            style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}
          >
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{
              padding: '8px',
              width: '100%',
              maxWidth: '350px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '1em',
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 24px',
            backgroundColor: '#d33',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1em',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#b22')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#d33')}
        >
          Fetch Students Data
        </button>
      </form>

      {error && (
        <p
          style={{
            color: 'red',
            marginBottom: '20px',
            fontWeight: '600',
          }}
        >
          {error}
        </p>
      )}

      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '600px',
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: '#d33',
                color: 'white',
                position: 'sticky',
                top: 0,
                zIndex: 1,
              }}
            >
              <th style={{ padding: '14px 12px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '14px 12px', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '14px 12px', textAlign: 'left' }}>
                Final Score
              </th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td
                  colSpan="3"
                  style={{
                    textAlign: 'center',
                    padding: '25px',
                    fontStyle: 'italic',
                    color: '#555',
                  }}
                >
                  No data available. Please enter credentials and fetch data.
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr
                  key={student.id}
                  style={{
                    borderBottom: '1px solid #eee',
                    backgroundColor: '#fff',
                    transition: 'background-color 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#f7f7f7')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = '#fff')
                  }
                >
                  <td style={{ padding: '12px 15px' }}>{student.name}</td>
                  <td style={{ padding: '12px 15px' }}>{student.email}</td>
                  <td style={{ padding: '12px 15px', fontWeight: '600' }}>
                    {student.finalScore ?? '-'}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminStudentData;
