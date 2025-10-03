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

//had to ask ai to fix my styling for line 19, 20, and 27 because it wont turn out like i wanted to :> ; prompt: "can you fix the styling for this: "

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-600">
      <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-72 border-4 border-black">
      <h2 className="text-xl font-black mb-4 text-cyan-400 uppercase tracking-widest" style={{textShadow: '2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000'}}>Select Quantity</h2>

      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-6 py-3 font-black text-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase ${
            quantity === 1 ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-lime-400 text-black hover:bg-lime-300 active:shadow-none active:translate-x-1 active:translate-y-1'
          }`}
        >
          -
        </button>

        <span className="text-4xl font-black bg-white border-4 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">{quantity}</span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-6 py-3 font-black text-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase ${
            quantity === 20 ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-lime-400 text-black hover:bg-lime-300 active:shadow-none active:translate-x-1 active:translate-y-1'
          }`}
        >
          +
        </button>
      </div>
    </div>
    </div>
  );
}