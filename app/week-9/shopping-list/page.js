"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/AuthContext";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    router.push("/week-9");
    return null;
  }

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .split(",")[0]
      .trim();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-10 font-sans bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200">
      <h1
        className="text-4xl font-black mb-8 uppercase tracking-widest text-black text-center"
        style={{
          textShadow:
            "3px 3px 0px #fff, -2px -2px 0px #fff, 2px -2px 0px #fff, -2px 2px 0px #fff",
        }}
      >
        Week 9 – Shopping List
      </h1>

      <div className="flex gap-6 w-full max-w-7xl">
        <div className="flex flex-col gap-6 flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}