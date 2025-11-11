"use client";

import { useState, useEffect } from "react";

// Fetch function outside component
async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="flex flex-col p-6 bg-white border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full">
      <h2 className="text-2xl font-black uppercase mb-4 text-black">
        Meal Ideas
      </h2>
      {ingredient ? (
        <>
          <p className="font-semibold text-black mb-4">
            Here are some meal ideas using {ingredient}:
          </p>
          <ul className="space-y-3">
            {meals.length > 0 ? (
              meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="border-2 border-black p-3 bg-gradient-to-r from-yellow-200 to-pink-200 font-semibold text-black"
                >
                  {meal.strMeal}
                </li>
              ))
            ) : (
              <p className="text-black">
                No meal ideas found for {ingredient}
              </p>
            )}
          </ul>
        </>
      ) : (
        <p className="text-black font-semibold">
          Select an item to see meal ideas
        </p>
      )}
    </div>
  );
}