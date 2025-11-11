"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignIn() {
    try {
      setLoading(true);
      setError("");
      await gitHubSignIn(); // Note: Capital H to match AuthContext
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Failed to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSignOut() {
    try {
      setLoading(true);
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
      setError("Failed to sign out. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200">
      <div className="flex flex-col items-center p-8 bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-md">
        <h1
          className="text-4xl font-black mb-6 uppercase tracking-widest text-black text-center"
          style={{
            textShadow:
              "3px 3px 0px #fbbf24, -2px -2px 0px #fbbf24, 2px -2px 0px #fbbf24, -2px 2px 0px #fbbf24",
          }}
        >
          Week 9 Assignment
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border-2 border-red-500 text-red-700 text-sm font-bold">
            {error}
          </div>
        )}

        {!user ? (
          <div className="text-center w-full">
            <p className="mb-6 text-lg font-semibold text-black">
              Sign in to access your shopping list
            </p>
            <button
              onClick={handleSignIn}
              disabled={loading}
              className="w-full px-6 py-3 font-black text-lg border-4 border-black bg-lime-400 hover:bg-lime-300 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </span>
              ) : (
                "Sign In with GitHub"
              )}
            </button>
          </div>
        ) : (
          <div className="text-center w-full">
            <p className="mb-4 text-lg font-semibold text-black">
              Welcome, {user.displayName || user.email}!
            </p>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-20 h-20 rounded-full border-4 border-black mx-auto mb-4"
              />
            )}
            <div className="flex flex-col gap-4">
              <Link
                href="/week-9/shopping-list"
                className="px-6 py-3 font-black text-lg border-4 border-black bg-yellow-300 hover:bg-yellow-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-center"
              >
                Go to Shopping List
              </Link>
              <button
                onClick={handleSignOut}
                disabled={loading}
                className="px-6 py-3 font-black text-lg border-4 border-black bg-red-400 hover:bg-red-300 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {loading ? "Signing Out..." : "Sign Out"}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}