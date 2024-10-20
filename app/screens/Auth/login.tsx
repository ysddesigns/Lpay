import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Logic for handling login (API call)
    if (!emailOrPhone || !password) {
      Alert.alert(
        "Missing Fields",
        "Please enter both email/phone and password."
      );
      return;
    }

    // Placeholder for successful login
    Alert.alert("Login Successful", "Welcome back to your finance app!");
    // Navigate to the home screen or the main application flow
    console.log({ emailOrPhone, password });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Login</Text>

      {/* Email or Phone Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#007AFF" />
        <TextInput
          placeholder="Email or Phone"
          style={styles.input}
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          keyboardType="email-address"
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

      {/* Forgot Password */}
      <Pressable>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </Pressable>

      {/* Login Button */}
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>

      {/* Sign Up Redirect */}
      <View style={styles.signupRedirect}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Pressable>
          <Text style={styles.signupLink}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

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
  forgotPasswordText: {
    textAlign: "right",
    color: "#007AFF",
    marginVertical: 10,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  loginButtonText: {
    color: "#fefefe",
    fontSize: 16,
    fontWeight: "600",
  },
  signupRedirect: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  signupText: {
    color: "#A9A9A9",
  },
  signupLink: {
    color: "#007AFF",
    marginLeft: 5,
    fontWeight: "600",
  },
});
