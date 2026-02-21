"use client";
import { postUser } from "@/actions/server/auth";
import Logo from "@/components/shared/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const RegisterPage = () => {
  const router = useRouter();
  
  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      nid: e.target.nid.value,
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.email.value,
    };

    const res = await postUser(userData);

    if (!res.success) {
      alert(res.message);
    } else {
      alert("Registration successful!");
      router.push("/login");
    }
  };

  return (
    <fieldset className="container mx-auto fieldset bg-primary/5 border-base-300 rounded-box w-md border p-6 mt-15">
      <div className="mx-auto text-2xl flex flex-col items-center">
        <Logo />
        <p className="my-5 text-center text-sm font-medium text-gray-500">
          Create an account to get started
        </p>
      </div>

      <form onSubmit={handleRegister} className="space-y-1">
        <label className="label text-lg">NID No</label>
        <input
          type="number"
          name="nid"
          className="input w-full text-base"
          placeholder="National ID number"
        />

        <label className="label text-lg">Full Name</label>
        <input
          type="text"
          name="name"
          className="input w-full text-base"
          placeholder="Your full name"
        />

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
          Register
        </button>
      </form>

      <div className="text-center text-base mt-3">
        Already have an account?{" "}
        <Link href={"/login"} className="text-primary underline">
          Login
        </Link>
      </div>
    </fieldset>
  );
};

export default RegisterPage;
