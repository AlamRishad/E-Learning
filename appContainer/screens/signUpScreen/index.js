import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CustomTextInput from "../../components/commonComponent/CustomTextInput";
const windowWidth = Dimensions.get("window").width;

export default function SignUpScreen() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  return (
    <View style={styles.container}>
      {/* Sign In Header */}
      <Text style={styles.header}>
        Sign In<Text style={styles.headerDot}>.</Text>
      </Text>
      <Text style={styles.subHeader}>Blend the queue & Automate learning.</Text>

      <CustomTextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      {/* Email Input */}
      <CustomTextInput
        placeholder="Contact@gmail.com"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password Input */}
      <CustomTextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Password Input */}
      <CustomTextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      {/* Forget Password Text */}
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forget Password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>SIGN IN</Text>
      </TouchableOpacity>

      {/* Or Sign In With */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or Sign In With</Text>
        <View style={styles.divider} />
      </View>

      {/* Sign In With Facebook */}
      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="facebook" size={24} color="white" />
        <Text style={styles.socialButtonText}>Sign In With Facebook</Text>
      </TouchableOpacity>

      {/* Sign In With Google */}
      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="google" size={24} color="white" />
        <Text style={styles.socialButtonText}>Sign In With Google</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <TouchableOpacity style={styles.signUpContainer}>
        <Text style={styles.signUpText}>
          Don't Have An Account?{" "}
          <Text style={styles.signUpLink}>Sign Up Here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginTop: 40,
    marginBottom: 10,
  },
  headerDot: {
    color: "#A020F0", // Purple color for the dot
  },
  subHeader: {
    fontSize: 14,
    color: "#A9A9A9",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#A020F0", // Purple border color
    borderRadius: 5,
    marginBottom: 20,
    color: "#000",
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  forgotPassword: {
    color: "#A020F0", // Purple color
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: "#A020F0", // Purple background
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 30,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#A9A9A9",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#A9A9A9",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A020F0", // Purple background
    padding: 15,
    borderRadius: 5,
    width: "100%",
    marginBottom: 15,
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  signUpContainer: {
    marginTop: 20,
  },
  signUpText: {
    color: "#A9A9A9",
    fontSize: 14,
  },
  signUpLink: {
    color: "#A020F0", // Purple color
    fontWeight: "bold",
  },
});
