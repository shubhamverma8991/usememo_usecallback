import React, { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const users = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"];

  // Memoize the filtered list so it only recalculates when 'search' changes
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) => user.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useMemo Example</h2>

      <input type="text" placeholder="Search user..." value={search} onChange={(e) => setSearch(e.target.value)} />

      <button onClick={() => setCount((prev) => prev + 1)}>Re-render ({count})</button>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoExample;
