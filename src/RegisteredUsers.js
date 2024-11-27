import React, { useEffect, useState } from 'react';

const RegisteredUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate fetching registered users
    const fetchUsers = () => {
      const dummyUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321' },
      ];
      setUsers(dummyUsers);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredUsers;