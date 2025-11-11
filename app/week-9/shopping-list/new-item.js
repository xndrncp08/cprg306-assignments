"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    // reset
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 mb-8 bg-white border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-[24rem]"
    >
      <h2 className="text-xl font-black uppercase text-center text-black">Add New Item</h2>

      <label className="font-semibold text-black">
        Name:
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-1 p-2 border-2 border-black focus:outline-none"
        />
      </label>

      <label className="font-semibold text-black">
        Quantity:
        <input
          type="number"
          min="1"
          required
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full mt-1 p-2 border-2 border-black focus:outline-none"
        />
      </label>

      <label className="font-semibold text-black">
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mt-1 p-2 border-2 border-black focus:outline-none"
        >
          <option>Produce</option>
          <option>Dairy</option>
          <option>Bakery</option>
          <option>Pantry</option>
          <option>Frozen Foods</option>
          <option>Beverages</option>
          <option>Snacks</option>
          <option>Other</option>
        </select>
      </label>

      <button
        type="submit"
        className="px-4 py-2 mt-2 font-black border-4 border-black bg-lime-400 hover:bg-lime-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        Add Item
      </button>
    </form>
  );
}
