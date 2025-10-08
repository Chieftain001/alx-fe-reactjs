import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-600">Recipe not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold text-blue-800 mt-4">{recipe.title}</h1>
      <p className="text-gray-600 mt-2">{recipe.summary}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Ingredients
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Cooking Instructions
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
