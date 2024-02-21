import { FlatList, View, StyleSheet } from "react-native"
import MealItem from "./MealItem"

export default function MealsList({ meals }) {
  const renderMealItem = ({ item }) => <MealItem {...item} />

  return (
    <View>
      <FlatList
        data={meals}
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