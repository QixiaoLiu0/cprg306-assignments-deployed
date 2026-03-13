"use client";
import { useState } from "react";
import MealDetails from "./MealDetails";
import { API_INGREDIENT_URL } from "./constants";
export default function MealCard({ strMeal, img, isOverHalf }) {
  const [showDetails, setShowDetails] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [CardPos, setCardPos] = useState({ left: 0, top: 0 });
  const [ingredient, setIngredient] = useState([]);

  const mouseHandler = {
    enter: async () => {
      setShowDetails(true);
      if (ingredient.length > 0) return;
      try {
        const mealDetailsResp = await fetch(
          `${API_INGREDIENT_URL}?s=${strMeal}`,
        );
        const mealDetailRes = await mealDetailsResp.json();

        if (!mealDetailRes.meals || mealDetailRes.meals.length === 0) return;

        const ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = mealDetailRes.meals[0][`strIngredient${i}`];

          if (ingredient && ingredient.trim() !== "") {
            ingredientsList.push(ingredient);
          }
        }

        setIngredient(ingredientsList);
      } catch (e) {
      } finally {
        // console.log(ingredient);
      }
    },
    move: e => {
      let _this = e.currentTarget;
      setCardPos({
        left: _this.getBoundingClientRect().left,
        top: _this.getBoundingClientRect().top,
      });

      setMousePos({ x: e.clientX, y: e.clientY });
    },
    leave: () => {
      setShowDetails(false);
      setIngredient([]);
    },
  };
  return (
    <main>
      <div
        onMouseEnter={mouseHandler.enter}
        onMouseMove={mouseHandler.move}
        onMouseLeave={mouseHandler.leave}
        className={`rounded border border-[#000000] cursor-pointer hover:scale-102 p-2 flex justify-center items-center relative ${
          showDetails ? "z-50 bg-white" : "z-10 bg-transparent"
        }`}
      >
        <p>{strMeal}</p>
        {showDetails && (
          <MealDetails
            isOverHalf={isOverHalf}
            ingredient={ingredient}
            mousePos={mousePos}
            CardPos={CardPos}
            imgUrl={img}
          />
        )}
      </div>
    </main>
  );
}
