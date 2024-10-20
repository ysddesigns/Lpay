import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    // Add validation and sign-up logic here

    console.log({ fullName, email, phone, password });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Sign Up</Text>

      {/* Full Name Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#007AFF" />
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#007AFF" />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Phone Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={20} color="#007AFF" />
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#007AFF" />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#007AFF"
          />
        </Pressable>
      </View>

      {/* Sign Up Button */}
      <Pressable style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Create Account</Text>
      </Pressable>

      {/* Login Redirect */}
      <View style={styles.loginRedirect}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <Pressable>
          <Text style={styles.loginLink}>Log in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    padding: 20,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#05161A",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#EDEDED",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  signupButtonText: {
    color: "#fefefe",
    fontSize: 16,
    fontWeight: "600",
  },
  loginRedirect: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  loginText: {
    color: "#A9A9A9",
  },
  loginLink: {
    color: "#007AFF",
    marginLeft: 5,
    fontWeight: "600",
  },
});
