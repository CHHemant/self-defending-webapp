import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <div>
      <h1>Self-Defending WebApp</h1>
      {!admin ? (
        <>
          <LoginForm />
          <button onClick={() => setAdmin(true)}>Go to Admin Dashboard</button>
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
