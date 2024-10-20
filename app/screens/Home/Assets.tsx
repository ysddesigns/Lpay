import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import TransactionButton from "@/components/Button/TransactionButton";

const Assets: React.FC = () => {
  const [showAsset, setShowAsset] = useState(true);

  // Determine icon name based on showAsset state
  const iconName = showAsset ? "eye" : "eye-off-sharp";

  const toggleShowAsset = () => {
    setShowAsset((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Ionicons name="wallet-outline" color={"#fefefe"} size={20} />
        <Text style={styles.text}>Balance</Text>
      </View>
      <View style={styles.asset}>
        {showAsset ? (
          <Text style={[styles.text, styles.balanceText]}>
            <Text style={{ fontSize: 14 }}>₦</Text>
            730,264.09
          </Text>
        ) : (
          <Text style={styles.text}>*******</Text>
        )}
        <Ionicons
          name={iconName}
          color={"#fefefe"}
          size={20}
          onPress={toggleShowAsset}
        />
      </View>
      {/* Primary Transaction Buttons */}
      <View style={styles.transactionButton}>
        <TransactionButton buttonName="Deposit" iconName="send" />
        <TransactionButton buttonName="Withdraw" iconName="download" />
        <TransactionButton buttonName="Transfer" iconName="share" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#05161A",
    borderRadius: 7,
    margin: 5,
    padding: 9,
  },
  asset: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  text: {
    color: "#fefefe",
  },
  balanceText: {
    fontSize: 25,
    fontWeight: "700",
  },
  transactionButton: {
    flexDirection: "row",
  },
});

export default Assets;
