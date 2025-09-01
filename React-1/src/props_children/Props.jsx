import { useState } from "react";

const Welcome = ({ name }) => {
  return <h1>Hello, {name} Welcome to React.</h1>;
};

function Props() {
  const [name, setName] = useState("  "); // default value

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", marginBottom: "10px" }}
      />
      <Welcome name={name} />
    </div>
  );
}

export default Props;
