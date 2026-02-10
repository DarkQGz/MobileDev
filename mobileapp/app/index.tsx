// App.tsx
import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import babyData from "./data/babydata";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {babyData.map((cat) => (
        <View key={cat.cid} style={styles.category}>
          <Text style={styles.categoryTitle}>{cat.cname}</Text>

          {cat.subcat.map((sub) => (
            <View key={sub.sid} style={styles.subCategory}>
              <Text style={styles.subTitle}>• {sub.sname}</Text>

              {sub.item.map((item) => (
                <Text key={item.iid} style={styles.item}>
                  - {item.iname}
                </Text>
              ))}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 16,
  },
  category: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subCategory: {
    marginLeft: 12,
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  item: {
    fontSize: 16,
    marginLeft: 12,
  },
});
