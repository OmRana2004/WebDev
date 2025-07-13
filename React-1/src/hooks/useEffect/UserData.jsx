import { useState, useEffect } from "react";

function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // API Call
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // empty array runs only on first render

  return (
    <div>
      <h2>Users Data:</h2>
      
      <table border="2" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default UserData;
