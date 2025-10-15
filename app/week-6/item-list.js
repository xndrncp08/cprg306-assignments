"use client";

import React, { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sort items by name or category
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-600">
      <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-[28rem] border-4 border-black">
        
        <h1
          className="text-3xl font-black mb-4 uppercase tracking-widest text-black"
          style={{
            textShadow:
              "2px 2px 0px #fff, -1px -1px 0px #fff, 1px -1px 0px #fff, -1px 1px 0px #fff",
          }}
        >
          Shopping List
        </h1>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setSortBy("name")}
            className={`px-4 py-2 font-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
              sortBy === "name"
                ? "bg-yellow-300"
                : "bg-lime-400 hover:bg-lime-300"
            }`}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={`px-4 py-2 font-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
              sortBy === "category"
                ? "bg-yellow-300"
                : "bg-lime-400 hover:bg-lime-300"
            }`}
          >
            Sort by Category
          </button>
        </div>

        <ul className="space-y-4 w-full">
          {sortedItems.map((item) => (
            <li
              key={item.id}
              className="border-4 border-black rounded-none p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <p className="font-black text-lg text-black">{item.name}</p>
              <p className="text-black font-semibold">
                Quantity: {item.quantity}
              </p>
              <p className="text-black font-semibold">
                Category: {item.category}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
