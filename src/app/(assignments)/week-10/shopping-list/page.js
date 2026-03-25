"use client";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import { useState } from "react";
// import initialItems from "./data/items.json";
import MealIdeas from "./MealIdeas";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../contexts/AuthContext";
import {
  getItems,
  addItem,
  deleteItem,
} from "../_services/shopping-list-service";

export default function Page() {
  const router = useRouter();
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedName, setSelectedName] = useState("");

  const handleSelectedName = name => {
    setSelectedName(name);
  };
  const handleDeleteId = async itemId => {
    console.log(itemId);

    await deleteItem(user.uid, itemId);
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handleAddItem = async newItem => {
    const id = await addItem(user.uid, newItem); //real item id
    setItems(prev => [...prev, { ...newItem, id }]);
  };

  useEffect(() => {
    if (!user) {
      router.push("/week-10");
    }
  }, [user, router]);

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const loadItems = async () => {
    setItems(await getItems(user.uid));
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="">
      <div className="flex flex-row gap-2 items-center pt-1 mb-3">
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
          <ItemList
            items={items}
            onItemSelect={handleSelectedName}
            onItemDelete={handleDeleteId}
          />
        </div>
        <MealIdeas itemName={selectedName} />
      </div>
    </main>
  );
}
