import Logo from "@/components/shared/Logo";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <fieldset className="container mx-auto fieldset bg-primary/5 border-base-300 rounded-box w-md border p-6 mt-15">
      <div className="mx-auto text-2xl flex flex-col items-center">
        <Logo />
        <p className="my-5 text-center text-sm font-medium text-gray-500">
          Sign in to book care services for your loved ones
        </p>
      </div>

      <label className="label text-lg">Email</label>
      <input
        type="email"
        className="input w-full text-base"
        placeholder="Email"
      />

      <label className="label text-lg">Password</label>
      <input
        type="password"
        className="input w-full text-lg"
        placeholder="Password"
      />

      <button className="btn btn-primary text-white text-lg mt-4">Login</button>

      <div className="text-center text-base mt-3">
        Don&apos;t have account?{" "}
        <Link href={"/register"} className="text-primary underline">
          Register
        </Link>
      </div>
    </fieldset>
  );
};

export default LoginPage;
