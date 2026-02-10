import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import babyData from "./data/babydata";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={babyData}
        horizontal
        keyExtractor={(item) => item.cid.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <FontAwesome5 name={item.cicon} size={24} color="black" />
            <Text style={styles.title}>{item.cname}</Text>
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
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 20,
    marginRight: 12,
    minWidth: 220,
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
