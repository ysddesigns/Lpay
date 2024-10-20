import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeCardItem from "./HomeCardsItem";

const HomeMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <HomeCardItem
          iconName={"wallet"}
          buttonName="Data"
          size={30}
          color="blue"
        />
        <HomeCardItem
          iconName={"wallet"}
          buttonName="Airtime"
          size={30}
          color="orange"
        />
        <HomeCardItem
          iconName={"wallet"}
          buttonName="Savings"
          size={30}
          color="brown"
        />
        <HomeCardItem
          iconName={"wallet"}
          buttonName="Bills"
          size={30}
          color="purple"
        />
        <HomeCardItem iconName={"tv"} buttonName="TV" size={30} color="red" />
        <HomeCardItem
          iconName={"wallet"}
          buttonName="Electricity"
          size={30}
          color="brown"
        />
        <HomeCardItem
          iconName={"wallet"}
          buttonName="Sports"
          size={30}
          color="purple"
        />
        <HomeCardItem
          iconName={"wallet"}
          buttonName="More"
          size={30}
          color="red"
        />
      </View>
    </View>
  );
};

export default HomeMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#05161A", // Dark background like the transaction history style
    borderRadius: 10,
    padding: 10,
    margin: 10,
    elevation: 5,
  },
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
