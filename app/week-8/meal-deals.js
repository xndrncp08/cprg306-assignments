"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  }

  async function loadMealIdeas() {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="flex flex-col p-6 bg-white border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-[28rem]">
      <h2 className="text-2xl font-black uppercase text-center text-black mb-4">
        Meal Ideas
      </h2>

      {!ingredient ? (
        <p className="text-center text-gray-600 font-semibold">
          Select an item to see meal ideas
        </p>
      ) : meals.length === 0 ? (
        <p className="text-center text-gray-600 font-semibold">
          No meal ideas found for {ingredient}
        </p>
      ) : (
        <>
          <p className="text-center text-black font-semibold mb-4">
            Here are some meal ideas using {ingredient}:
          </p>
          <ul className="space-y-3">
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="border-2 border-black rounded-none p-3 bg-gradient-to-r from-yellow-200 to-yellow-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                <p className="font-black text-black">{meal.strMeal}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}