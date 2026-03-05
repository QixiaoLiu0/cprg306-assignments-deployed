"use client";
import { useState, useEffect } from "react";
import { API_MEAL_URL } from "./constants";
import MealCard from "./MealCard";

export default function MealIdeas({ itemName }) {
  const [mealList, setMealList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!itemName) return;

    const fetchMealIdeas = async () => {
      setIsLoading(true);
      try {
        const mealResp = await fetch(`${API_MEAL_URL}?i=${itemName}`);
        const mealRes = await mealResp.json();

        setMealList(mealRes.meals || []);
      } catch (e) {
        alert("errors");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMealIdeas();
  }, [itemName]);
  console.log(mealList);
  return (
    <main className="mt-9 ml-2">
      {itemName && (
        <h2 className="text-lg font-semibold">Meal ideas for "{itemName}"</h2>
      )}

      {isLoading ? (
        <p className="mt-4 text-gray-500">Loading...</p>
      ) : (
        <>
          {mealList.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-3">
              {mealList.map((item, index) => {
                return (
                  <MealCard
                    key={item.idMeal || index}
                    strMeal={item.strMeal}
                    img={item.strMealThumb}
                  />
                );
              })}
            </div>
          )}

          {itemName && mealList.length === 0 && (
            <p className="mt-4 text-gray-500">No meals found.</p>
          )}
        </>
      )}
    </main>
  );
}
