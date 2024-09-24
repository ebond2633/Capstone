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

  if (isRegistered) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-keppel">
          Registration Successful!
        </h2>
        <p className="mb-4">
          Thank you for registering. You can now log in to your account.
        </p>
        <Link
          to="/login"
          className="bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={HandleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-onyx">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-timberwolf border border-onyx rounded-md shadow-sm focus:outline-none focus:ring-keppel focus:border-keppel"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-onyx">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-timberwolf border border-onyx rounded-md shadow-sm focus:outline-none focus:ring-keppel focus:border-keppel"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-onyx"
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
          className="mt-1 block w-full px-3 py-2 bg-timberwolf border border-onyx rounded-md shadow-sm focus:outline-none focus:ring-keppel focus:border-keppel"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-platinum bg-saffron hover:bg-keppel focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-keppel"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Register;








// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// export default function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle login logic here
//     console.log('Login submitted', { email, password })
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Login</h1>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-2">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block mb-2">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
//           Login
//         </button>
//       </form>
//       <p className="mt-4 text-center">
//         Don't have an account? <Link to="/signup" className="text-green-600 hover:underline">Sign up</Link>
//       </p>
//     </div>
//   )
// }