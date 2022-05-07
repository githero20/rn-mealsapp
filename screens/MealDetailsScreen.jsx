import { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { removeFavourite, addFavourite } from "../store/redux/favourites";
// import { FavouritesContext } from "../store/context/favourites-context";

function MealDetailScreen({ route, navigation }) {
  // const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);
  // we use this to get the value of the state i.e. state.storeReducerName.value
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favouriteMealsCtx.ids.includes(MealDetailScreen);

  // REDUX
  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      dispatch(removeFavourite({ id: mealId }));
      // it accepts a payload, as specified in the slice
    } else {
      dispatch(addFavourite({ id: mealId }));
    }
  }

  // CONTEXT
  // function changeFavouriteStatusHandler() {
  //   if (mealIsFavourite) {
  //     favouriteMealsCtx.removeFavourite(mealId);
  //   } else {
  //     favouriteMealsCtx.addFavourite(mealId);
  //   }
  // }

  useLayoutEffect(() => {
    // this runs while the page is being rendered i.e. after the DOM has been updated but before the browser has "painted" the page, a opposed to useEffect that waits till the page has been "painted" by the browser
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
