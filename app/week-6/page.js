"use client";

import { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items] = useState(itemsData);

  return (
    <main className="p-6 font-sans py-1.5 md:bg-purple-50 dark:bg-stone-800">
      <ItemList items={items} />
    </main>
  );
}