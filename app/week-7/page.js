"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";


export default function Page() {
  // Initialize state with items
  const [items, setItems] = useState(itemsData);

  // Function to add a new item to the list
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  // Render both components and pass data + handler
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-10 font-sans bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 dark:from-stone-900 dark:to-stone-800">
      <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black w-[32rem]">
        <h1
          className="text-3xl font-black mb-6 uppercase tracking-widest text-black text-center"
          style={{
            textShadow:
              "2px 2px 0px #fff, -1px -1px 0px #fff, 1px -1px 0px #fff, -1px 1px 0px #fff",
          }}
        >
          Week 7 – Shopping List
        </h1>
        
        {}
        <NewItem onAddItem={handleAddItem} />

        {/* Item List */}
        <ItemList items={items} />
      </div>
    </main>
  );
}
