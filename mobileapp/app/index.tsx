import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import babyData from "./data/babydata";

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={babyData}
        horizontal
        keyExtractor={(item) => item.cid.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.cname}</Text>

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
  },
  sub: {
    fontSize: 14,
  },
  count: {
    fontSize: 14,
    fontWeight: "600",
  },
});
