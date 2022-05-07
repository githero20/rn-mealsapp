import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/favourites-context";

const FavouritesScreen = () => {
  // const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMealIds = useSelector((state) => {
    state.favouriteMeals.ids;
  });

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList displayedMeals={favouriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default FavouritesScreen;
