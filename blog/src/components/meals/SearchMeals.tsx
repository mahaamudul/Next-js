"use client";

import React, { FormEvent, useEffect, useState } from "react";
import MealCard from "./MealCard";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
};

const SearchMeals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMeals = async (query: string) => {
    if (!query.trim()) {
      setMeals([]);
      setError("");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch meals.");
      }

      const data = await res.json();

      if (!data.meals) {
        setMeals([]);
        setError("No meals found.");
        return;
      }

      setMeals(data.meals);
    } catch (err) {
      console.error(err);
      setMeals([]);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Live Search
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMeals(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Search Button
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchMeals(search);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 rounded-lg bg-white p-4 shadow"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search meals..."
          className="flex-1 rounded-md border px-4 py-2 outline-none"
        />

        <button
          type="submit"
          className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && (
        <p className="mt-6 text-center text-blue-600">Loading...</p>
      )}

      {!loading && error && (
        <p className="mt-6 text-center text-red-500 font-semibold">
          {error}
        </p>
      )}

      {!loading && meals.length > 0 && (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchMeals;