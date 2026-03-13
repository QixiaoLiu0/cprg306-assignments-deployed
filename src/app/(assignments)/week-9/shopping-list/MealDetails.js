"use client";

import { useState, useEffect, useRef } from "react";

export default function MealDetails({
  isOverHalf,
  ingredient,
  mousePos,
  CardPos,
  imgUrl,
}) {
  const [width, setWidth] = useState(0);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (detailsRef.current) {
      setWidth(detailsRef.current.offsetWidth);
    }
  }, [ingredient]);

  return (
    <main
      ref={detailsRef}
      className="w-max max-w-sm bg-white absolute border border-gray-200 rounded shadow-2xl p-4"
      style={{
        left: isOverHalf
          ? mousePos.x - CardPos.left - width - 20
          : mousePos.x - CardPos.left + 20,
        top: mousePos.y - CardPos.top + 25,
      }}
    >
      <img src={imgUrl} className="w-[400]" />
      <h2 className="font-bold">Ingredients:</h2>
      <ul>
        {ingredient.map((item, index) => {
          return (
            <li key={index} className="text-gray-700 text-sm">
              {item}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
