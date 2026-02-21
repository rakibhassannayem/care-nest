"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const GoogleLoginBtn = () => {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  const handleSignIn = async () => {
    const result = await signIn("google", {
      redirect: false,
      callbackUrl
    });
    console.log(result)
    // if (result?.ok) {
    //   alert("Login successful!")
    //   router.push("/")
    // } else {
    //   alert("Login failed!")
    // }
  };

  return (
    <button onClick={handleSignIn} className="btn btn-outline text-lg mt-4 w-full">
      <FcGoogle />Login with Google
    </button>
  );
};

export default GoogleLoginBtn;