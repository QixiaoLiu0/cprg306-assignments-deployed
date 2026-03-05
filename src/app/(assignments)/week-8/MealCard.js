"use client";

export default function MealCard({ strMeal, img }) {
  const enter = () => {
    console.log("enter");
  };
  const move = () => {
    console.log("move");
  };
  const leave = () => {
    console.log("leave");
  };
  return (
    <main
      onMouseEnter={enter}
      onMouseMove={move}
      onMouseLeave={leave}
      className="rounded border border-[#000000] cursor-pointer hover:scale-105 p-2 flex justify-center items-center"
    >
      {strMeal}
    </main>
  );
}
