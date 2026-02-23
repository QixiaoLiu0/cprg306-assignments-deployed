"use client";

import Item from "@/app/(assignments)/week-6/item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCate, setGroupByCate] = useState(false);
  const handleSort = e => {
    let btnVal = e.target.value;
    setSortBy(btnVal);
    setGroupByCate(false);
  };
  const handleGroup = e => {
    setGroupByCate(true);
    setSortBy("");
  };

  //component will be updated after states or props changed
  const sortedItem = [...items].sort((a, b) => {
    if (sortBy == "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy == "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });
  const categories = [
    ...new Set(items.map(item => item.category.toLowerCase())),
  ].sort();

  return (
    <main>
      <div className="flex gap-2 items-center my-3 text-sm">
        <button
          value={"name"}
          onClick={handleSort}
          className={`px-4 py-2 rounded transition-colors text-white ${
            sortBy == "name" ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-600"
          }`}
        >
          name
        </button>
        <button
          value={"category"}
          onClick={handleSort}
          className={`px-4 py-2 rounded transition-colors text-white text-sm ${
            sortBy == "category"
              ? "bg-blue-600  shadow-inner"
              : "bg-gray-400 hover:bg-blue-600"
          }`}
        >
          category
        </button>
        <button
          value={"GROUP"}
          onClick={handleGroup}
          className={`px-4 py-2 rounded transition-colors text-white text-sm ${
            groupByCate
              ? "bg-blue-600  shadow-inner"
              : "bg-gray-400 hover:bg-blue-600"
          }`}
        >
          Group by Category
        </button>

        <p>
          total item{items.length == 1 && "s"}: {items.length}
        </p>
      </div>

      {!groupByCate &&
        sortedItem.map(item => (
          <Item
            key={item.id}
            quantity={item.quantity}
            name={item.name}
            category={item.category}
          ></Item>
        ))}

      {groupByCate &&
        categories.map((cate, index) => (
          <section key={index}>
            <h1 className="text-lg font-semibold">
              {cate.charAt(0).toUpperCase() + cate.slice(1)}
            </h1>
            <ul className="p-5 list-disc list-inside pt-0">
              {items
                .filter(
                  item => item.category.toLowerCase() === cate.toLowerCase(),
                )
                .sort((a, b) => a.name.localeCompare(b.name)) //sort items in the same cate by their names
                .map(good => (
                  <Item
                    key={good.id}
                    name={good.name}
                    quantity={good.quantity}
                  />
                ))}
            </ul>
          </section>
        ))}
    </main>
  );
}
