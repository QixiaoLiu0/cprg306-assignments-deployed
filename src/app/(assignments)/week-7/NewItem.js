"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [itemState, setItemState] = useState({
    name: "",
    quantity: 1,
    category: "produce",
  });

  // const [name, setName] = useState("");
  // const [quantity, setQuantity] = useState(1);
  // const [category, setCategory] = useState("produce");

  // const updateName = e => setName(e.target.value);
  // const updateCate = e => setCategory(e.target.value.toLowerCase());

  const handleChange = e => {
    setItemState(preState => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleItemQty = amount => {
    setItemState(preState => ({
      ...preState,
      quantity: preState.quantity + amount,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    let id = Math.random().toString(36).substring(2, 9);

    let item = { id, ...itemState };
    console.log(item);
    onAddItem(item);

    // setName("");
    // setQuantity(1);
    // setCategory("produce");

    setItemState({
      name: "",
      quantity: 1,
      category: "produce",
    });
  };

  return (
    <form
      className="max-w-xl p-4 border border-[#d9d9d9] rounded-lg w-140"
      onSubmit={handleSubmit}
    >
      <div className="">
        <label className="text-sm" htmlFor="grocery-name">
          Item Name:{" "}
        </label>
        <input
          id="grocery-name"
          name="name"
          placeholder="please enter grocery name."
          type="text"
          className="w-full p-2 rounded-md border border-gray-400 mt-1 h-10 mb-3"
          required={true}
          value={itemState.name}
          onChange={handleChange}
        />
      </div>

      <div className="">
        <label htmlFor="quantity" className="text-sm">
          Quantity (1-20)
        </label>
        <p>
          <span className="text-sm text-gray-600">Current: </span>
          <span className="text-xl font-semibold">{itemState.quantity}</span>
        </p>
        <div className="flex items-center gap-3 my-3">
          <button
            type="button"
            className="rounded px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
            aria-label="Decrease quantity"
            disabled={itemState.quantity < 2}
            onClick={() => handleItemQty(-1)}
            value={"-"}
          >
            −
          </button>
          <button
            type="button"
            className="rounded px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white disabled:bg-blue-200"
            aria-label="Increase quantity"
            onClick={() => handleItemQty(1)}
            disabled={itemState.quantity > 19}
            value={"+"}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-2 mb-4 gap-1">
        <label htmlFor="category" className="text-sm">
          Category:{" "}
        </label>
        <select
          className="p-2 border border-gray-400 rounded-md w-full h-10"
          id="category"
          name="category"
          value={itemState.category}
          onChange={handleChange}
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

      <div className="">
        <button
          type="submit"
          className="rounded bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}
