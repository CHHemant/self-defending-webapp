import React, { useEffect, useState } from "react";

function LoginForm() {
  const [defense, setDefense] = useState({});
  const [form, setForm] = useState({});
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/defense")
      .then(res => res.json())
      .then(setDefense);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        [defense.usernameField]: form[defense.usernameField] || "",
        [defense.passwordField]: form[defense.passwordField] || "",
        csrf: defense.csrfToken
      })
    })
      .then(res => res.json())
      .then(data => setMsg(data.success ? "Logged in!" : data.error))
      .catch(() => setMsg("Server error"));
  };

  if (!defense.usernameField) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        name={defense.usernameField}
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        name={defense.passwordField}
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <input type="hidden" name="csrf" value={defense.csrfToken} />
      <button type="submit">Login</button>
      {msg && <div>{msg}</div>}
    </form>
  );
}

export default LoginForm;
