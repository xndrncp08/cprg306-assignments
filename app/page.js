"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-600">
      <div className="flex flex-col items-center p-8 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black w-[400px] text-center">
        <h1
          className="text-2xl font-black mb-6 text-cyan-400 uppercase tracking-widest"
          style={{
            textShadow:
              "2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
          }}
        >
          CPRG 306: Web Development 2
          <br />
          Assignments
        </h1>

        <div className="flex flex-col space-y-3 w-full">
          <Link
            href="/week-2"
            className="font-black text-black bg-yellow-300 border-4 border-black py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Go to Week 2
          </Link>
          <Link
            href="/week-3"
            className="font-black text-black bg-lime-300 border-4 border-black py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-lime-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Go to Week 3
          </Link>
          <Link
            href="/week-4"
            className="font-black text-black bg-pink-300 border-4 border-black py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Go to Week 4
          </Link>
          <Link
            href="/week-5"
            className="font-black text-black bg-sky-300 border-4 border-black py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-sky-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Go to Week 5
          </Link>
          <Link
            href="/week-6"
            className="font-black text-black bg-orange-300 border-4 border-black py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-orange-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Go to Week 6
          </Link>
        </div>
      </div>
    </main>
  );
}
