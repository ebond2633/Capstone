import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const decryptPassword = async (encryptedPassword, key, iv) => {
    const decoder = new TextDecoder();
    const importedKey = await crypto.subtle.importKey(
      "raw",
      Uint8Array.from(atob(key), (c) => c.charCodeAt(0)),
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
    const decryptedData = await crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: Uint8Array.from(atob(iv), (c) => c.charCodeAt(0)),
      },
      importedKey,
      Uint8Array.from(atob(encryptedPassword), (c) => c.charCodeAt(0))
    );
    return decoder.decode(decryptedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        setError("User not found");
        return;
      }

      const decryptedPassword = await decryptPassword(
        storedUser.encryptedPassword,
        storedUser.key,
        storedUser.iv
      );

      if (storedUser.email === email && decryptedPassword === password) {
        console.log("Login successful"); 
        handleLogin();
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <video 
        className="absolute w-auto min-w-full min-h-full max-w-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source 
          src="https://res.cloudinary.com/dhxugmddf/video/upload/v1727467975/20584448-uhd_3840_2160_60fps_fui31w.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 w-full max-w-md px-6 py-12 bg-white bg-opacity-80 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;