import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1
        className="text-xl font-black mb-4 text-cyan-400 uppercase tracking-widest"
        style={{
          textShadow:
            "2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
        }}
      >
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <p className="text-l font-black mb-4 text-fuchsia-400 border border-gray-300 rounded px-4 py-2 w-140 mb-4">
        <Link href="/week-2">Go to Week 2</Link>
        <Link href="/week-3"> - Go to Week 3</Link>
        <Link href="/week-4"> - Go to Week 4</Link>
        <Link href="/week-5"> - Go to Week 5</Link>
      </p>
    </main>
  );
}
