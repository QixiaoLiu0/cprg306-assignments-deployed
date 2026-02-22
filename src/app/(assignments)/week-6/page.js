"use client";
import ItemList from "@/app/(assignments)/week-6/item-list";
import NewItem from "@/app/(assignments)/week-6/NewItem";
import { useState } from "react";
import initialItems from "@/app/(assignments)/week-6/data/items.json";
export default function Page() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = newItem => {
    setItems([...items, newItem]); // 'set' introduces replecing strategy instead of appending
  };

  return (
    <main>
      <h1 className="text-l font-semibold mb-2">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
