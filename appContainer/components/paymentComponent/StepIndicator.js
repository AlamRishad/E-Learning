import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const StepIndicator = ({ activeStep }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.stepContainer}>
          <View
            style={[
              activeStep === 1 ? styles.activeOuterCircle : styles.outerCircle,
            ]}
          >
            <View
              style={[activeStep === 1 ? styles.activeCircle : styles.circle]}
            >
              <Text style={styles.circleText}>1</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.line} />
        <TouchableOpacity style={styles.stepContainer}>
          <View
            style={[
              activeStep === 2 ? styles.activeOuterCircle : styles.outerCircle,
            ]}
          >
            <View
              style={[activeStep === 2 ? styles.activeCircle : styles.circle]}
            >
              <Text style={styles.circleText}>2</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.stepContainer}>
          <View
            style={[
              activeStep === 3 ? styles.activeOuterCircle : styles.outerCircle,
            ]}
          >
            <View
              style={[activeStep === 3 ? styles.activeCircle : styles.circle]}
            >
              <Text style={styles.circleText}>3</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.stepLabel}>Overview</Text>
        <Text style={styles.stepLabel}>Payment Method</Text>
        <Text style={styles.stepLabel}>Confirmation</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0e6f6", // Light purple background
    padding: 10,
    borderRadius: 10,
    margin: 20,
  },
  stepContainer: {
    alignItems: "center",
  },
  circle: {
    backgroundColor: "#8AB3B5", // Default circle color
    width: 33,
    height: 33,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  outerCircle: {
    width: 41,
    height: 41,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#C6D0D7", // Default outer circle color
  },
  activeCircle: {
    backgroundColor: "#9E08AB", // Active circle color (deep purple)
    width: 33,
    height: 33,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 5,
  },
  activeOuterCircle: {
    backgroundColor: "#E07CD6",
    width: 41,
    height: 41,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  circleText: {
    color: "#fff",
    fontWeight: "bold",
  },
  stepLabel: {
    fontSize: 12,
    color: "#333",
  },
  line: {
    height: 1,
    flex: 1,
    marginTop: -15,
    width: 100,
    backgroundColor: "#8e2ad6", // Line color
    // marginHorizontal: 5,
    // alignItems: "center",
  },
});

export default StepIndicator;
