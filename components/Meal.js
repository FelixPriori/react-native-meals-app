import { Text, View, StyleSheet, Image, Platform, ScrollView } from "react-native";
import MealDetails from "./MealDetails";
import Subtitle from "./MealDetail/Subtitle";
import List from "./MealDetail/List";

export default function Meal({
  title,
  imageUrl,
  complexity,
  duration,
  affordability,
  ingredients,
  steps
}) {
  return (
    <ScrollView style={styles.meal}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <MealDetails
        duration={duration}
        affordability={affordability}
        complexity={complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List list={ingredients} style={styles.detailText} />
          <Subtitle>Steps</Subtitle>
          <List ordered list={steps} style={styles.detailText} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  meal: {
    marginBottom: 32
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: 'center',
    margin: 8,
    color: 'white'
  },
  image: {
    width: '100%',
    height: 350,
  },
  detailText: {
    color: 'white'
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    maxWidth: '80%',
  },
})