import React, { useState } from "react";

const Login = ({ setToken }) => {
  const [username, setUserName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      username,
      password,
    };
    console.log(userInfo);
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      setToken(data.token);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen w-full">
      <div className="bg-slate-300 p-5 rounded-lg mx-10 w-full md:w-1/2 lg:w-1/4">
        <div>
          <h1 className="text-3xl font-semibold text-center mb-5">
            Please login first
          </h1>
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="username" className="text-xl">
                Username
              </label>
              <input
                type="text"
                className="p-1 rounded-md text-lg"
                name="username"
                id=""
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="password" className="text-xl">
                Password
              </label>
              <input
                type="password"
                className="p-1 rounded-md text-lg"
                name="password"
                id=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-end">
              <button className="px-10 py-2 bg-slate-800 text-white rounded-lg text-xl mt-4">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
