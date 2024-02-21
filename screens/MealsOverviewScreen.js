import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native"
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data"

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params

  const displayedMeals = MEALS.filter((m) => m.categoryIds.indexOf(categoryId) >= 0);

  const renderMealItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealDetail", {
        mealId: item.id
      })
    }
    return <MealItem {...item} onPress={pressHandler} />
  }

  useLayoutEffect(() => {
    const { title } = CATEGORIES.find(({ id }) => id === categoryId)
    navigation.setOptions({ title })
  }, [categoryId, navigation])

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={({ id }) => id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})