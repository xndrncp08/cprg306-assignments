import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Week 5 – New Item</h1>
      <NewItem />
    </main>
  );
}
