import SearchMeals from "../../../components/meals/SearchMeals";

export default function MealsPage() {
  return (
    <div className="mx-auto max-w-7xl p-8">
      <h1 className="mb-2 text-center text-4xl font-bold">
        Choose Your Meals
      </h1>

      <p className="mb-8 text-center text-gray-500">
        Search delicious meals from around the world.
      </p>

      <SearchMeals />
    </div>
  );
}