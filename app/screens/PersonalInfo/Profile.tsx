import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Header with Settings */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <Pressable style={styles.settings}>
          <Ionicons name="settings" size={30} color={"#05161A"} />
        </Pressable>
      </View>

      {/* Profile Picture and Username */}
      <View style={styles.profileContainer}>
        <Image
          source={require("@/assets/images/smart.png")}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Yusuff</Text>
        <Text style={styles.userInfo}>yusuff@financeapp.com</Text>
        <Text style={styles.userInfo}>Account Number: 1234567890</Text>
      </View>

      {/* Account Overview */}
      <View style={styles.accountOverview}>
        <Text style={styles.sectionTitle}>Account Overview</Text>
        <View style={styles.accountDetails}>
          <Text style={styles.balanceText}>Balance: ₦730,264.09</Text>
          <Text style={styles.otherDetails}>Total Transactions: 52</Text>
        </View>
      </View>

      {/* Options / Action Buttons */}
      <View style={styles.actionsContainer}>
        <Pressable style={styles.actionButton}>
          <Ionicons name="person-circle-outline" size={24} color={"#05161A"} />
          <Text style={styles.actionText}>Edit Profile</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Ionicons name="lock-closed-outline" size={24} color={"#05161A"} />
          <Text style={styles.actionText}>Security Settings</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Ionicons name="receipt-outline" size={24} color={"#05161A"} />
          <Text style={styles.actionText}>Transaction History</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Ionicons name="log-out-outline" size={24} color={"#05161A"} />
          <Text style={[styles.actionText, styles.logoutText]}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#05161A",
  },
  settings: {
    padding: 5,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: "600",
    color: "#05161A",
  },
  userInfo: {
    fontSize: 14,
    color: "#A9A9A9",
    marginTop: 5,
  },
  accountOverview: {
    backgroundColor: "#0A2E36",
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fefefe",
    marginBottom: 10,
  },
  accountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fefefe",
  },
  otherDetails: {
    fontSize: 14,
    color: "#A9A9A9",
  },
  actionsContainer: {
    marginTop: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fefefe",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderColor: "#EDEDED",
    borderWidth: 1,
  },
  actionText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "#05161A",
  },
  logoutText: {
    color: "#FF3B30",
  },
});
