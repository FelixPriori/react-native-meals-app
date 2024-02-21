import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native"
import Meal from "../components/Meal";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";

export default function MealDetailScreen({ route, navigation }) {
  const [mealIsFavourite, setMealIsFavourite] = useState()
  const { addFavourite, removeFavourite, ids } = useContext(FavouritesContext)
  const { mealId } = route.params
  const meal = MEALS.find((m) => m.id === mealId);

  const changeFavouriteStatusHandler = () => {
    if (mealIsFavourite) {
      removeFavourite(meal.id)
    } else {
      addFavourite(meal.id)
    }
  }

  useLayoutEffect(() => {
    setMealIsFavourite(ids.includes(mealId))
  }, [ids, mealId])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          onPress={changeFavouriteStatusHandler}
          icon={mealIsFavourite ? 'star' : 'star-outline'}
          color="white"
          size={24}
        />
      )
    })
  }, [mealId, navigation, changeFavouriteStatusHandler])

  if (!meal) {
    return;
  }

  return (
    <View style={styles.container}>
      <Meal {...meal} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})