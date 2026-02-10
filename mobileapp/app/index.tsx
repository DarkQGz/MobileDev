import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import babyData from "./data/babydata";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Index() {
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
            <View style={styles.iconContainer}>{icons[index]}</View>
            <Text style={styles.title}>{item.cname}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
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
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 20,
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
    textAlign: "center",
  },
});
