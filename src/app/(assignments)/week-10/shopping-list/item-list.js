"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
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

  const removeInvalidChars = str => {
    return str.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      "",
    );
  };

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
            onSelect={() => {
              onItemSelect(removeInvalidChars(item.name).split(",")[0].trim());
            }}
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
                    onSelect={() => {
                      onItemSelect(
                        removeInvalidChars(good.name).split(",")[0].trim(),
                      );
                    }}
                  />
                ))}
            </ul>
          </section>
        ))}
    </main>
  );
}
