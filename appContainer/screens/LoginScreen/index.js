import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <Image
        source={require("../../../assets/Group 4.png")} // Replace with your image URL
        style={styles.image}
        resizeMode="contain"
      />

      {/* Text Section */}
      <Text style={styles.heading}>
        Join E <Text style={styles.highlight}>Learner</Text> To KickStart Your
        Journey
      </Text>
      <Text style={styles.subheading}>
        Lorem ipsum dolor sit amet consectetur. A at augue sit blandit
        fermentum.
      </Text>

      {/* Button Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate("SignIn")} // Navigate to Sign In screen
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.5,
    marginBottom: 30,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  highlight: {
    color: "#A020F0", // Purple color
  },
  subheading: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 55,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  signInButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: "#A020F0", // Purple color
    borderRadius: 5,
    alignItems: "center",
  },
  signUpButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: "#A020F0", // Purple color
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
  },
});
