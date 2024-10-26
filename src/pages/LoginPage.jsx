import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Header from "../components/header/Header.jsx";
const LoginPage = () => {
  const { setUsername, setPassword, username, password, handleLogin } =
    useContext(GlobalContext);

  return (
    <>
      <Header props="Login"></Header>
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300">
        <div className="w-80 p-10 flex flex-col gap-6 bg-white rounded-2xl shadow-xl shadow-gray-400">
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            Welcome
          </h2>
          <p className="text-center text-gray-600">Please login to continue</p>
          <form className="flex flex-col gap-6" onSubmit={handleLogin}>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700" htmlFor="username">
                Username
              </label>
              <input
                className="rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your username"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                className="rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              className="rounded-lg p-3 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all w-full shadow-md shadow-gray-300"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
