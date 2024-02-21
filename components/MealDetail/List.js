import { Text, View, StyleSheet } from "react-native"

export default function List({ list, ordered = false }) {
  return list.map((item, index) => (
    <View style={[styles.listItem, ordered ? styles.ordered : null]} key={item}>
      {ordered && <Text>{index + 1}{')'}</Text>}
      <Text style={styles.text} >{item}</Text>
    </View>
  ))
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  ordered: {
    flexDirection: 'row',
    columnGap: 4
  },
  itemText: {
    color: '#351401',
    textAlign: 'center'
  }
})