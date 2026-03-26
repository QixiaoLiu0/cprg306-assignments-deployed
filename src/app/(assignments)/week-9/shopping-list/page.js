"use client";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import { useState } from "react";
import initialItems from "./data/items.json";
import MealIdeas from "./MealIdeas";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(initialItems);
  const [selectedName, setSelectedName] = useState("");
  const handleSelectedName = name => {
    setSelectedName(name);
  };

  const handleAddItem = newItem => {
    setItems(prev => [...prev, newItem]);
  };

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="">
      <div className=" flex flex-row gap-2 items-center pt-1 mb-3">
        <div className="flex flex-row gap-2">
          <p>
            <span>Hello: </span>
            <span className="font-bold text-blue-600">{user.displayName}</span>
          </p>
          <p className="text-gray-500">{user.email}</p>
        </div>

        <button
          onClick={handleSignOut}
          className="bg-gray-800 hover:bg-gray-500 text-white text-sm px-1 py-1  rounded transition-colors"
        >
          Sign Out
        </button>
      </div>
      <div className="flex flex-row">
        <div>
          <h1 className="text-xl font-semibold mb-2">
            Shopping List + Meal Ideas
          </h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleSelectedName} />
        </div>
        <MealIdeas itemName={selectedName} />
      </div>
    </main>
  );
}
