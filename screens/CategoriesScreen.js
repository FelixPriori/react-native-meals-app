import { StyleSheet, View, FlatList } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"
import { CATEGORIES } from '../data/dummy-data'

export default function CategoriesScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={({ id }) => id}
        numColumns={2}
        renderItem={({ item }) => {
          const pressHandler = () => {
            navigation.navigate("MealsOverview", {
              categoryId: item.id
            })
          }
          return (
            <CategoryGridTile
              title={item.title}
              color={item.color}
              onPress={pressHandler}
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
