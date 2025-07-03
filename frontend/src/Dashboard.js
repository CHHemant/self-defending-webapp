import React, { useEffect, useState } from "react";

function Dashboard() {
  const [attacks, setAttacks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/attacks")
      .then(res => res.json())
      .then(setAttacks);
  }, []);

  return (
    <div>
      <h2>Attack Log</h2>
      <ul>
        {attacks.map((a, i) => (
          <li key={i}>
            [{a.time}] {a.type} - {a.detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
