import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

function UserData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate network delay for testing spinner
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUsers(res.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 3000); // wait 3 seconds before making the API call
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2>Users Data:</h2>

      <table
        border="2"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
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
          {users.map((user) => (
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
