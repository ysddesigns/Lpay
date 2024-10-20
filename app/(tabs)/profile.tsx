import Profile from "@/app/screens/PersonalInfo/Profile";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.Container}>
      {/* <Tests /> */}
      {/* <SelectPaymentMethod /> */}
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});
