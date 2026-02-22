"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const updateName = e => setName(e.target.value);
  const updateQty = e => setQuantity(Number(e.target.value));
  const updateCate = e => setCategory(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();

    let id = Math.random().toString(36).substring(2, 9);

    let item = { id, name, quantity, category };
    console.log(item);
    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      className="max-w-xl p-4 bg-blue-100 rounded-lg w-140"
      onSubmit={handleSubmit}
    >
      <div className="flex align-center">
        <label className="mr-5" htmlFor="grocery-name">
          Name:{" "}
        </label>
        <input
          id="grocery-name"
          placeholder="please enter grocery name."
          type="text"
          className="w-full p-2 rounded-md border border-gray-400"
          required={true}
          value={name}
          onChange={updateName}
        />
      </div>
      <div className="flex my-3">
        <div className="flex-1">
          <label htmlFor="quantity">Quantity: </label>
          <input
            className="p-1 border border-gray-400 rounded-md"
            id="quantity"
            type="number"
            min={1}
            max={99}
            value={quantity}
            onChange={updateQty}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="category">Category: </label>
          <select
            className="p-1 border border-gray-400 rounded-md"
            id="category"
            value={category}
            onChange={updateCate}
          >
            <option>Produce</option>
            <option>Dairy</option>
            <option>Bakery</option>
            <option>Meat</option>
            <option>Frozen Foods</option>
            <option>Canned Goods</option>
            <option>Dry Goods</option>
            <option>Beverages</option>
            <option>Snacks</option>
            <option>Household</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
    </form>
  );
}
