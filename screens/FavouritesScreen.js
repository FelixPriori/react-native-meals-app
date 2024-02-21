import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";

export default function FavouritesScreen() {
  const { ids } = useContext(FavouritesContext)

  const favouriteMeals = MEALS.filter((m) => ids.includes(m.id));

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    )
  }

  return (<MealsList meals={favouriteMeals} />)
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})