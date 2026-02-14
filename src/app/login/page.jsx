import Logo from "@/components/shared/Logo";
import React from "react";

const LoginPage = () => {
  return (
    <fieldset className="container mx-auto fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-10">
      <div className="mx-auto text-2xl font-bold">
        <Logo /> 
        Login
      </div>

      <label className="label">Email</label>
      <input type="email" className="input" placeholder="Email" />

      <label className="label">Password</label>
      <input type="password" className="input" placeholder="Password" />

      <button className="btn btn-neutral mt-4">Login</button>
    </fieldset>
  );
};

export default LoginPage;
