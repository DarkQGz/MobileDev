import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import babyData from "./data/babydata";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Index() {
  // Array of icons corresponding to each category
  const icons = [
    <FontAwesome5 name="wolf-pack-battalion" size={40} color="black" />,
    <MaterialCommunityIcons name="food-turkey" size={40} color="black" />,
    <FontAwesome5 name="car-crash" size={40} color="black" />,
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={babyData}
        horizontal
        keyExtractor={(item) => item.cid.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            {/* ICON ABOVE TITLE */}
            <View style={styles.iconContainer}>
              {icons[index] /* Select icon based on category index */}
            </View>

            {/* CATEGORY TITLE */}
            <Text style={styles.title}>{item.cname}</Text>

            {/* SUBCATEGORIES */}
            {item.subcat.map((sub) => (
              <View key={sub.sid} style={styles.row}>
                <Text style={styles.sub}>{sub.sname}</Text>
                <Text style={styles.count}>{sub.item.length}</Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingLeft: 12,
  },
  card: {
    backgroundColor: "#f2f2f2", // light gray
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    minWidth: 220,
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
  },
  sub: {
    fontSize: 14,
  },
  count: {
    fontSize: 14,
    fontWeight: "600",
  },
});
