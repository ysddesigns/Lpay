import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 5,
          alignItems: "center",
          marginRight: 5,
        }}
      >
        <Image
          source={require("@/assets/images/smart.png")}
          style={styles.userProfilePicture}
          // resizeMode="contain"
        />
        <Text style={{ marginLeft: 5 }}>Hi, Yusuff</Text>
      </View>

      <Ionicons name="notifications-circle" size={40} color={"blue"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  userProfilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
export default HomeHeader;
