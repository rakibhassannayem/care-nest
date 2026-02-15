import Logo from "@/components/shared/Logo";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <fieldset className="container mx-auto fieldset bg-primary/5 border-base-300 rounded-box w-md border p-6 mt-15">
      <div className="mx-auto text-2xl flex flex-col items-center">
        <Logo />
        <p className="my-5 text-center text-sm font-medium text-gray-500">
          Create an account to get started
        </p>
      </div>

      <label className="label text-lg">Full Name</label>
      <input
        type="text"
        className="input w-full text-base"
        placeholder="Your full name"
      />

      <label className="label text-lg">Email</label>
      <input
        type="email"
        className="input w-full text-base"
        placeholder="your@gmail.com"
      />

      <label className="label text-lg">Password</label>
      <input
        type="password"
        className="input w-full text-lg"
        placeholder="*********"
      />

      <button className="btn btn-primary text-white text-lg mt-4">
        Register
      </button>

      <div className="text-center text-base mt-3">
        Already have an account?{" "}
        <Link href={"/login"} className="text-primary underline">
          Login
        </Link>
      </div>
    </fieldset>
  );
};

export default LoginPage;
