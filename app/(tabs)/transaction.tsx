import { StatusBar, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import TransactionHistory from "@/app/screens/Transactions/TransactionHome";

const Transaction = () => {
  return (
    <View style={styles.container}>
      <TransactionHistory />
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  listContainer: {},
  individualContainer: {
    backgroundColor: "#fefefe",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 3,
    padding: 5,
  },
  transactionConditionCText: {
    color: "green",
    fontStyle: "italic",
  },
  listHeaderText: {
    fontSize: 20,
  },
});
