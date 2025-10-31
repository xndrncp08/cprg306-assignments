"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  // Initialize state with items
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to add a new item to the list
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  // Function to handle item selection
  function handleItemSelect(item) {
    // Clean up the item name by removing size, emoji, and extra text
    let cleanedName = item.name
      .split(",")[0] // Remove everything after comma 
      .trim()
      .replace(/[^\w\s]/gi, ""); // Remove emojis and special characters

    setSelectedItemName(cleanedName);
  }

  // Render components with updated layout
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-10 font-sans bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 dark:from-stone-900 dark:to-stone-800">
      <h1
        className="text-4xl font-black mb-8 uppercase tracking-widest text-black text-center"
        style={{
          textShadow:
            "3px 3px 0px #fff, -1px -1px 0px #fff, 1px -1px 0px #fff, -1px 1px 0px #fff",
        }}
      >
        Week 8 – Shopping List
      </h1>

      <div className="flex gap-8">
        {/* Left side: NewItem and ItemList */}
        <div className="flex flex-col gap-8">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right side: MealIdeas */}
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}