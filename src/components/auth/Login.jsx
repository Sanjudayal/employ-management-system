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

  const fillDemo = (role) => {
    if (role === "admin") {
      setEmail("admin@company.com");
      setPassword("123");
    } else {
      setEmail("employee1@company.com");
      setPassword("123");
    }
  };

  return (
    <div className="h-dvh w-screen flex flex-col justify-center items-center">
      <div className="border-emerald-600 border-2 rounded-xl px-8 py-12 md:p-18">
        <form className="flex flex-col items-center">
          <input
            className="border-2 border-emerald-600 rounded-full px-4 md:px-6 py-2 outline-0 bg-transparent text-white placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Enter your email"
          />
          <input
            className="border-2 border-emerald-600 rounded-full px-4 md:px-6 py-2 mt-3 outline-0 bg-transparent text-white placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Enter password"
          />
          <button
            onClick={submitHandler}
            className="w-full bg-emerald-600 text-white rounded-full outline-none py-2 font-bold mt-6 hover:bg-emerald-700 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            Log in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 mt-6">
          <div className="h-px flex-1 bg-emerald-600/40"></div>
          <span className="text-[10px] uppercase tracking-widest text-emerald-500/80">
            Demo Access
          </span>
          <div className="h-px flex-1 bg-emerald-600/40"></div>
        </div>

        {/* Quick fill buttons */}
        <div className="flex gap-2 mt-4">
          <button
            type="button"
            onClick={() => fillDemo("admin")}
            className="flex-1 text-xs border border-emerald-600/60 text-emerald-400 rounded-full py-1.5 hover:bg-emerald-600 hover:text-white transition-all duration-200"
          >
            Login as Admin
          </button>
          <button
            type="button"
            onClick={() => fillDemo("employee")}
            className="flex-1 text-xs border border-emerald-600/60 text-emerald-400 rounded-full py-1.5 hover:bg-emerald-600 hover:text-white transition-all duration-200"
          >
            Login as Employee
          </button>
        </div>

        {/* Credential hint */}
        <p className="text-center text-[10px] text-gray-500 mt-3 leading-relaxed">
          Admin: <span className="text-emerald-500">admin@company.com</span> /
          123 <br />
          Employee:{" "}
          <span className="text-emerald-500">employee1@company.com</span> / 123
        </p>
      </div>
    </div>
  );
};

export default Login;
