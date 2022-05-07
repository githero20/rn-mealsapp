import { useLayoutEffect } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
    //   this returns the categoryIds array that includes the current catId
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  <MealsList displayedMeals={displayedMeals} />;
}

export default MealsOverviewScreen;
