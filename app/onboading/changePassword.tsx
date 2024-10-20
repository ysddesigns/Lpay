import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import ButtonCard from "@/components/Button/TransactionButton";
import { router } from "expo-router";

const ChangePassword = () => {
  const handlePasswordChangePress = () => {
    router.push("/onboading/passwordChangeSuccessful");
  };

  return (
    <View style={styles.container}>
      <Text>New password</Text>

      <TextInput placeholder="##-##-##-##" style={styles.newPassword} />

      <Text>Confirm password</Text>
      <TextInput placeholder="##-##-##-##" style={styles.newPassword} />

      <ButtonCard
        buttonName="Change Password"
        buttonStyle={styles.changePasswordBtn}
        buttonTextStyle={styles.buttonTextStyle}
        handlePress={handlePasswordChangePress}
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
  newPassword: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 9,
    margin: 5,
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
