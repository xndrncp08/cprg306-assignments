"use client";

import React, { useState } from "react";

export default function Field() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);

    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center min-h-screen bg-blue-600">
        <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-72 border-4 border-black">
          <h2
            className="text-xl font-black mb-4 text-cyan-400 uppercase tracking-widest"
            style={{
              textShadow:
                "2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
            }}
          >
            Item Name
          </h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter item name"
            required
            className="border border-gray-300 rounded px-4 py-2 w-64 mb-4"
          />

          <h2
            className="text-xl font-black mb-4 text-cyan-400 uppercase tracking-widest"
            style={{
              textShadow:
                "2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
            }}
          >
            Select Quantity
          </h2>

          <div className="flex items-center gap-4 mb-6">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className={`px-6 py-3 font-black text-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase ${
                quantity === 1
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-lime-400 text-black hover:bg-lime-300 active:shadow-none active:translate-x-1 active:translate-y-1"
              }`}
            >
              -
            </button>
            <span className="text-4xl font-black bg-white border-4 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {quantity}
            </span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className={`px-6 py-3 font-black text-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase ${
                quantity === 20
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-lime-400 text-black hover:bg-lime-300 active:shadow-none active:translate-x-1 active:translate-y-1"
              }`}
            >
              +
            </button>
          </div>

          <div className="w-full mb-6">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border-4 border-black bg-white font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <option value="itemList">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>  
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 font-black text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase bg-yellow-400 text-black hover:bg-yellow-300 active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}