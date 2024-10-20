import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import ButtonCard from "@/components/Button/TransactionButton";

const OtpScreen = () => {
  const handleButtonPress = () => {};

  const changePassword = () => {};
  return (
    <View>
      <Text>type a code here</Text>

      <View>
        <TextInput
          placeholder="####"
          keyboardType="phone-pad"
          style={styles.OTPinput}
        />

        <ButtonCard
          buttonName="Resend"
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
          handlePress={handleButtonPress}
        />
      </View>

      <Text>
        we text you a code to verify your
        <Text>Phone Number</Text>
        This code will expire in 10 minutes after this messsage. if you don't
        get a message
      </Text>
      <ButtonCard
        buttonName="Change Password"
        buttonStyle={styles.changePasswordBtn}
        buttonTextStyle={styles.buttonTextStyle}
        handlePress={changePassword}
      />
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  OTPinput: {},
  buttonStyle: {},
  buttonTextStyle: {},
  changePasswordBtn: {},
});
