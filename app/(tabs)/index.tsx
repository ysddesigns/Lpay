import { StyleSheet, View } from "react-native";
import React from "react";
import HomeHeader from "@/app/screens/Home/HomeHeader";
import Assets from "@/app/screens/Home/Assets";
import HomeMenu from "@/app/screens/Home/HomeMenu";
import Signup from "@/app/screens/Auth/Signup/signup";
import ForgotPassword from "@/app/screens/Auth/ForgotPassword/forgotpassword";
import OtpScreen from "@/app/screens/Auth/ForgotPassword/EnterOTP";
import ResetPassword from "@/app/screens/Auth/ForgotPassword/ResetPassword";
import Login from "@/app/screens/Auth/login";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        {/* ../screens/Home */}
        {/* user profile info */}
        <HomeHeader />

        {/* user assets info */}
        <Assets />

        {/* home menu */}
        <HomeMenu />

        {/* ads info */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default HomeScreen;
