import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-dvh w-screen flex justify-center items-center">
      <div className="border-emerald-600 border-2 rounded-xl px-8 py-12 md:p-18">
        <form className="flex flex-col items-center">
          <input
            className="border-2 border-emerald-600 rounded-full px-4 md:px-6 py-2  outline-0"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            placeholder="Enter you email"
          />
          <input
            className="border-2 border-emerald-600 rounded-full px-4 md:px-6 py-2 mt-3 outline-0 "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            required
            placeholder="Enter password"
          />
          <button
            onClick={(e) => {
              submitHandler(e);
            }}
            className="w-full bg-emerald-600 text-white rounded-full outline-none py-2 font-bold mt-6 hover:bg-emerald-700 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
