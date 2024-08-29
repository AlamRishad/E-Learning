import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // For icons, you can use react-native-vector-icons
import PlusIcon from "../../../assets/PaymentIcon/Plus";
import PlusActiveIcon from "../../../assets/PaymentIcon/PlusActive";
import AddDetails from "./AddDetails";
const PaymentMethod = () => {
  const [activeStep, setActiveStep] = useState(null);
  const handleTabPress = (tab) => {
    setActiveStep(tab);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Payment Method</Text>

      <TouchableOpacity
        style={[
          activeStep === "Paypal"
            ? [styles.methodBox, styles.selectedBox]
            : styles.methodBox,
        ]}
        onPress={() => handleTabPress("Paypal")}
      >
        <View style={styles.iconContainer}>
          {activeStep === "Paypal" ? <PlusActiveIcon /> : <PlusIcon />}
        </View>
        <Text
          style={[
            activeStep === "Paypal"
              ? [styles.methodText, styles.selectedText]
              : styles.methodText,
          ]}
        >
          Paypal
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          activeStep === "Add Credit Card"
            ? [styles.methodBox, styles.selectedBox]
            : styles.methodBox,
        ]}
        onPress={() => handleTabPress("Add Credit Card")}
      >
        <View style={styles.iconContainer}>
          {activeStep === "Add Credit Card" ? <PlusActiveIcon /> : <PlusIcon />}
        </View>
        <Text
          style={[
            activeStep === "Add Credit Card"
              ? [styles.methodText, styles.selectedText]
              : styles.methodText,
          ]}
        >
          Add Credit Card
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          activeStep === "Google Pay"
            ? [styles.methodBox, styles.selectedBox]
            : styles.methodBox,
        ]}
        onPress={() => handleTabPress("Google Pay")}
      >
        <View style={styles.iconContainer}>
          {activeStep === "Google Pay" ? <PlusActiveIcon /> : <PlusIcon />}
        </View>
        <Text
          style={[
            activeStep === "Google Pay"
              ? [styles.methodText, styles.selectedText]
              : styles.methodText,
          ]}
        >
          Google Pay
        </Text>
      </TouchableOpacity>
      {activeStep == "Add Credit Card" && <AddDetails />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  methodBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C6D0D7",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  selectedBox: {
    backgroundColor: "#F2E1F3",
  },
  methodText: {
    fontSize: 16,
    marginLeft: 10,
  },
  selectedText: {},
  iconContainer: {
    width: 30,
    // height: 20,
  },
});

export default PaymentMethod;
