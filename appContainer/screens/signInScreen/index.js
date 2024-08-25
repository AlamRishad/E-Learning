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
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../../components/commonComponent/CustomTextInput";
const windowWidth = Dimensions.get("window").width;

export default function SignInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Sign In<Text style={styles.headerDot}>.</Text>
      </Text>
      <Text style={styles.subHeader}>
        sisectetur. A at augue sit blandit fermentum.
      </Text>

      <Text style={styles.title}>Email Here</Text>
      <CustomTextInput
        placeholder="Contact@gmail.com"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password Input */}
      <Text style={styles.title}>Password</Text>
      <CustomTextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Forget Password Text */}
      <TouchableOpacity
        style={styles.forgotPasswordContainer}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Text style={styles.forgotPassword}>Forget Password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("MainApp")}
      >
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
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>
          Don't Have An Account?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpLink}>Sign Up Here</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    marginTop: 40,
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

  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  forgotPassword: {
    color: "#8D8989", // Purple color
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: "#E07CD6", // Purple background
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9E08AB",
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 15,
    color: "black",
    fontWeight: "600",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(24, 119, 242, 0.79)",
    padding: 20,
    borderRadius: 5,
    width: "100%",
    marginBottom: 15,
    textAlign: "center",
    justifyContent: "center",
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 20,
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
