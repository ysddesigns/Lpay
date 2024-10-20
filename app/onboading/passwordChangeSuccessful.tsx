import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ButtonCard from "@/components/Button/TransactionButton";

const ChangePassword = () => {
  const changePassword = () => {};
  return (
    <View style={styles.container}>
      <Text>Sucessful</Text>

      <Image source={require("@/assets/images/changePassSucces.png")} />
      <Text>You have successfully chahe your Password</Text>

      <ButtonCard
        buttonName="Change Password"
        buttonStyle={styles.changePasswordBtn}
        buttonTextStyle={styles.buttonTextStyle}
        handlePress={changePassword}
      />
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    backgroundColor: "white",
    marginTop: 37,
    padding: 13,
    margin: 7,
    borderRadius: 7,
  },

  buttonStyle: {
    backgroundColor: "#281C90",
    borderRadius: 10,
    width: "100%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonTextStyle: {},
  changePasswordBtn: {},
});
