import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native"
import { MEALS } from "../data/dummy-data";
import Meal from "../components/Meal";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({ route, navigation }) {
  const { mealId } = route.params
  const meal = MEALS.find((m) => m.id === mealId);

  const headerButtonPressHandler = () => {

  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          onPress={headerButtonPressHandler}
          icon="star"
          color="white"
          size={24}
        />
      )
    })
  }, [mealId, navigation, headerButtonPressHandler])

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