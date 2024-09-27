import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const encryptPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const key = await crypto.subtle.generateKey(
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encryptedData = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      key,
      data
    );
    const exportedKey = await crypto.subtle.exportKey("raw", key);
    return {
      encryptedPassword: btoa(
        String.fromCharCode.apply(null, new Uint8Array(encryptedData))
      ),
      key: btoa(String.fromCharCode.apply(null, new Uint8Array(exportedKey))),
      iv: btoa(String.fromCharCode.apply(null, iv)),
    };
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { encryptedPassword, key, iv } = await encryptPassword(password);
      const user = { name, email, encryptedPassword, key, iv };
      localStorage.setItem("user", JSON.stringify(user));
      console.log("User registered:", name, email);
      setIsRegistered(true);
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred during registration");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leonardo_Phoenix_A_majestic_intertwined_serif_font_logo_Verdan_3-Fvo9sBZIf3VRLHi6gz2eUFdNdj1JKO.jpg')"}}>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-6"></h1>
        {isRegistered ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              Registration Successful!
            </h2>
            <p className="mb-4 text-gray-700">
              Thank you for registering. You can now log in to your account.
            </p>
            <Link
              to="/login"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
            >
              Go to Login
            </Link>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={HandleSubmit}>
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
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
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
