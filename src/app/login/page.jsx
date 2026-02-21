"use client";

import Logo from "@/components/shared/Logo";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: e.target.email.value,
      password: e.target.password.value,
      redirect: false,
    });

    if (!result.ok) {
      alert("Email or Password didn't matched!");
    } else {
      alert("login successful!");
      router.push("/");
    }
  };
  
  return (
    <fieldset className="container mx-auto fieldset bg-primary/5 border-base-300 rounded-box w-md border p-6 mt-15">
      <div className="mx-auto text-2xl flex flex-col items-center">
        <Logo />
        <p className="my-5 text-center text-sm font-medium text-gray-500">
          Sign in to book care services for your loved ones
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-1">
        <label className="label text-lg">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full text-base"
          placeholder="your@gmail.com"
        />

        <label className="label text-lg">Password</label>
        <input
          type="password"
          name="password"
          className="input w-full text-lg"
          placeholder="*********"
        />

        <button className="btn btn-primary text-white text-lg mt-4 w-full">
          Login
        </button>
      </form>

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
