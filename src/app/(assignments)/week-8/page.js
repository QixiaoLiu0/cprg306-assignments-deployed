"use client";
import ItemList from "@/app/(assignments)/week-8/item-list";
import NewItem from "@/app/(assignments)/week-8/NewItem";
import { useState } from "react";
import initialItems from "@/app/(assignments)/week-8/data/items.json";
import MealIdeas from "./MealIdeas";
export default function Page() {
  const [items, setItems] = useState(initialItems);
  const [selectedName, setSelectedName] = useState("");
  const handleSelectedName = name => {
    setSelectedName(name);
  };

  const handleAddItem = newItem => {
    setItems(prev => [...prev, newItem]); // 'set' introduces replecing strategy instead of appending
  };

  return (
    <main className="flex flex-row justify-center item-start">
      <div>
        <h1 className="text-xl font-semibold mb-2">
          Shopping List + Meal Ideas
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleSelectedName} />
      </div>
      <MealIdeas itemName={selectedName} />
    </main>
  );
}
