"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/privateRoute/myBookings"}>My Bookings</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/privateRoute"}>Admin</Link>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="blue"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-primary"
            >
              {links}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold text-primary">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {status === "loading" ? (
            <span className="loading loading-spinner text-primary loading-xl"></span>
          ) : !session?.user?.email ? (
            <div className="flex">
              <Link href={"/login"} className="btn btn-ghost text-lg">
                Login
              </Link>
              <Link
                href={"/register"}
                className="btn btn-primary text-base text-white rounded-full"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-1">
              <p className="font-bold text-primary">{session?.user?.name}</p>
              <button
                onClick={() => signOut()}
                className="btn bg-red-500 font-bold text-base text-white rounded-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
