import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StepIndicator from "../../components/paymentComponent/StepIndicator";
import TopBar from "../../components/commonComponent/TopBar";
import { globalStyle } from "../../utils/globalStyle";
import CompleteIcon from "../../../assets/PaymentIcon/CompleteIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ConfirmationScreen({ route }) {
  const navigation = useNavigation();
  const [activeStep, setActiveStep] = useState(3);
  const { stars, author } = route.params || {};

  return (
    <View style={[styles.container, globalStyle.container]}>
      {/* Image Section */}
      <TopBar />
      <StepIndicator activeStep={activeStep} />
      <ScrollView contentContainerStyle={styles.details}>
        <CompleteIcon />
        <Text style={styles.text}>Transaction Completed</Text>
        <Image
          source={require("../../../assets/PaymentIcon/bro.png")} // Replace with your image URL
          style={styles.image}
        />
      </ScrollView>

      <TouchableOpacity
        style={styles.enrollButton}
        onPress={() => navigation.navigate("MainApp")}
      >
        <Text style={styles.enrollButtonText}>Continue To Lesson</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  enrollButton: {
    backgroundColor: "#D456DF",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
  },
  enrollButtonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
  text: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: windowHeight * 0.02,
    marginBottom: windowHeight * 0.03,
  },
  details: {
    marginVertical: windowHeight * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.6,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 20,
  },
});
