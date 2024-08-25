import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomTextInput from "../../components/commonComponent/CustomTextInput";
export default function ResetPasswordScreen() {
  const navigation = useNavigation();
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Reset Password<Text style={styles.headerDot}>.</Text>
      </Text>
      <Text style={styles.subHeader}>
        sisectetur. A at augue sit blandit fermentum.
      </Text>

      <Text style={styles.title}>Password</Text>

      <CustomTextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Text style={styles.title}>Confirm Password</Text>

      <CustomTextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      {/* Sign In Button */}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.signInButtonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    padding: 20,
    // alignItems: "center",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    marginTop: 80,
    marginBottom: 10,
    textAlign: "center",
  },
  headerDot: {
    color: "#9E08AB",
    // width: 20,
    // height: 25,
    fontSize: 50,
  },
  subHeader: {
    fontSize: 16,
    color: "#A9A9A9",
    textAlign: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    justifyContent: "flex-start",
    marginBottom: 8,
    marginTop: 8,
  },

  signInButton: {
    backgroundColor: "#E07CD6", // Purple background
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9E08AB",
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
  },
});
