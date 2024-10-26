import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const LoginPage = () => {
  const { setUsername, setPassword, username, password, handleLogin } =
    useContext(GlobalContext);

  return (
    <div>
      <h2 className="text-3xl font-bold underline">Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
