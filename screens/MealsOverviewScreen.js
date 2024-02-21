import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params

  const displayedMeals = MEALS.filter((m) => m.categoryIds.indexOf(categoryId) >= 0);

  useLayoutEffect(() => {
    const { title } = CATEGORIES.find(({ id }) => id === categoryId)
    navigation.setOptions({ title })
  }, [categoryId, navigation])

  return (
    <MealsList meals={displayedMeals} />
  )
}