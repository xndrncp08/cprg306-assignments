"use client";

import React, { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rouded-2xl shadow-md w-72">
      <h2 className="text-xl font-semibold mb-4">Select Quantity</h2>

      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-lg font-bold ${
            quantity === 1
          }`}
        >
          -
        </button>

        <span className="text-2xl font-bold">{quantity}</span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-lg font-bold ${
            quantity === 20
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
