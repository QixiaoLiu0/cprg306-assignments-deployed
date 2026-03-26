"use client";
import { useUserAuth } from "./contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { user, handleSignInClick } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/week-10/shopping-list");
  }, [user, router]);
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Login</h1>

      <button
        onClick={handleSignInClick}
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >
        Sign in
      </button>
    </div>
  );
}
