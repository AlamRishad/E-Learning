import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StepIndicator from "../../components/paymentComponent/StepIndicator";
const windowWidth = Dimensions.get("window").width;

export default function LoginScreen() {
  const navigation = useNavigation();
  const [activeStep, setActiveStep] = useState(1);
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <StepIndicator activeStep={activeStep} />
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
