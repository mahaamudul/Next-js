import React from "react";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
};

type MealCardProps = {
  meal: Meal;
};

const MealCard = ({ meal }: MealCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">{meal.strMeal}</h2>

        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
            {meal.strCategory}
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            {meal.strArea}
          </span>
        </div>

        <button className="mt-5 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
};

export default MealCard;